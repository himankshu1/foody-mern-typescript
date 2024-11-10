import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState<string>("");

    let isLoading: boolean = false;

    const resetPasswordSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        //* zod validation
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <form
                onSubmit={resetPasswordSubmitHandler}
                className="flex flex-col md:border md:p-8 w-full max-w-md rounded-lg mx-4"
            >
                <div className="mb-5">
                    <h1 className="text-orange font-bold text-2xl mb-1">
                        Change password request
                    </h1>
                    <p className="text-zinc-600 text-sm">
                        A link will be sent to your registered email address
                    </p>
                </div>

                <div className="relative mb-2">
                    <Mail className="text-zinc-500 absolute inset-y-2 left-2" />
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="Enter your registered email"
                        className="px-10 py-5"
                    />
                    {/* {fieldErrors.email && (
                        <span className="text-red-500 text-sm font-medium">
                            {fieldErrors.email}
                        </span>
                    )} */}
                </div>

                <Button className="w-full mb-5" disabled={isLoading}>
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Please wait</span>
                        </div>
                    ) : (
                        "Send reset link"
                    )}
                </Button>

                <Separator className="mb-4" />

                <p className="text-zinc-600 text-sm">
                    Remember your password?{" "}
                    <Link to="/login" className="underline">
                        back to login
                    </Link>
                </p>
            </form>
        </div>
    );
}
