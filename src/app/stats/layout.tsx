import Container from "@/components/container";
import {TopNav} from "@/components/nav";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopNav title="Stats"/>
            <main>
                <Container>{children}</Container>
            </main>
        </>
    );
}
