"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "#top" },
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#top" className="flex items-center gap-2 -m-1.5 p-1.5">
            <div className="h-10 w-10 rounded-full bg-primary-foreground overflow-hidden">
              <Image
                src="/images/recloud-logo.png"
                alt="Recloud Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-primary-foreground">
              Recloud
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors outline-none">
              Downloads
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href="https://g123.me/2NV8XE" className="flex items-center gap-2 cursor-pointer">
                  <Download className="h-4 w-4" />
                  Remote Agent
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://download.anydesk.com/AnyDesk.exe" className="flex items-center gap-2 cursor-pointer">
                  <Download className="h-4 w-4" />
                  AnyDesk Windows
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://download.anydesk.com/anydesk.dmg" className="flex items-center gap-2 cursor-pointer">
                  <Download className="h-4 w-4" />
                  AnyDesk macOS
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="secondary" asChild>
            <a href="https://portal.gorelo.io/#/dashboard" target="_blank" rel="noopener noreferrer">
              Client Portal Login
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-b border-primary">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <p className="px-3 py-2 text-sm font-medium text-primary-foreground/50">Downloads</p>
              <a
                href="https://g123.me/2NV8XE"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                Remote Agent
              </a>
              <a
                href="https://download.anydesk.com/AnyDesk.exe"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                AnyDesk Windows
              </a>
              <a
                href="https://download.anydesk.com/anydesk.dmg"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                AnyDesk macOS
              </a>
            </div>
            <div className="pt-4">
              <Button variant="secondary" className="w-full" asChild>
                <a href="https://portal.gorelo.io/#/dashboard" target="_blank" rel="noopener noreferrer">
                  Client Portal Login
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
