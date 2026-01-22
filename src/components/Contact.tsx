import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-4 rounded-full px-4 py-1 border border-primary/20 bg-primary/5 text-primary backdrop-blur-md transition-all hover:bg-primary/10">
            Contact Us
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
            Get in Touch
          </h2>
        </div>
        <p className="mt-4 text-muted-foreground text-lg sm:text-xl text-center max-w-2xl mx-auto">
          Ready to start your project? Contact us today for a free consultation.
        </p>
        <div className="mt-10 sm:mt-16 max-w-xl mx-auto">
          <div className="flex flex-col border rounded-xl py-8 px-6 bg-card/50 hover:bg-card transition-colors duration-300">
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-lg font-semibold">Name</Label>
                <Input id="name" placeholder="John Doe" className="h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-lg font-semibold">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-lg font-semibold">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-32" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full text-base mt-2">
                Send Message <ArrowUpRight className="size-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
