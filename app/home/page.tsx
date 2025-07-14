"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenu,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarProvider
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";

const items = [
    { title: "Home", url: "#", icon: Home },
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
        <div className="bg-white">
            <div className="flex m-37 justify-center items-center mr-8">
                <Image src={"/img/imagem_catolica.png"}  alt="Imagem da faculdade"
                    width={400}
                    height={400}></Image>
            </div>
            <SidebarProvider>
                <Sidebar >
                    <SidebarContent className="bg-blue-950">
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-white">Opções</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu className="text-white">
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
                    </SidebarContent>
                </Sidebar>

            </SidebarProvider>

        </div>
    );
}
