import {Gauge, type LucideIcon, MessagesSquare, SquareChartGantt} from "lucide-react";

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
        icon: MessagesSquare,
        name: "Ticket",
        href: "/ticket",
    },
    {
        icon: SquareChartGantt,
        name: "Stats",
        href: "/stats",
    },
];
