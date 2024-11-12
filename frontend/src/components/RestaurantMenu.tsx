import { IndianRupee } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "@/assets/hero_pizza.png";
import { Button } from "./ui/button";

export default function RestaurantMenu() {
    return (
        <div className="md:p-4">
            <h1 className="text-lg md:text-xl font-bold mb-6">Your Menu</h1>

            <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
                <Card className="max-w-xs shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={Image}
                        alt=""
                        className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-4">
                        <h2 className="text-base md:text-lg font-semibold text-zinc-800 dark:text-slate-50">
                            Menu name
                        </h2>
                        <p className="text-sm text-zinc-600 mt-1 mb-2 md:text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Facilis, assumenda.
                        </p>
                        <h3 className="flex items-center gap-2">
                            Price{" "}
                            <span className="flex items-center font-semibold">
                                <IndianRupee className="h-4 w-4" />
                                80
                            </span>
                        </h3>
                    </CardContent>

                    <CardFooter className="p-4">
                        <Button className="bg-orange hover:bg-hoverOrange w-full">
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
