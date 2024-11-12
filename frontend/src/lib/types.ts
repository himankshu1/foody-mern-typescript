import { Dispatch, SetStateAction } from "react";

export type FilterOptionsState = {
    id: string;
    label: string;
};

export type OpenPopupProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
