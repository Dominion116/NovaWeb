import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookCheck,
  FolderSync,
  Goal,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: Goal,
    title: "Website Development",
    description: "Custom built websites using the latest technologies like React, Next.js, and Tailwind CSS.",
    image: "/images/development.jpg",
  },
  {
    icon: BookCheck,
    title: "Website Redesign",
    description: "Transform your outdated site into a modern, high-converting digital experience.",
    image: "/images/redesign.jpg",
  },
  {
    icon: FolderSync,
    title: "Maintenance & Hosting",
    description: "Reliable hosting solutions and ongoing maintenance to keep your site secure and fast.",
    image: "/images/hosting.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 rounded-full px-4 py-1 border border-primary/20 bg-primary/5 text-primary backdrop-blur-md transition-all hover:bg-primary/10">
              Our Services
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] text-pretty">
            Strengthen Your Digital Strategy
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Enhance your online presence with intelligent tools designed for success.
          </motion.p>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card
                className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                    <service.icon className="size-6" />
                  </div>
                  <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h4>
                  <p className="mt-1 text-muted-foreground text-[17px]">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto px-0 pb-0">
                  <div className="ml-6 mt-4 rounded-tl-xl overflow-hidden border-t border-l border-border h-48 relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
