import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Code2,
  HeadphonesIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "High Performance",
    description: "We build sites that load instantly and perform flawlessly under pressure.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description: "Built with the latest frameworks and standards for future-proof results.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Our team is always available to help you with updates and improvements.",
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 rounded-full px-4 py-1 border border-primary/20 bg-primary/5 text-primary backdrop-blur-md transition-all hover:bg-primary/10">
              Why Choose Us
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
            Why NovaWeb?
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-muted-foreground text-lg sm:text-xl text-center max-w-2xl mx-auto">
            We build digital experiences that drive growth and engagement.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col border rounded-xl py-6 px-5 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-md group"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                <reason.icon className="size-5 text-primary" />
              </div>
              <span className="text-lg font-semibold">{reason.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
