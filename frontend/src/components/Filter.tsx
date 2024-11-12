import { Button } from "./ui/button";

export default function Filter() {
    const filterOptions = [""];
    return (
        <div className="md:w-72">
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-lg">Filter by cuisines</h1>
                <Button variant={"link"}>Reset</Button>
            </div>
        </div>
    );
}
