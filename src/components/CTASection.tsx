import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Smartphone, Star } from "lucide-react";

const CTASection = () => (
  <section className="py-16 md:py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_20%_96%)] via-background to-background border-t border-black/5 border-b border-black/5">
    {/* Soft light glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[130px] opacity-70 pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        {/* Text and CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="h-3.5 w-3.5" /> Mobile Friendly LMS
          </div>
          
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Access Your Courses <br />
            <span className="text-gradient-gold">Anytime, Anywhere</span>
          </h2>
          
          <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
            Skin Aura Skill Academy's premium educational portal is fully optimized for all devices. Learn on your phone, tablet, or desktop – at your own convenience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-md transition-transform duration-300 hover:scale-102">
              <a href="https://learn.skinauraskillacademy.com/s/store" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-white hover:bg-black/5 border-accent text-accent transition-transform duration-300 hover:scale-102">
              <a href="https://learn.skinauraskillacademy.com" target="_blank" rel="noopener noreferrer">
                Apply for Training
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Visual Badge Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative glass-card border-black/5 rounded-[2.5rem] p-8 shadow-md text-center w-full max-w-[320px] group hover:border-accent/30 transition-all duration-300 bg-white">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full pointer-events-none" />
            <img src={logo} alt="Skin Aura Skill Academy" className="w-28 h-28 mx-auto object-contain" />
            <p className="font-bold text-foreground mt-4 text-base tracking-wide">Skin Aura Skill Academy</p>
            <p className="text-xs text-gradient-gold font-semibold uppercase tracking-wider mt-1">Learn. Practice. Succeed.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
