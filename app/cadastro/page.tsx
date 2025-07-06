import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

export default function Cadastro() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-950">
            <div className="">
                <h1 className=" text-center mb-6 font-bold text-white text-2xl">
                    Realizar Cadastro
                </h1>
                <form className=" text-amber-400 space-y-4">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input className="rounded-full" type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required></Input>
                    <Label htmlFor="username">Username</Label>
                    <Input className="rounded-full" type="text" name="username" id="username" placeholder="Digite seu username" required></Input>
                    <Label htmlFor="email">Email</Label>
                    <Input className="rounded-full" type="email" name="email" id="email" placeholder="Digite seu email" required></Input>
                    <Select>
                        <Label>Cargo</Label>
                        <SelectTrigger className="w-full rounded-full">
                            <SelectValue placeholder="Escolha seu cargo"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="suporte">Suporte</SelectItem>
                            <SelectItem value="cordenador">Cordenador</SelectItem>
                            <SelectItem value="administrador">Administrador</SelectItem>
                        </SelectContent>
                    </Select>
                    <Label htmlFor="password">Senha</Label>
                    <Input className="rounded-full" type="password" name="password" id="password" placeholder="Digite sua senha" required></Input>
                    <Label htmlFor="password2">Confirmar Senha</Label>
                    <Input className="rounded-full" type="password" name="password2" id="password2" placeholder="Confirme sua senha" required></Input>

                </form>
                <div className="flex justify-center pt-4">
                    <Button type="submit" className="text-black bg-white  hover:bg-blue-300 active:bg-blue-400 px-27 rounded-full cursor-pointer transition-all duration-300 ease-in-out">Cadastrar</Button>
                </div>

            </div>

        </div>
    );
}