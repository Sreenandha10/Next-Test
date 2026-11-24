"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


export default function Add() {

    const [expense, setExpense] = useState({ title: "", description: "", amount: "", category: "", expenseDate: "", paymentMethod: "" })

    const router=useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await axios.post('/api/expenses', expense)
            toast.success("Expense added successfully")
            router.push("/dashboard")
        }
        catch (err) {
toast.error("Error adding expense")
        }

    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="mx-auto p-8">
                <h1 className="text-2xl font-bold text-center">Add New Expense</h1>
            </div>

            <form className="m-6 space-y-3" >
                <div>
                    <input value={expense.title} onChange={(e) => setExpense({ ...expense, title: e.target.value })} type="text" placeholder="Title" required className="w-full border p-3 rounded" />
                </div>
                <div>
                    <input value={expense.description} onChange={(e) => setExpense({ ...expense, description: e.target.value })} type="text" placeholder="Description" required className="w-full border p-3 rounded" />
                </div>
                <div>
                    <input value={expense.amount} onChange={(e) => setExpense({ ...expense, amount: e.target.value })} type="text" placeholder="Amount" required className="w-full border p-3 rounded" />
                </div>
                <div>
                    <input value={expense.category} onChange={(e) => setExpense({ ...expense, category: e.target.value })} type="text" placeholder="Category" required className="w-full border p-3 rounded" />
                </div>
                <div>
                    <input value={expense.expenseDate} onChange={(e) => setExpense({ ...expense, expenseDate: e.target.value })} type="date" placeholder="Expense Date" required className="w-full border p-3 rounded" />
                </div>
                <div>
                    <input value={expense.paymentMethod} onChange={(e) => setExpense({ ...expense, paymentMethod: e.target.value })} type="text" placeholder="Payment method" required className="w-full border p-3 rounded" />
                </div>
                <button onSubmit={handleSubmit} className="text-white bg-blue-600 p-2 w-full">Add Expense</button>
            </form>


        </div>
    )
}