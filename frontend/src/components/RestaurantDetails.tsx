import { useParams } from "react-router-dom";
import Image from "@/assets/hero_pizza.png";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import RestaurantMenu from "./RestaurantMenu";

export default function RestaurantDetails() {
    // const params = useParams();

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="w-full">
                {/* restaurant image */}
                <div className="relative w-full h-32 md:h-64 lg:h-72">
                    <img
                        src={Image}
                        alt="restaurant-image"
                        className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                </div>

                {/* restaurant name and details */}
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="my-5">
                        <h1 className="font-medium text-xl">Restaurant name</h1>
                        <div className="flex gap-2 my-2">
                            {/* cuisines badges */}
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {[
                                    "South indian",
                                    "Chinese",
                                    "North indian",
                                ].map((cuisine: string, idx: number) => (
                                    <Badge
                                        key={idx}
                                        className="font-medium px-2 py-1 rounded-full shadow-sm opacity-90"
                                    >
                                        {cuisine}
                                    </Badge>
                                ))}
                            </div>

                            {/* delivery time */}
                            <div className="flex flex-col md:flex-row gap-2 my-5">
                                <div className="flex items-center gap-2">
                                    <Timer className="w-5 h-5" />
                                    <h1 className="flex items-center gap-2 text-base">
                                        Delivery Time{" "}
                                        <span className="font-semibold text-[#d48b42]">
                                            35 mins
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* restaurant menu */}
                <RestaurantMenu />
            </div>
        </div>
    );
}
