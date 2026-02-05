import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-primary px-6 py-20 sm:px-12 sm:py-24 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(227,226,221,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(227,226,221,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Decorative background icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Phone icon - top left */}
            <Phone className="absolute top-8 left-8 h-24 w-24 text-primary-foreground/[0.04] rotate-12" />
            {/* Mail icon - top right */}
            <Mail className="absolute top-12 right-12 h-32 w-32 text-primary-foreground/[0.04] -rotate-12" />
            {/* MapPin icon - bottom left */}
            <MapPin className="absolute bottom-16 left-16 h-28 w-28 text-primary-foreground/[0.04] -rotate-6" />
            {/* Phone icon - bottom right */}
            <Phone className="absolute bottom-8 right-8 h-20 w-20 text-primary-foreground/[0.04] rotate-45" />
            {/* Mail icon - center left */}
            <Mail className="absolute top-1/2 left-4 h-16 w-16 text-primary-foreground/[0.03] rotate-6" />
            {/* MapPin icon - center right */}
            <MapPin className="absolute top-1/3 right-6 h-18 w-18 text-primary-foreground/[0.03] rotate-12" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
              Ready to transform your IT infrastructure? Contact us today and
              let Recloud help your business thrive.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* General Enquiries */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-foreground">
                    General Enquiries
                  </h3>
                  <a
                    href="mailto:info@recloud.co.za"
                    className="mt-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    info@recloud.co.za
                  </a>
                </div>
              </div>

              {/* Support Email */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-foreground">
                    For Support
                  </h3>
                  <a
                    href="mailto:support@recloud.co.za"
                    className="mt-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    support@recloud.co.za
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-foreground">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/27645135788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    064 513 5788
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-foreground">
                    Address
                  </h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2+Sonop+Street,+Arauna,+Cape+Town,+7560"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    2 Sonop Street, Arauna
                    <br />
                    Cape Town, 7560
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-10 pt-8 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/70">
                <span className="font-semibold text-primary-foreground">Business Hours:</span>{" "}
                Monday – Friday: 08:00 to 17:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
