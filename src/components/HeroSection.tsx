import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import drJasdeep from "@/assets/dr-jasdeep-hero.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

// Subtle floating watermarks (light grayscale logos)
const FloatingLogos = () => {
  const columns = [
    { x: "5%", duration: 16, delay: 0, opacity: 0.03, size: 50 },
    { x: "20%", duration: 22, delay: 3, opacity: 0.02, size: 70 },
    { x: "35%", duration: 19, delay: 1.5, opacity: 0.03, size: 45 },
    { x: "50%", duration: 25, delay: 5, opacity: 0.02, size: 80 },
    { x: "65%", duration: 18, delay: 2.5, opacity: 0.03, size: 55 },
    { x: "80%", duration: 21, delay: 0.8, opacity: 0.02, size: 65 },
    { x: "92%", duration: 26, delay: 4, opacity: 0.03, size: 75 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {columns.map((col, idx) => (
        <motion.img
          key={idx}
          src={logo}
          alt=""
          aria-hidden="true"
          style={{
            left: col.x,
            width: col.size,
            height: col.size,
            opacity: col.opacity,
          }}
          className="absolute top-0 object-contain filter grayscale"
          animate={{ y: ["-20%", "120vh"] }}
          transition={{
            duration: col.duration,
            delay: col.delay,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(40_30%_95%)] via-background to-background" aria-label="Hero">
    {/* Ambient glowing blobs (soft light gradients) */}
    <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] opacity-40 pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl grid md:grid-cols-12 gap-12 items-center relative z-10">
      {/* Premium Left Content Panel */}
      <div className="md:col-span-7 relative overflow-hidden flex flex-col justify-center py-6 md:py-0">
        <FloatingLogos />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 space-y-6"
        >
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-xs font-semibold tracking-wider text-accent uppercase w-fit">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            India's Premier Aesthetic Academy
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground tracking-tight">
            Master Aesthetic Dermatology with <br />
            <span className="text-gradient-gold font-bold">Real Clinical Expertise</span>
          </h1>

          <p className="text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Learn advanced aesthetic dermatology techniques directly from practicing medical specialists. Gain hands-on clinical exposure on real patients and build a confident, high-paying career in the booming aesthetics industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild className="text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-103">
              <a href="https://learn.skinauraskillacademy.com/s/store/courses/All%20Courses" target="_blank" rel="noopener noreferrer">
                EXPLORE COURSES <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-6 rounded-full bg-white hover:bg-black/5 border-accent text-accent transition-all duration-300 hover:scale-103">
              <a href="#about">
                Meet Your Mentors
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-black/5 max-w-md">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">Certified Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">100% Hands-On</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Image Panel */}
      <div className="md:col-span-5 relative flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] group bg-white"
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
          <div className="absolute inset-2 border border-accent/20 rounded-[1.75rem] z-20 pointer-events-none" />
          
          <img
            src={drJasdeep}
            alt="Dr Jasdeep Kaur – Founder, Skin Aura Skill Academy, Aesthetic Dermatology Training"
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-103"
            loading="eager"
            width="1024"
            height="1280"
          />

          <div className="absolute bottom-6 left-6 right-6 z-20 text-center sm:text-left bg-white/70 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-md">
            <p className="text-[10px] uppercase font-bold tracking-widest text-accent mb-0.5">Lead Instructor</p>
            <h3 className="text-lg font-bold text-foreground leading-tight">Dr Jasdeep Kaur</h3>
            <p className="text-[11px] text-muted-foreground font-semibold">MBBS, DDVL • Cosmetologist (15+ Years Exp.)</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
