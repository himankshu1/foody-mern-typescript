import { Link } from "react-router";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

export default function Header() {
    return (
        <header className="border-b-2 border-b-orange-500 py-6">
            <nav className="container mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-tight text-orange-500"
                >
                    MERNFoody.com
                </Link>

                {/* mobile nav */}
                <div className="md:hidden">
                    <MobileNav />
                </div>

                {/* main nav */}
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </nav>
        </header>
    );
}
