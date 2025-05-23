import {TopNav} from "@/components/nav";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopNav title="Dashboard - vos jeux - vos notes"/>
            <main>{children}</main>
        </>
    );
}
