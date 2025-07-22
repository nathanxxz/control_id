"use client";

import {Sidebar,SidebarContent,SidebarMenuItem,SidebarMenuButton,SidebarMenu,SidebarGroup,SidebarGroupContent, SidebarGroupLabel,SidebarProvider
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const items = [
    { title: "Home", url: "/home", icon: Home },
    { title: "Teste", url: "#", icon: Inbox },
    { title: "Teste", url: "#", icon: Calendar },
    { title: "Teste", url: "#", icon: Search },
    { title: "Settings", url: "#", icon: Settings },
];

export default function HomePage() {
    const router = useRouter();

    const handleLogout = () => {
        router.push("/login");
    };

    return (
        <div className="bg-white h-screen overflow-hidden">
            <div className="flex my-64 justify-center items-center ml-52">
                <Image src={"/img/imagem_catolica.png"}  alt="Imagem da faculdade"
                    width={400}
                    height={400}></Image>
            </div>
            <SidebarProvider>
                <Sidebar >
                    <SidebarContent className="bg-blue-950">
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-white text-2xl flex justify-center font-bold">Opções</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu className="text-white mt-10">
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url} className="flex items-center gap-2">
                                                    <item.icon className="w-4 h-4" />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <Button onClick={handleLogout} className="bg-white font-bold text-black w-48 m-6 mt-80 hover:bg-amber-400  active:bg-blue-950 rounded-full cursor-pointer transition-all duration-300 ease-in-out" type="submit">Sair</Button>
                    </SidebarContent>
                </Sidebar>

            </SidebarProvider>

        </div>
    );
}
