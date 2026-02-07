import Link from "next/link";
import Image from "next/image";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.092.032 1.543.076v3.287h-1.16c-1.407 0-1.844.666-1.844 1.903v2.292h3.716l-.638 3.667h-3.078v7.98C18.996 23.106 24 18.07 24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.628 3.874 10.35 9.101 11.691Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary border-t border-primary">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex-1">
            <Link href="#top" className="inline-flex items-center gap-2">
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
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61564525532180"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/recloudza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <XIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright & Privacy */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Recloud (Pty) Ltd
            </p>
            <Link
              href="/privacy-policy"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
