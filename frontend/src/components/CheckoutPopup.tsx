import { OpenPopupProps } from "@/lib/types";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { CheckoutInputType, CheckoutSchema } from "@/schema/userSchema";
import { Button } from "./ui/button";

export default function CheckoutPopup({ open, setOpen }: OpenPopupProps) {
    const [input, setInput] = useState<CheckoutInputType>({
        fullname: "",
        contact: "",
        address: "",
        city: "",
    });
    const [errors, setErrors] = useState<Partial<CheckoutInputType>>({});

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const formSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        const zodErrors = CheckoutSchema.safeParse(input);
        if (!zodErrors.success) {
            const errors = zodErrors.error.formErrors.fieldErrors;
            setErrors(errors as Partial<CheckoutInputType>);
            return;
        }

        console.log(input);
        //TODO api implementation
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogTitle>Review your order</DialogTitle>
                <DialogDescription>
                    Please check and confirm your order and the address for
                    seamless order delivery
                </DialogDescription>

                <form
                    onSubmit={formSubmitHandler}
                    className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0"
                >
                    <div className="">
                        <Label>Receiver's name</Label>
                        <Input
                            type="text"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeHandler}
                            required
                        />
                        {errors.fullname && (
                            <span className="text-red-500 text-sm font-medium">
                                * {errors.fullname}
                            </span>
                        )}
                    </div>

                    <div className="">
                        <Label>Contact Number</Label>
                        <Input
                            type="text"
                            name="contact"
                            value={input.contact}
                            onChange={changeHandler}
                            required
                        />
                        {errors.contact && (
                            <span className="text-red-500 text-sm font-medium">
                                * {errors.contact}
                            </span>
                        )}
                    </div>

                    <div className="">
                        <Label>Address</Label>
                        <Input
                            type="text"
                            name="address"
                            value={input.address}
                            onChange={changeHandler}
                            required
                        />
                        {errors.address && (
                            <span className="text-red-500 text-sm font-medium">
                                * {errors.address}
                            </span>
                        )}
                    </div>

                    <div className="">
                        <Label>City</Label>
                        <Input
                            type="text"
                            name="city"
                            value={input.city}
                            onChange={changeHandler}
                            required
                        />
                        {errors.city && (
                            <span className="text-red-500 text-sm font-medium">
                                * {errors.city}
                            </span>
                        )}
                    </div>

                    <DialogFooter className="col-span-2">
                        <Button className="bg-orange hover:bg-hoverOrange mt-2 w-full">
                            Confirm and Continue
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
