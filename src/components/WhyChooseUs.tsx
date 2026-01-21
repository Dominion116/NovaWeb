import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "High Performance",
    description: "We build sites that load instantly and perform flawlessly under pressure.",
  },
  {
    title: "Modern Technology",
    description: "Built with the latest frameworks and standards for future-proof results.",
  },
  {
    title: "Dedicated Support",
    description: "Our team is always available to help you with updates and improvements.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why NovaWeb?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to succeed online
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We don't just build websites; we build digital experiences that drive growth and engagement.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {reasons.map((reason) => (
              <div key={reason.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-primary/20 shadow-sm shadow-primary/10 transition-transform duration-300 hover:scale-110">
                    <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  {reason.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {reason.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
