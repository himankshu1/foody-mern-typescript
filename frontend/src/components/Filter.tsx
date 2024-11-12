import { Button } from "./ui/button";
import { FilterOptionsState } from "@/lib/types";
import { Checkbox } from "./ui/checkbox";

export default function Filter() {
    const cuisineOptions: FilterOptionsState[] = [
        {
            id: "north-indian",
            label: "North Indian",
        },
        {
            id: "chinese",
            label: "Chinese",
        },
        {
            id: "south-indian",
            label: "South Indian",
        },
        {
            id: "kashmiri",
            label: "Kashmiri",
        },
        {
            id: "pizza",
            label: "Pizza",
        },
        {
            id: "burger",
            label: "Burger",
        },
        {
            id: "sweets",
            label: "Sweets",
        },
        {
            id: "drinks",
            label: "Drinks",
        },
        {
            id: "biryani",
            label: "Biryani",
        },
        {
            id: "salad",
            label: "Salad",
        },
    ];

    const appliedFilterHandler = (cuisineLabel: string) => {
        console.log(cuisineLabel);
    };

    return (
        <div className="md:w-72">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-lg">Filter by cuisines</h1>
                <Button variant={"link"}>Reset</Button>
            </div>

            {cuisineOptions.map((cuisine: FilterOptionsState) => (
                <div
                    key={cuisine.id}
                    className="flex items-center space-x-2 my-5"
                >
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id={cuisine.id}
                            onClick={() => appliedFilterHandler(cuisine.label)}
                        />
                        <label
                            htmlFor={cuisine.id}
                            className="text-sm font-medium leading-none cursor-pointer"
                        >
                            {cuisine.label}
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
}
