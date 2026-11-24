"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

interface Expense {
    _id: string,
    title: string,
    description: string,
    amount: number,
    category: string,
    expenseDate: string,
    paymentMethod: string
}

export default function Dashboard() {

    const [expenses, setExpenses] = useState<Expense[]>([])

    const getExpenses = async () => {
        try {
            const res = await axios.get('/api/expenses')
            setExpenses(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getExpenses()
    }, [])

    return (
        <div className="min-h-screen m-5 bg-violet-100">
            <div className="flex justify-center my-10">
                <h1 className="text-4xl text-violet-700 font-bold">EXPENSE TRACKER</h1>
            </div>
            <Link href={'/dashboard/add'} className="text-white bg-black p-2 rounded  justify-end ms-10">+ ADD EXPENSE</Link>

            <div className="bg-white rounded-lg shadow">
                <h2 className="text-xl font-bold p-5 mt-10">Expense Records</h2>
                <table className="w-full text-left">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4">Title</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="p-4">{item.title}</td>
                                <td className="p-4">₹{item.amount}</td>
                                <td className="p-4">{item.category}</td>
                                <td className="p-4">{item.expenseDate}</td>
                                <td className="p-4">{item.paymentMethod}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {expenses.length === 0 && (
                    <p className="text-center p-5 text-gray-500">No Expenses Added</p>
                )}


            </div>
        </div>
    )
}