export default function Edit(){
    return(
        <div className="min-h-screen bg-gray-100">
            <div className="mx-auto p-8">
                <h1 className="text-2xl font-bold text-center">Update Expense</h1>
            </div>

            <form className="m-6 space-y-3" >
                <div>
                    <input type="text" placeholder="Title" required className="w-full border p-3 rounded"/>
                </div>
                <div>
                    <input type="text" placeholder="Description" required className="w-full border p-3 rounded"/>
                </div>
                <div>
                    <input type="text" placeholder="Amount" required className="w-full border p-3 rounded"/>
                </div>
                <div>
                    <input type="text" placeholder="Category" required className="w-full border p-3 rounded"/>
                </div>
                <div>
                    <input type="date" placeholder="Expense Date" required className="w-full border p-3 rounded"/>
                </div>
                <div>
                    <input type="text" placeholder="Payment method" required className="w-full border p-3 rounded"/>
                </div>
                <button className="text-white bg-blue-600 p-2 w-full">Update</button>
            </form>

           
        </div>
    )
}