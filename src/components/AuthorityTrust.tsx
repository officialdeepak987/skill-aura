import { motion } from "framer-motion";
import { Zap, Stethoscope, ShieldCheck, Building2, Landmark } from "lucide-react";

const trustPoints = [
  { 
    icon: Zap, 
    text: "Hands-on calibration of advanced machinery like Soprano Platinum, Q-Switch lasers, Viora contouring, and Vivace MNRF." 
  },
  { 
    icon: Stethoscope, 
    text: "Engage in real patient cases daily, shadowing live diagnosis, patient history taking, and setting customized treatments." 
  },
  { 
    icon: ShieldCheck, 
    text: "Get supervised 1-on-1 feedback from Dr. Jasdeep Kaur and guest instructors, verifying your clinical techniques." 
  },
  { 
    icon: Building2, 
    text: "Practice in a premium, sterile, state-of-the-art clinical facility located in Sector 43, DLF Phase IV, Gurugram." 
  },
];

const AuthorityTrust = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden" aria-label="Authority & Trust – Train in a Real Clinic">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
            <Landmark className="h-4.5 w-4.5 text-primary" /> Real Clinic. Real Training.
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mt-3 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Train Inside a Real Dermatology Clinic
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-foreground/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            Get your clinical training at{" "}
            <strong className="text-gradient-gold font-bold">Skin Aura Brain & Spine Neuro Centre, Gurugram</strong> –
            a fully-equipped dermatology and neurosurgery clinic with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto pt-10">
          {trustPoints.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-4 glass-card border-black/5 rounded-2xl p-5 text-left hover:border-accent/30 transition-all duration-300 bg-white shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-sm">
                <t.icon className="h-5.5 w-5.5 text-primary" />
              </div>
              <span className="text-foreground/90 text-xs sm:text-sm font-semibold leading-relaxed">{t.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AuthorityTrust;
