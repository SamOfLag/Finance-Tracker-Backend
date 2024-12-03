import mongoose, {Document} from "mongoose";
import { Request } from "express";

export interface IUser extends Document {
    username: string,
    email: string,
    password: string
}

export interface IAuthRequest extends Request {
    userId?: string
}

export interface IFinance extends Document {
    date: Date,
    amount: number,
    category: string,
    description?: string,
    userId: mongoose.Schema.Types.ObjectId
}

export interface IBudget extends Document {
    userId: mongoose.Schema.Types.ObjectId,
    category: string,
    amount: number,
    startDate: Date,
    endDate: Date,
    createdAt?: Date
}

export interface IAchievement extends Document {
    userId: mongoose.Schema.Types.ObjectId,
    type: String,
    description: String,
    dateAwarded: Date,
    criteriaMet: Boolean
}