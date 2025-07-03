import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Login() {
    return (
        <div className="min-h-screen flex flex-row bg-[linear-gradient(to_right,white_50%,#0b2e66_50%)]">
            <div className="w-1/2 flex items-center justify-center">
                <Image
                    src="/img/imagem_catolica.png"
                    alt="Imagem da faculdade"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-1/2 flex items-center justify-end pr-20">

                <form className="flex flex-col text-amber-400 gap-4 w-[300px]">
                    <h1 className="text-white flex items-center justify-center ">Login</h1>
                    <p className="text-white">Se você já possui uma conta, pode fazer login com seu username e senha.</p>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Digite seu username"
                        required
                    />
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        required
                    />
                    <div>
                        <Button type="submit" className="text-black bg-white">
                            Acessar Conta
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
