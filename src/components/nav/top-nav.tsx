"use client";

import Container from "../container";
import User from "@/components/nav/side-nav/components/user";

export default function TopNav({title}: { title: string }) {
    return (
        <Container className="flex h-16 items-center justify-between border-b border-border">
            <h1 className="text-2xl font-medium">{title}</h1>
            <User/>
        </Container>
    );
}
