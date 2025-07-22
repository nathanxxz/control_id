'use client'
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";




export default function Cadastro() {
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleCadastro = async (e: React.FormEvent) => {
        e.preventDefault();
    }
        return (
            <div className="min-h-screen flex items-center justify-center bg-blue-950">
                <div className="">
                    <h1 className=" text-center mb-6 font-bold text-white text-2xl">
                        Realizar Cadastro
                    </h1>
                    <form onSubmit={handleCadastro} className=" text-amber-400 space-y-4">
                        <Label htmlFor="nome">Nome completo</Label>
                        <Input className="rounded-full text-white" type="text" name="nome" id="nome" placeholder="Digite seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required></Input>
                        <Label htmlFor="username">Username</Label>
                        <Input className="rounded-full text-white" type="text" name="username" id="username" placeholder="Digite seu username" value={username} onChange={(e) => setUsername(e.target.value)} required></Input>
                        <Label htmlFor="email">Email</Label>
                        <Input className="rounded-full text-white" type="email" name="email" id="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
                        <Select>
                            <Label>Cargo</Label>
                            <SelectTrigger className="w-full rounded-full text-white">
                                <SelectValue placeholder="Escolha seu cargo"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="suporte">Suporte</SelectItem>
                                <SelectItem value="coordenador">Coordenador</SelectItem>
                                <SelectItem value="administrador">Administrador</SelectItem>
                            </SelectContent>
                        </Select>
                        <Label htmlFor="password">Senha</Label>
                        <Input className="rounded-full text-white" type="password" name="password" id="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required></Input>
                        <Label htmlFor="password2">Confirmar Senha</Label>
                        <Input className="rounded-full text-white" type="password" name="password2" id="password2" placeholder="Confirme sua senha" value={password2} onChange={(e) => setPassword2(e.target.value)} required></Input>

                    </form>
                    <div className="flex justify-center pt-8">
                        <Button type="submit" className="text-black bg-white  hover:bg-amber-400 active:bg-blue-950 px-27 rounded-full cursor-pointer transition-all duration-300 ease-in-out">Cadastrar</Button>
                    </div>
                    <p className="text-white text-center pt-5">
                        Possui uma conta?{' '}
                        <a href="/login" className="text-amber-400 hover:underline">
                            Entre
                        </a>
                    </p>

                </div>

            </div>
       );
    }
