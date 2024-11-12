import { useNavigate, useParams } from "react-router-dom";
import Filter from "./Filter";
import { Input } from "./ui/input";
import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "@/assets/hero_pizza.png";

export default function SearchPage() {
    const [searchText, setSearchText] = useState<string>("");
    const params = useParams();
    const navigate = useNavigate();
    console.log(params.slug);

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <Filter />
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        {/* Search input field */}
                        <Input
                            type="text"
                            value={searchText}
                            placeholder="search food or restaurant"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setSearchText(e.target.value)
                            }
                        />
                        <Button className="bg-orange hover:bg-hoverOrange">
                            Search
                        </Button>
                    </div>

                    {/* different restaurants items */}
                    <div>
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 mt-3 mb-10">
                            <h1 className="font-medium text-lg">
                                (2) results found
                            </h1>
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                                {["biryani", "pizza", "burger"].map(
                                    (selectedFilter: string, index: number) => (
                                        <div
                                            key={index}
                                            className="relative inline-flex items-center max-w-full"
                                        >
                                            <Badge className="text-[#f1b77c] rounded-md cursor-pointer pr-6 whitespace-nowrap">
                                                {selectedFilter}
                                            </Badge>
                                            <X
                                                className="absolute text-[#f1b77c] right-1 hover:cursor-pointer"
                                                size={16}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Restaurant cards */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <Card className="bg-white dark:bg-zinc-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="relative">
                                    <AspectRatio ratio={16 / 6}>
                                        <img
                                            src={HeroImage}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </AspectRatio>

                                    <div className="absolute top-2 left-2 bg-white dark:bg-zinc-700 bg-opacity-75 rounded-lg py-1 px-3">
                                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            Featured
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-4">
                                    <h1 className="text-xl font-medium text-zinc-800 dark:text-zinc-100">
                                        Restaurant name
                                    </h1>

                                    <div className="mt-2 gap-1 flex items-center text-zinc-600 dark:text-zinc-400">
                                        <MapPin size={16} />
                                        <p className="text-sm">
                                            City -{" "}
                                            <span className="font-medium">
                                                Delhi
                                            </span>
                                        </p>
                                    </div>

                                    {/* cuisine tag */}
                                    <div className="flex gap-2 mt-4 flex-wrap">
                                        {[
                                            "South indian",
                                            "Chinese",
                                            "North indian",
                                        ].map(
                                            (cuisine: string, idx: number) => (
                                                <Badge
                                                    key={idx}
                                                    className="font-medium px-2 py-1 rounded-full shadow-sm opacity-90"
                                                >
                                                    {cuisine}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </CardContent>

                                <CardFooter className="p-4 border-t dark:border-t-zinc-700 border-t-zinc-100 text-white flex justify-end">
                                    <Button
                                        className="bg-orange hover:bg-hoverOrange font-semibold py-2 px-4 rounded-full shadow-md transition-colors"
                                        onClick={() =>
                                            navigate(`/restaurant/${123}`)
                                        }
                                    >
                                        View Menu
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
