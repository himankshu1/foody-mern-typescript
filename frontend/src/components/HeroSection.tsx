import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import HeroImage from "@/assets/hero_pizza.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const [searchText, setSearchText] = useState<string>("");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
            <div className="flex flex-col gap-10 md:w-[40%]">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
                        Order food anytime and anywhere
                    </h1>
                    <p className="text-zinc-500 text-xl">
                        Our delicious food is waiting. We are always near to
                        you.
                    </p>
                </div>

                <div className="relative flex items-center gap-2 w-full">
                    <Input
                        type="text"
                        value={searchText}
                        placeholder="search restaurant, food, or cuisine"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setSearchText(e.target.value)
                        }
                        className="pl-10 shadow-lg"
                    />
                    <Search className="text-zinc-500 absolute inset-y-1.5 left-2" />

                    <Button
                        className="bg-orange hover:bg-hoverOrange"
                        onClick={() => {
                            if (searchText !== "") {
                                navigate(`/search/${searchText}`);
                            }
                        }}
                    >
                        Search
                    </Button>
                </div>
            </div>

            <div>
                <img
                    src={HeroImage}
                    alt="hero-image"
                    className="object-cover w-full max-h-[500px]"
                />
            </div>
        </div>
    );
}
