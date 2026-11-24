import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-100">
      <h1 className="text-5xl text-center text-violet-800 font-bold ">PERSONAL EXPENSE TRACKER</h1>
      <Link href={'/dashboard'} className="bg-blue-500 text-white p-3 rounded font-2xl mt-10 hover:bg-blue-700">GET START</Link>
    </div>
  );
}
