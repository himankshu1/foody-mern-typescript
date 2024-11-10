import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

export default function VerifyEmail() {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRef = useRef<any>([]);

    const isLoading = false;

    const otpChangeHandler = (value: string, index: number) => {
        if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
        //* move to the next input field if the current input is filled
        if (value !== "" && index < 5) {
            inputRef.current[index + 1].focus();
        }
    };

    //* clear the current input value and move to the previous input
    const handleBackspace = (keyValue: string, index: number) => {
        console.log(keyValue);
        if (keyValue === "Backspace" && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus();
        }
    };

    //* OTP verification
    const handleOtpVerification = (e: FormEvent) => {
        e.preventDefault();
        console.log(otp);
    };

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-zinc-200">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Verify your email</h1>
                    <p className="text-sm font-medium text-zinc-600">
                        Enter the 6 digit code sent to your email address
                    </p>
                </div>

                <form className="mx-auto" onSubmit={handleOtpVerification}>
                    <div className="flex gap-2 w-full">
                        {otp.map((letter, idx) => (
                            <Input
                                maxLength={1}
                                value={letter}
                                ref={(element) =>
                                    (inputRef.current[idx] = element)
                                }
                                onChange={(e) =>
                                    otpChangeHandler(e.target.value, idx)
                                }
                                onKeyDown={(e) => handleBackspace(e.key, idx)}
                                type="text"
                                key={idx}
                                className="md:h-12 md:w-12 h-8 w-8 text-center font-bold mb-4 text-lg"
                            />
                        ))}
                    </div>

                    <Button className="w-full mb-5" disabled={isLoading}>
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-6 h-6 animate-spin" />
                                <span>Please wait</span>
                            </div>
                        ) : (
                            "Verify"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}
