"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import Image from "next/image";
import * as React from "react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useHydration} from "@/hooks/use-hydration";

export default function User() {
    const {setTheme, theme} = useTheme();
    const hydrated = useHydration();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="relative">
                    <Image
                        src="/avatar.png"
                        alt="User"
                        className="mr-2 rounded-full"
                        width={30}
                        height={30}
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Blue</span>
                        <span className="text-xs text-muted-foreground">Founder</span>
                    </div>
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    {hydrated && theme === "system" && <AutoThemeBadge/>}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => alert('a malibu')}>
                    Alerte!
                </DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        Changer le thème
                    </DropdownMenuSubTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function AutoThemeBadge() {
    return (
        <span
            className="absolute -right-2 -top-2 flex h-4 items-center rounded-full bg-secondary px-1.5 text-[0.6rem] text-secondary-foreground ring-2 ring-background duration-300 animate-in zoom-in-50">
      auto
    </span>
    );
}
