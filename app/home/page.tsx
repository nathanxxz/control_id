"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    const handleLogout = () => {
        
        router.push("/login"); 
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Bem-vindo à Home!</h1>
            <p className="mb-6">Você está logado com sucesso.</p>
            <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={handleLogout}>
                Sair
            </Button>
        </div>
    );
}
