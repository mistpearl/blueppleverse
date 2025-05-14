import {TopNav} from "@/components/nav";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopNav title="Prototypes"/>
            <main>{children}</main>
        </>
    );
}
