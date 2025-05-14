export default function Footer() {
    return (
        <div className="relative my-2 flex flex-col items-center justify-center gap-y-2 px-4 py-4">
            <div className="dot-matrix absolute left-0 top-0 -z-10 h-full w-full"/>
            <span className="text-xs text-muted-foreground">
                <span className="text-blue-500">Blue</span>ppleverse™
            </span>
            <div className="flex items-center space-x-2">
                <span className="text-md text-accent-foreground">© 2025 - 2025</span>
            </div>
        </div>
    );
}
