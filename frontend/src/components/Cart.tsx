import { Banknote, Minus, Plus, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutPopup from "./CheckoutPopup";

export default function Cart() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col max-w-7xl my-10">
            <div className="flex justify-end">
                <Button variant="link">Clear All</Button>
            </div>

            <Table>
                {/* cart page labels */}
                <TableHeader>
                    <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead className="text-right">Remove</TableHead>
                    </TableRow>
                </TableHeader>

                {/* cart page added items */}
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Avatar>
                                <AvatarImage src="" alt="" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </TableCell>

                        <TableCell>Item name</TableCell>
                        <TableCell>Item Price</TableCell>
                        {/* item quantity */}
                        <TableCell>
                            <div className="w-fit flex gap-2 items-center rounded-full border-zinc-100 dark:border-zinc-800 shadow-md">
                                <Button
                                    className="rounded-full bg-zinc-200"
                                    size="icon"
                                    variant="outline"
                                >
                                    <Minus className="font-extrabold" />
                                </Button>

                                <span>5</span>

                                <Button
                                    className="rounded-full bg-orange hover:bg-hoverOrange"
                                    size="icon"
                                    variant="outline"
                                >
                                    <Plus className="font-extrabold" />
                                </Button>
                            </div>
                        </TableCell>

                        <TableCell className="flex items-center gap-2">
                            <Banknote />
                            Item total
                        </TableCell>

                        <TableCell className="text-right">
                            <Button
                                size="sm"
                                className="bg-red-500 hover:bg-red-600"
                            >
                                <Trash2 className="" />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5} className="">
                            Total
                        </TableCell>
                        <TableCell className="text-right">
                            Total price
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <div className="flex justify-end my-5">
                <Button
                    className="bg-orange hover:bg-hoverOrange"
                    onClick={() => setOpen(true)}
                >
                    Proceed to Checkout
                </Button>
            </div>

            <CheckoutPopup open={open} setOpen={setOpen} />
        </div>
    );
}
