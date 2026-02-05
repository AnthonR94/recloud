import { Scale, Landmark, Truck, Building2, Factory } from "lucide-react";

const industries = [
  {
    name: "Financial",
    icon: Landmark,
  },
  {
    name: "Legal",
    icon: Scale,
  },
  {
    name: "Logistics",
    icon: Truck,
  },
  {
    name: "Manufacturing",
    icon: Factory,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold text-primary uppercase tracking-wider">
            Industries We Serve
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Specialized IT solutions for your industry
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            We provide comprehensive, end-to-end IT solutions designed to
            support businesses of all sizes. With deep expertise in specialized
            software, we deliver secure, efficient, and fully customized IT
            services that keep your operations running smoothly and your
            business protected.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative rounded-2xl border border-border bg-background px-6 py-5 transition-all hover:border-primary/30 hover:shadow-lg flex items-center gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <industry.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="flex items-center gap-3 rounded-full border border-border bg-background px-6 py-3">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Not limited to these sectors, we support businesses of all types
            </span>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}
