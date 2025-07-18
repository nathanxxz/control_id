"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/user/login", {
                username,
                password
            });
            alert("Login autorizado " + username);
            router.push("/home");
        } catch (err) {
            alert("Login nao autorizado");
            console.error(err);
        }
    };

    return (
        <div className=" min-h-screen flex flex-row bg-[linear-gradient(to_right,white_50%,#172554_50%)]">
            <div className="w-1/2 flex items-center justify-center">
                <Image
                    src="/img/imagem_catolica.png"
                    alt="Imagem da faculdade"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-1/2 flex items-center justify-center">

                <form onSubmit={handleLogin} className="flex flex-col  text-amber-400 gap-4 w-[300px]">
                    <h1 className="text-white font-bold text-2xl flex items-center justify-center">Login</h1>
                    <p className="text-white">Se você já possui uma conta, pode fazer login com seu username e senha.</p>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        className="rounded-full text-white"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Digite seu username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        className="rounded-full text-white"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div>
                        <div className="flex justify-center pt-4">
                            <Button
                                type="submit"
                                className="text-black bg-white hover:bg-amber-400 active:bg-blue-950 px-27 rounded-full cursor-pointer transition-all duration-300 ease-in-out"
                            >
                                Acessar Conta
                            </Button>
                        </div>

                        <p className="text-white text-center pt-5">
                            Não possui uma conta?{' '}
                            <a href="/cadastro" className="text-amber-400 hover:underline">
                                Registre-se
                            </a>
                        </p>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}
