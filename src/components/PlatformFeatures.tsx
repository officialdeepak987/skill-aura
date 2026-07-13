import { motion } from "framer-motion";
import { CheckCircle2, MonitorPlay, BookOpen, Bell, Video, Lightbulb, Award, Users, Star } from "lucide-react";

const features = [
  { icon: MonitorPlay, text: "Online Video Lectures" },
  { icon: BookOpen, text: "Quiz & Assignments" },
  { icon: Bell, text: "Alerts & Notifications" },
  { icon: Video, text: "Live Interactive Classes" },
  { icon: Lightbulb, text: "Cutting-Edge Curriculum" },
  { icon: Award, text: "Expert Specialist Faculty" },
  { icon: Users, text: "Student Discussion Forums" },
  { icon: CheckCircle2, text: "Affordable Fee Structures" },
];

const PlatformFeatures = () => (
  <section className="py-16 md:py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[hsl(40_20%_96%)] to-background relative overflow-hidden border-t border-black/5 border-b border-black/5">
    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Beautiful Mock App Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 relative group"
        >
          {/* Outer glow aura */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/5 to-accent/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative glass-card border-black/5 rounded-3xl p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-white">
            {/* Top Bar Mock Controls */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] text-foreground/40 tracking-wider font-mono">
                LMS.SKINAURA.COM
              </div>
            </div>

            {/* Dashboard Items */}
            <div className="space-y-4">
              <div className="bg-black/5 hover:bg-black/8 border border-black/5 rounded-xl p-4 flex items-center gap-4 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Interactive Modules</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">24/7 Access on mobile and desktop</p>
                </div>
              </div>

              <div className="bg-black/5 hover:bg-black/8 border border-black/5 rounded-xl p-4 flex items-center gap-4 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Doubt Clearing Sessions</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Live clinical interaction panels</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                <div className="p-2.5 rounded-lg bg-primary/20 text-primary animate-pulse">
                  <MonitorPlay className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    Live Training Video Showcase
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-primary px-1.5 py-0.5 rounded text-white">LIVE</span>
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Direct video feed from Gurugram clinic</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Platform Features Checklists */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 space-y-6"
        >
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 animate-pulse">
              <Star className="h-4 w-4 text-primary fill-primary" /> Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground tracking-tight">Platform Features</h2>
            <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed">
            Our state-of-the-art Learning Management System (LMS) gives you the tools to master professional dermatology at your own convenience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {features.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="text-foreground/85 text-xs sm:text-sm font-semibold tracking-wide">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
