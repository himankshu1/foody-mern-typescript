import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

export default function MobileNav() {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>

            <SheetContent className="bg-white space-y-3">
                <SheetTitle>
                    <span>Welcome to MERNFoody.com!</span>
                </SheetTitle>

                <Separator />

                <SheetDescription className="flex">
                    <span className="flex space-x-2 items-center">
                        {isAuthenticated ? (
                            <UsernameMenu />
                        ) : (
                            <Button
                                variant="ghost"
                                className="font-bold hover:text-orange-500 hover:bg-white"
                                onClick={async () => await loginWithRedirect()}
                            >
                                Log in
                            </Button>
                        )}
                    </span>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}
