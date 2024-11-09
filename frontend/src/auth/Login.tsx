import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Key, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    let isLoading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl text-orange">
                        Login to Foody
                    </h1>
                </div>

                <div className="relative mb-2">
                    <Mail className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="px-10 py-5"
                    />
                </div>

                <div className="relative mb-5">
                    <Key className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        className="px-10 py-5"
                    />
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
