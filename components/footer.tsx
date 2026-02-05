import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary border-t border-primary">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link href="#top" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary-foreground overflow-hidden">
              <Image
                src="/images/recloud-logo.png"
                alt="Recloud Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-primary-foreground">
              Recloud
            </span>
          </Link>

          {/* AnyDesk Downloads */}
          <nav className="flex items-center gap-3">
            <span className="text-xs text-primary-foreground">AnyDesk Download:</span>
            <a
              href="https://download.anydesk.com/AnyDesk.exe"
              className="flex items-center gap-1 text-xs text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Download className="h-3 w-3" />
              Windows
            </a>
            <a
              href="https://download.anydesk.com/anydesk.dmg"
              className="flex items-center gap-1 text-xs text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Download className="h-3 w-3" />
              macOS
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Recloud (Pty) Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
