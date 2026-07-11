import { motion } from "framer-motion";
import {
  Stethoscope, Zap, FlaskConical, Palette, Search, MessageSquare,
  SmilePlus, Scissors, Sparkles, Star
} from "lucide-react";

const clinicalItems = [
  { icon: Stethoscope, text: "Live patient consultation & case handling" },
  { icon: Zap, text: "Hands-on laser hair reduction training" },
  { icon: FlaskConical, text: "Chemical peels & medi-facials" },
  { icon: Palette, text: "Acne & pigmentation treatment protocols" },
  { icon: Search, text: "Skin analysis & treatment planning" },
  { icon: MessageSquare, text: "Client communication & clinic workflow" },
];

const zones = [
  { icon: SmilePlus, zone: "Face Zone", desc: "Acne, pigmentation, anti-aging, and facial peels" },
  { icon: Scissors, zone: "Hair Zone", desc: "PRP basics, scalp care, and hair restoration" },
  { icon: Sparkles, zone: "Body Zone", desc: "Laser hair reduction and body pigmentation" },
];

const ProgramStructure = () => (
  <section className="py-16 md:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_20%_96%)] to-background border-t border-black/5 border-b border-black/5" aria-label="Program Structure – Clinical Internship Training">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Program Structure
        </span>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground mt-3 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What You'll Master
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Clinical Training Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-bold text-foreground flex items-center gap-3 border-b border-black/5 pb-4">
            <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold">01</span>
            Clinical Internship Training
          </h3>
          <div className="space-y-3.5">
            {clinicalItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 glass-card border-black/5 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground/90 text-xs sm:text-sm font-semibold leading-relaxed self-center">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Zone-Based Training Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-bold text-foreground flex items-center gap-3 border-b border-black/5 pb-4">
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">02</span>
            Zone-Based Hands-On Training
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Students receive focused, step-by-step hands-on training across different skin treatment zones.
            This structured approach ensures <strong className="text-foreground font-bold">mastery in each domain</strong> instead of random learning.
          </p>
          <div className="space-y-4">
            {zones.map((z, i) => (
              <div key={i} className="glass-card border-black/5 rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 bg-white shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-sm">
                    <z.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="text-foreground font-bold text-sm sm:text-base tracking-wide">{z.zone}</h4>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed pl-14">{z.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProgramStructure;
