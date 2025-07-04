import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";


export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("", {
                username,
                password
            });
            alert("Login autorizado" + res.data);
        } catch (err) {
            alert("Login nao autorizado");
            console.error(err);
        }
    };

    return (
        <div className="border-2 min-h-screen flex flex-row bg-[linear-gradient(to_right,white_50%,#0b2e66_50%)]">
            <div className="w-1/2 flex items-center justify-center">
                <Image
                    src="/img/imagem_catolica.png"
                    alt="Imagem da faculdade"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-1/2 flex items-center justify-end pr-20">

                <form onSubmit={handleLogin} className="flex flex-col  text-amber-400 gap-4 w-[300px]">
                    <h1 className="text-white text-2xl flex items-center justify-center">Login</h1>
                    <p className="text-white">Se você já possui uma conta, pode fazer login com seu username e senha.</p>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        className="rounded-full"
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
                        className="rounded-full"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div>
                        <Button type="submit" className="text-black bg-white px-27 rounded-full">
                            Acessar Conta
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
