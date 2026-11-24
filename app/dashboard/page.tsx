import Link from "next/link"


export default function Dashboard() {
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
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}