import { Request, Response } from "express";
import { User } from "../models/user.model";

export async function createCurrentUser(req: Request, res: Response) {
    //* 1. check if the user exists
    //* 2. create the user if it doesn't exists
    //* 3. return the user object to the calling client
    try {
        const { auth0Id } = req.body;

        const existingUser = await User.findOne({ auth0Id });

        if (existingUser) {
            res.status(400).json({
                success: false,
                message: "User already exists",
            });
            return;
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while creating user" });
    }
}
