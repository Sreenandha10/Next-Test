import { connectDB } from "@/lib/mongodb";
import expenses from "@/models/expenseModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB()
        const allExpenses=await expenses.find()
        return NextResponse.json({message:"All expenses", data:{allExpenses}},{status:200})
    }
    catch(err){
        return NextResponse.json({message:"Error", data:{}},{status:500})
    }
}

export async function POST(req:NextRequest){
    try{
        await connectDB()
        const {title,description, amount, category, expenseDate, paymentMethod} = await req.json()
        const newExpense = new expenses({title,description, amount, category, expenseDate, paymentMethod})
        await newExpense.save()
        return NextResponse.json({message:"Expense added successfully", data:{newExpense}},{status:201})
    }
    catch(err){
        return NextResponse.json({message:"Error", data:{}},{status:500})
    }
}