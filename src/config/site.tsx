import {Gauge, type LucideIcon, MessagesSquare, LineChart, Gamepad, Dice2, BookIcon, Lightbulb} from "lucide-react";

export type SiteConfig = typeof siteConfig;
export type Navigation = {
    icon: LucideIcon;
    name: string;
    href: string;
};

export const siteConfig = {
    title: "Blueppleverse",
    description: "My world, boardgames, gaming, books, music, my universe...",
};

export const navigations: Navigation[] = [
    {
        icon: Gauge,
        name: "Dashboard",
        href: "/",
    },
    {
        icon: Dice2,
        name: "Jeux de société",
        href: "/boardgames",
    },
    // {
    //     icon: Gamepad,
    //     name: "Jeux vidéos",
    //     href: "/videogames",
    // },
    // {
    //     icon: BookIcon,
    //     name: "Livres",
    //     href: "/books",
    // },
    {
        icon: Lightbulb,
        name: "Protos",
        href: "/prototypes",
    },
    {
        icon: MessagesSquare,
        name: "Contact",
        href: "/contact",
    },
    {
        icon: LineChart,
        name: "Stats",
        href: "/stats",
    },
];
