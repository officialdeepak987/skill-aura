import { motion } from "framer-motion";
import { Award, Monitor, FileCheck, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Faculty",
    desc: "Learn from Dr Jasdeep Kaur with 15+ years of real clinical experience.",
  },
  {
    icon: Monitor,
    title: "Learn Anytime",
    desc: "Access online modules at your own pace via our responsive platform.",
  },
  {
    icon: FileCheck,
    title: "Hands-On Practice",
    desc: "Gain confidence with real patients, live lasers, and clinic workflows.",
  },
  {
    icon: Users,
    title: "500+ Alumni",
    desc: "Join a premium community of successfully trained therapists & doctors.",
  },
];

const FeatureStrip = () => (
  <section className="relative py-8 md:py-12 bg-background z-20">
    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <div className="glass-card border-black/5 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center text-center lg:items-start lg:text-left space-y-3"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20 shadow-sm shadow-accent/5">
                <f.icon className="h-6 w-6 text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-[240px] lg:max-w-none">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureStrip;
