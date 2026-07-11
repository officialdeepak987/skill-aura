import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Stethoscope, Zap, Award, BookOpen, Star } from "lucide-react";

const highlights = [
  { icon: Stethoscope, text: "Live Patient Exposure" },
  { icon: Zap, text: "Hands-On Laser & Aesthetic Training" },
  { icon: Award, text: "Certification + Career Support" },
  { icon: BookOpen, text: "Dermatologist-Guided Learning" },
];

const InternshipHero = () => (
  <section className="relative py-16 md:py-28 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_30%_95%)] via-background to-background border-t border-black/5 border-b border-black/5" aria-label="Skin Therapist Internship Program">
    {/* Soft light glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
        >
          <Star className="h-3 w-3 fill-current animate-spin" /> Flagship Internship Program
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Skin Therapist Internship Program – <br />
          <span className="text-gradient-gold">Learn, Practice & Earn</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/80 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Step into the world of advanced cosmetology with premium clinical internships and structured hands-on guidance. Move beyond simple worksheets and become a fully certified, job-ready skincare therapist.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
        >
          <Button size="lg" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102">
            <a href="#internship-pricing">Apply for Internship</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-white hover:bg-black/5 border-accent text-accent transition-transform duration-300 hover:scale-102">
            <a href="https://wa.me/919050224433?text=Hi%2C%20I%20want%20to%20book%20free%20counselling%20for%20the%20Internship%20Program" target="_blank" rel="noopener noreferrer">
              Book Free Counselling
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-16"
      >
        {highlights.map((h, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 glass-card border-black/5 rounded-2xl p-5 hover:border-accent/20 transition-colors duration-300 bg-white shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
              <h.icon className="h-5.5 w-5.5 text-primary" />
            </div>
            <span className="text-foreground/90 text-xs sm:text-sm font-semibold tracking-wide leading-snug">{h.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default InternshipHero;
