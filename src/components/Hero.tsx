import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.3),transparent)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            NovaWeb Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto">
            Modern websites built for performance, scalability, and impact. We transform your digital vision into reality.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5">
              Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
