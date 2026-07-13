import { motion } from "framer-motion";
import { Award, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificateSection = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        {/* Certificate Mockup Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 flex justify-center group"
        >
          <div className="relative w-64 aspect-[3/4] bg-white border-2 border-accent/40 rounded-[2rem] p-6 shadow-md relative flex flex-col justify-between items-center text-center group-hover:border-accent transition-colors duration-500">
            {/* Subtle certificate patterns */}
            <div className="absolute inset-2 border border-accent/10 rounded-[1.5rem] pointer-events-none" />
            
            <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mt-4">
              <Award className="h-7 w-7 text-accent animate-pulse" />
            </div>

            <div className="space-y-3 z-10">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block">Skin Aura Skill Academy</span>
              <div className="w-8 h-px bg-accent/20 mx-auto" />
              <h4 className="text-lg font-bold text-foreground tracking-tight">CERTIFICATE</h4>
              <p className="text-[9px] text-muted-foreground leading-relaxed uppercase tracking-wider">
                This is to certify completion of advanced clinical dermatology training.
              </p>
            </div>

            <div className="w-full border-t border-black/5 pt-4 mb-4 z-10">
              <p className="text-[10px] text-primary font-bold tracking-wider uppercase">Dr Jasdeep Kaur</p>
              <p className="text-[8px] text-muted-foreground tracking-widest mt-0.5 uppercase font-semibold">Lead Cosmetologist</p>
            </div>
          </div>
        </motion.div>

        {/* Text Copy Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6"
        >
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 animate-pulse">
              <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Career Accreditation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">Earn a Certificate</h2>
            <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
          </div>

          <p className="text-gradient-gold text-sm sm:text-base font-semibold uppercase tracking-wider">
            Get evidence of what you've learned
          </p>

          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Upon completing your course, receive a professional certificate from Skin Aura Skill Academy, 
            validated by Dr Jasdeep Kaur. Showcase your expertise to leading clinics, hospitals, and cosmetology centers.
          </p>

          <div className="space-y-3.5 border-t border-black/5 pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
              <span className="text-foreground/90 text-xs sm:text-sm font-semibold tracking-wide">Industry-recognized certification</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
              <span className="text-foreground/90 text-xs sm:text-sm font-semibold tracking-wide">Hands-on clinical training validation</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
              <span className="text-foreground/90 text-xs sm:text-sm font-semibold tracking-wide">Job placement & career assistance</span>
            </div>
          </div>

          <Button size="lg" className="text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102" asChild>
            <a href="https://learn.skinauraskillacademy.com" target="_blank" rel="noopener noreferrer">
              Get Certified Now
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CertificateSection;
