import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, UserLoginSchema } from "@/schema/userSchema";
import { Key, Loader2, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: "",
    });

    const [fieldErrors, setFieldErrors] = useState<Partial<LoginInputState>>(
        {}
    );

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        //* zod validation
        const zodErrors = UserLoginSchema.safeParse(input);
        if (!zodErrors.success) {
            setFieldErrors(
                zodErrors.error.formErrors
                    .fieldErrors as Partial<LoginInputState>
            );
        }

        console.log(input.email);
        console.log(input.password);
    };

    let isLoading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4"
                onSubmit={loginSubmitHandler}
            >
                <div className="mb-4">
                    <h1 className="font-bold text-2xl text-orange">
                        Login to Foody
                    </h1>
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
                    {fieldErrors.email && (
                        <span className="text-red-500 text-sm font-medium">
                            {fieldErrors.email}
                        </span>
                    )}
                </div>

                <div className="relative mb-5">
                    <Key className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        value={input.password}
                        onChange={changeEventHandler}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="px-10 py-5"
                    />
                    {fieldErrors.password && (
                        <span className="text-red-500 text-sm font-medium">
                            {fieldErrors.password}
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
                        "Login"
                    )}
                </Button>

                <Separator className="mb-4" />

                <Link
                    to="forgot-password"
                    className="mb-4 text-blue-500 text-sm font-bold"
                >
                    Forgot password?
                </Link>

                <p className="text-zinc-600 text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="underline">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    );
}
