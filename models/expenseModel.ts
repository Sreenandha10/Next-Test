import mongoose from "mongoose"

const expenseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    expenseDate:{
        type:Date,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    }
})

const expenses=mongoose.models.expenses|| mongoose.model("expenses",expenseSchema)

export default expenses