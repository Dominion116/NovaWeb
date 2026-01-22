import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/development.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-white/20 bg-white/10 text-white backdrop-blur-md whitespace-nowrap"
        >
          <a href="#services" className="flex items-center">
            Explore Our Services <ArrowUpRight className="ml-1 size-4" />
          </a>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter text-white">
          Modern Websites Built for Performance & Impact
        </h1>
        <p className="mt-6 md:text-lg text-white/80">
          We craft stunning, high-performance websites that elevate your brand
          and drive results. From development to maintenance, NovaWeb is your
          partner for digital success.
        </p>
        <div className="mt-12 flex items-center justify-center">
          <Button size="lg" className="rounded-full text-base bg-white text-black hover:bg-white/90">
            Get a Quote <ArrowUpRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
