import { motion } from "framer-motion";
import { Award, Monitor, FileCheck, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Faculty",
    desc: "Learn directly from Dr Jasdeep Kaur with 15+ years of real clinical dermatology practice.",
    tag: "15+ Yrs Exp",
    color: "from-amber-500/10 to-accent/10 border-accent/20 text-accent",
  },
  {
    icon: Monitor,
    title: "Learn Anytime",
    desc: "Access HD video modules, quizzes, and curriculum at your own pace via our premium responsive LMS.",
    tag: "24/7 Access",
    color: "from-blue-500/10 to-sky-500/10 border-blue-500/20 text-blue-600",
  },
  {
    icon: FileCheck,
    title: "Hands-On Practice",
    desc: "Gain clinical confidence working with live patients, medical lasers, and real clinical workflows.",
    tag: "100% Practical",
    color: "from-rose-500/10 to-primary/10 border-primary/20 text-primary",
  },
  {
    icon: Users,
    title: "500+ Alumni",
    desc: "Join a premium community of successfully placed skin therapists and medical practitioners.",
    tag: "Career Ready",
    color: "from-emerald-500/10 to-green-500/10 border-emerald-500/20 text-emerald-600",
  },
];

const FeatureStrip = () => (
  <section className="relative py-12 md:py-16 bg-background z-20 overflow-hidden">
    {/* Soft glowing ambient background blobs */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-accent/5 blur-[100px] pointer-events-none" />
    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="group relative bg-white border border-black/5 rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-black/10 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top decorative corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-black/5 to-transparent rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="space-y-4">
              {/* Icon Container with Custom Gradient Theme */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} border transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                <f.icon className="h-7 w-7 transition-transform duration-500 group-hover:rotate-6" />
              </div>

              {/* Tag / Status Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[9px] font-extrabold uppercase tracking-wider text-foreground/60 w-fit">
                <Sparkles className="h-3 w-3 text-accent animate-pulse" />
                {f.tag}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-bold text-foreground text-sm sm:text-base uppercase tracking-wider">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>

            {/* Bottom Accent line */}
            <div className="w-10 h-1 bg-accent/20 rounded-full mt-6 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureStrip;
