import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, CheckCircle2, Sparkles, Compass } from "lucide-react";

const studentPaths = ["Skin Therapist", "Laser Technician", "Dermatology Clinic Assistant", "Aesthetic Clinic Professional"];
const internshipPaths = ["15-Day / 1-Month / 2-Month Plans", "Live Patient & Laser Training", "Zone-Based Hands-On Practice", "Certification + Placement Support"];
const doctorPaths = ["MBBS Doctors", "BAMS / AYUSH Doctors", "Foreign Medical Graduates", "Aesthetic Dermatology Practice"];

const WhoShouldJoin = () => (
  <section className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Compass className="h-4.5 w-4.5 text-primary" /> Career Pathways
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Who Should Join?</h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Students */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card border-black/5 rounded-[2.5rem] p-8 shadow-sm hover:border-black/10 transition-all duration-300 hover:scale-102 flex flex-col justify-between bg-white"
        >
          <div>
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 w-fit mb-6">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">12th Pass Female Students</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
              Build a secure, high-paying career in the booming cosmetology industry with job-oriented, hands-on clinical training.
            </p>
          </div>
          <ul className="space-y-3 pt-4 border-t border-black/5">
            {studentPaths.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Center: Internship Program (Highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative glass-card border-primary/30 rounded-[2.5rem] p-8 shadow-[0_15px_45px_rgba(217,43,96,0.06)] scale-105 md:scale-105 z-20 flex flex-col justify-between bg-white"
        >
          {/* Subtle highlight borders */}
          <div className="absolute inset-0 border border-primary/30 rounded-[2.5rem] pointer-events-none" />
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
            Flagship Program
          </div>
          
          <div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20 w-fit mb-6 animate-float">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">Skin Therapist Internship</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
              Gain confidence under specialist guidance. Move beyond simple theory and work with real lasers, medi-facials, and clinical workflows.
            </p>
          </div>
          <ul className="space-y-3 pt-4 border-t border-black/5">
            {internshipPaths.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 animate-pulse" />
                <strong>{p}</strong>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Doctors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card border-black/5 rounded-[2.5rem] p-8 shadow-sm hover:border-black/10 transition-all duration-300 hover:scale-102 flex flex-col justify-between bg-white"
        >
          <div>
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 w-fit mb-6">
              <Stethoscope className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">For Doctors & Medicos</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
              Unlock prestigious, independent opportunities in medical cosmetology, lasers, and clinic setups.
            </p>
          </div>
          <ul className="space-y-3 pt-4 border-t border-black/5">
            {doctorPaths.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhoShouldJoin;
