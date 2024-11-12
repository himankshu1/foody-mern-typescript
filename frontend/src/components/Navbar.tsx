import { Link } from "react-router-dom";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "./ui/menubar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Loader2, Moon, ShoppingCart, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const isLoading = false;
    const admin = true;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to="/">
                    <h1 className="font-bold md:font-extrabold text-2xl">
                        Foody
                    </h1>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/orders">Orders</Link>
                    </div>
                    {admin && (
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Dashboard</MenubarTrigger>
                                <MenubarContent>
                                    <Link to="/admin/restaurants">
                                        <MenubarItem>Restaurants</MenubarItem>
                                    </Link>
                                    <Link to="/admin/menu">
                                        <MenubarItem>Menu</MenubarItem>
                                    </Link>
                                    <Link to="/admin/orders">
                                        <MenubarItem>Orders</MenubarItem>
                                    </Link>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    )}
                    <div className="flex items-center gap-4">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">
                                            Toggle theme
                                        </span>
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
                        </div>

                        <Link to="/cart" className="relative cursor-pointer">
                            <ShoppingCart />
                            <Button
                                size={"icon"}
                                className="absolute -inset-y-3 left-2 text-xs font-bold rounded-full h-6 w-6 bg-red-600"
                            >
                                5
                            </Button>
                        </Link>

                        <div>
                            <Avatar>
                                <AvatarImage />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <div>
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
                                    "Logout"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
                {/* mobile responsive */}
                <div className="md:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </div>
    );
}
