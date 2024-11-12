import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Menu,
    Moon,
    Sun,
    User,
    UtensilsCrossed,
    HandPlatter,
    ShoppingCart,
    SquareMenu,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function MobileNavbar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    size={"icon"}
                    variant="outline"
                    className="rounded-full bg-zinc-200"
                >
                    <Menu size={18} />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-2">
                    <SheetTitle>Foody</SheetTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                            // onClick={() => setTheme("light")}
                            >
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem
                            // onClick={() => setTheme("dark")}
                            >
                                Dark
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetHeader>

                <SheetDescription className="flex-1 flex flex-col gap-3">
                    <Link
                        to="/profile"
                        className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer bg-zinc-100 font-medium"
                    >
                        <User />
                        <span>Profile</span>
                    </Link>

                    <Link
                        to="/orders"
                        className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer bg-zinc-100 font-medium"
                    >
                        <HandPlatter />
                        <span>Orders</span>
                    </Link>

                    <Link
                        to="/cart"
                        className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer bg-zinc-100 font-medium"
                    >
                        <ShoppingCart />
                        <span>Cart</span>
                    </Link>

                    <Link
                        to="/menu"
                        className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer bg-zinc-100 font-medium"
                    >
                        <SquareMenu />
                        <span>Menu</span>
                    </Link>

                    <Link
                        to="/restaurants"
                        className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer bg-zinc-100 font-medium"
                    >
                        <UtensilsCrossed />
                        <span>Restaurants</span>
                    </Link>
                </SheetDescription>

                <SheetFooter className="sm:flex-col flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <Avatar>
                            <AvatarImage />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-zinc-600">
                            Himanshu Kumar
                        </p>
                    </div>

                    <SheetClose asChild>
                        <Button type="submit" className="w-full bg-orange">
                            Logout
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
