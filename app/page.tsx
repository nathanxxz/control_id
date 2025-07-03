import Link from "next/link";
export default function Home() {
    return (
      <div className="">
        <div className="flex items-center justify-center">
          <Link className="text-blue-800" href={"/login"}>Login</Link>
        </div>
      </div>
      
    );
  }
