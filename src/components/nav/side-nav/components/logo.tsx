import Link from "next/link";
import { VisActorLogo } from "@/components/icons";

export default function Logo() {
  return (
    <Link
      href="https://visactor.io"
      target="_blank"
      className="relative my-2 flex flex-col items-center justify-center gap-y-2 px-4 py-4"
    >
      <div className="dot-matrix absolute left-0 top-0 -z-10 h-full w-full" />
      <span className="text-xs text-muted-foreground">Here is...</span>
      <div className="flex items-center space-x-2">
        <VisActorLogo size={24} />
        <span className="text-md text-accent-foreground">Blueppleverse</span>
      </div>
    </Link>
  );
}
