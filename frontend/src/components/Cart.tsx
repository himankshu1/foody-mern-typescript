import { Button } from "./ui/button";

export default function Cart() {
    return (
        <div className="flex flex-col max-w-7xl my-10">
            <div className="flex justify-end">
                <Button variant="link">Clear All</Button>
            </div>
        </div>
    );
}
