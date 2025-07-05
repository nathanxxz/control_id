import Link from "next/link";
export default function Home() {
    return (
      <div className="">
        <div className="p-85 text-5xl">
          <Link className="text-blue-800 ext-center flex items-center justify-center" href={"/login"}>Clique aqui, para ver a pagina de login</Link>
        </div>
      </div>
      
    );
  }
