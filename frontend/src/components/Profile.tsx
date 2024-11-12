import { LandPlot, Loader2, Mail, MapPin, Phone, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Profile() {
    const [profileData, setProfileData] = useState({
        fullname: "",
        email: "",
        contact: "",
        address: "",
        city: "",
        profilePicture: "",
    });
    const imageRef = useRef<HTMLInputElement | null>(null);

    const isLoading = false;

    //* generating an image url and updating in the profile data object
    const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const result = URL.createObjectURL(file);
            setProfileData({ ...profileData, profilePicture: result });
        }
    };

    //* handling the input change event
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    //* profile data update handler
    const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(profileData);
    };

    return (
        <form
            className="max-w-7xl mx-auto my-5"
            onSubmit={updateProfileHandler}
        >
            {/* profile picture and name */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
                        <AvatarImage src={profileData.profilePicture} />
                        <AvatarFallback>CN</AvatarFallback>

                        <input
                            type="file"
                            className="hidden"
                            ref={imageRef}
                            accept="image/*"
                            onChange={fileChangeHandler}
                        />

                        <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-150 bg-black bg-opacity-50 rounded-full cursor-pointer"
                            onClick={() => imageRef.current?.click()}
                        >
                            <Plus className="text-white w-8 h-8" />
                        </div>
                    </Avatar>

                    <Input
                        type="text"
                        name="fullname"
                        value={profileData.fullname}
                        onChange={inputChangeHandler}
                        className="font-bold text-2xl border-0 border-b-4 border-zinc-600 focus-visible:ring-transparent py-6 px-3 focus:border-b-4"
                        placeholder="You name here"
                    />
                </div>
            </div>

            {/* profile items */}
            <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
                <div className="flex items-center gap-4 rounded-sm p-2">
                    <Mail className="text-zinc-500" />
                    <div className="w-full">
                        <Label>Email</Label>
                        <input
                            type="text"
                            name="email"
                            value={profileData.email}
                            onChange={inputChangeHandler}
                            className="font-medium text-md border-0 border-b-2 border-zinc-600 focus-visible:ring-transparent p-2 focus:border-b-orange focus:outline-none"
                            placeholder="your email address"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-sm p-2">
                    <MapPin className="text-zinc-500" />
                    <div className="w-full">
                        <Label>Address</Label>
                        <input
                            type="text"
                            name="address"
                            value={profileData.address}
                            onChange={inputChangeHandler}
                            className="font-medium text-md border-0 border-b-2 border-zinc-600 focus-visible:ring-transparent p-2 focus:border-b-orange focus:outline-none"
                            placeholder="new address"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-sm p-2">
                    <LandPlot className="text-zinc-500" />
                    <div className="w-full">
                        <Label>City</Label>
                        <input
                            type="text"
                            name="city"
                            value={profileData.city}
                            onChange={inputChangeHandler}
                            className="font-medium text-md border-0 border-b-2 border-zinc-600 focus-visible:ring-transparent p-2 focus:border-b-orange focus:outline-none"
                            placeholder="your new city"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 rounded-sm p-2">
                    <Phone className="text-zinc-500" />
                    <div className="w-full">
                        <Label>Phone</Label>
                        <input
                            type="text"
                            name="contact"
                            value={profileData.contact}
                            onChange={inputChangeHandler}
                            className="font-medium text-md border-0 border-b-2 border-zinc-600 focus-visible:ring-transparent p-2 focus:border-b-orange focus:outline-none"
                            placeholder="new contact number"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Button
                    className="bg-orange hover:bg-hoverOrange"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Please wait</span>
                        </div>
                    ) : (
                        "Update Profile"
                    )}
                </Button>
            </div>
        </form>
    );
}
