import { CardDescription } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import {
  Shield,
  Cloud,
  Monitor,
  Headphones,
  Server,
  HardDrive,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT Management",
    description:
      "Entrust your IT infrastructure to Recloud and stay focused on driving your business forward. Our proactive monitoring, maintenance, and expert support ensure your network, systems, and software remain fully optimized and protected at all times.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    description:
      "Holistic management of your servers, networks and endpoints, engineered for uncompromising enterprise-grade reliability and performance, giving your business a stable, secure, and fully optimized technology foundation.",
  },
  {
    icon: HardDrive,
    title: "Backup Solutions",
    description:
      "Whether in the cloud or onsite, our backup solutions safeguard your data with unwavering reliability. Automated protection ensures your information remains secure, current and instantly recoverable when it matters most.",
  },
  {
    icon: Shield,
    title: "Network Security",
    description:
      "We provide essential security services including enterprise-grade Firewalls, site-to-site VPN connectivity, real-time Endpoint Detection & Response (EDR) and Advanced Email Protection. Together, these solutions safeguard your network, endpoints and communications against modern cyber threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Seamless migration, management and optimization of your cloud environment. We move legacy emails and company data into the cloud for secure, always-available access and effortless collaboration across Office apps ensuring your information is protected, synchronized and never lost.",
  },
  {
    icon: Headphones,
    title: "Help Desk Support",
    description:
      "We provide fast & reliable help desk support for any IT issue that comes up. We ensure your systems stay stable, your team stays productive and your business continues running smoothly.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-primary uppercase tracking-wider">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive IT services for modern businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From end-to-end infrastructure management to strategic cloud
            migration, we equip your business with the expertise required to
            elevate and future-proof your technology landscape.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
