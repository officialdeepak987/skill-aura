import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Sun, Scissors, Droplets, FlaskConical, Clock, Star } from "lucide-react";

const services = [
  { 
    icon: Sparkles, 
    title: "Acne Treatment", 
    desc: "Master clinical extraction, high-frequency therapies, and custom topical regimens for severe acne grades." 
  },
  { 
    icon: Sun, 
    title: "Pigmentation Treatment", 
    desc: "Learn safe chemical peeling, Q-Switch laser calibration, and barrier repair protocols for melasma and PIH." 
  },
  { 
    icon: Scissors, 
    title: "Laser Hair Reduction", 
    desc: "Get hands-on control with industry-standard diode and Soprano Ice Platinum systems for all skin types." 
  },
  { 
    icon: Droplets, 
    title: "PRP Hair Therapy", 
    desc: "Learn scalp growth factor delivery, sterile phlebotomy, centrifuge operation, and hair restoration theory." 
  },
  { 
    icon: FlaskConical, 
    title: "Chemical Peels", 
    desc: "Understand acid concentrations, application techniques, neutralizing chemistry, and skin prep for glycolic, salicylic, and yellow peels." 
  },
  { 
    icon: Clock, 
    title: "Anti-Aging Procedures", 
    desc: "Observe clinical radiofrequency (MNRF), skin tightening therapies, anti-aging serums infusion, and age management planning." 
  },
];

const ClinicExpertise = () => (
  <section id="clinic" className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Clinical Services
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Clinic Expertise</h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
          Advanced dermatology treatments by Dr Jasdeep Kaur at Skin Aura Brain & Spine Neuro Centre, DLF Phase IV, Gurugram.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="glass-card border-black/5 rounded-2xl p-6 text-center hover:border-accent/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <s.icon className="h-5.5 w-5.5 text-primary" />
              </div>
              <p className="text-sm sm:text-base font-semibold tracking-wide text-foreground mb-2">{s.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102" asChild>
          <a href="https://sabclinic.exlyapp.com/" target="_blank" rel="noopener noreferrer">Book Consultation</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ClinicExpertise;
