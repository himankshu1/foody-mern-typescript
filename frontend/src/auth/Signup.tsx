import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, UserSignupSchema } from "@/schema/userSchema";
import { Key, Loader2, Mail, Phone, UserRound } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [input, setInput] = useState<SignupInputState>({
        fullname: "",
        email: "",
        password: "",
        contact: "",
    });
    const [errors, setErrors] = useState<Partial<SignupInputState>>({});

    console.log(errors);

    //* keep updating the input object with onChange event
    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // const { name, value } = e.target;
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    //* Signup form submission
    const signupSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        //* form validation with zod
        const result = UserSignupSchema.safeParse(input);
        // console.log(result);

        if (!result.success) {
            const zodErrors = result.error.formErrors.fieldErrors;
            console.log(zodErrors);
            setErrors(zodErrors as Partial<SignupInputState>);
            return;
        }

        //* api implementation for signup
    };

    let isLoading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4"
                onSubmit={signupSubmitHandler}
            >
                <div className="mb-4">
                    <h1 className="font-bold text-2xl text-orange">
                        Create an account
                    </h1>
                </div>

                <div className="relative mb-2">
                    <UserRound className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        value={input.fullname}
                        onChange={changeEventHandler}
                        name="fullname"
                        type="text"
                        placeholder="Enter your full name"
                        className="px-10 py-5"
                    />
                    {errors.fullname && (
                        <span className="text-red-500 text-sm font-medium">
                            * {errors.fullname}
                        </span>
                    )}
                </div>

                <div className="relative mb-2">
                    <Mail className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        value={input.email}
                        onChange={changeEventHandler}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="px-10 py-5"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm font-medium">
                            * {errors.email}
                        </span>
                    )}
                </div>

                <div className="relative mb-2">
                    <Key className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        value={input.password}
                        onChange={changeEventHandler}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="px-10 py-5"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm font-medium">
                            * {errors.password}
                        </span>
                    )}
                </div>

                <div className="relative mb-5">
                    <Phone className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        value={input.contact}
                        onChange={changeEventHandler}
                        name="contact"
                        type="text"
                        placeholder="Enter your contact number"
                        className="px-10 py-5"
                    />
                    {errors.contact && (
                        <span className="text-red-500 text-sm font-medium">
                            * {errors.contact}
                        </span>
                    )}
                </div>

                <Button
                    className="w-full bg-orange hover:bg-hoverOrange mb-5"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Please wait</span>
                        </div>
                    ) : (
                        "Sign up"
                    )}
                </Button>

                <Separator className="mb-4" />

                <p className="text-zinc-600 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}
