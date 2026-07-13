import { motion } from "framer-motion";
import { MapPin, Zap, Users, Building, Star } from "lucide-react";
import machine1 from "@/assets/training-machine-1.jpg";
import machine2 from "@/assets/training-machine-2.jpg";
import machine3 from "@/assets/training-machine-3.jpg";
import machine4 from "@/assets/training-machine-4.jpg";
import machine5 from "@/assets/training-machine-5.jpg";
import photo1 from "@/assets/training-photo-1.jpg";
import photo2 from "@/assets/training-photo-2.jpg";
import photo3 from "@/assets/training-photo-3.jpg";
import photo4 from "@/assets/training-photo-4.jpg";
import photo5 from "@/assets/training-photo-5.jpg";
import photo6 from "@/assets/training-photo-6.jpg";

type GalleryGroup = {
  heading: string;
  items: Array<{ src: string; alt: string; caption: string }>;
};

const galleryGroups: GalleryGroup[] = [
  {
    heading: "Advanced Machines Showcase",
    items: [
      { src: machine1, alt: "Q Switch Laser", caption: "Q Switch Laser" },
      { src: machine2, alt: "Soprano Ice Platinum for laser hair reduction", caption: "Soprano Ice Platinum" },
      { src: machine3, alt: "HydraFacial Elite machine", caption: "HydraFacial Elite" },
      { src: machine4, alt: "Cooltech for fat freezing", caption: "Cooltech" },
      { src: machine5, alt: "Viora for fat contouring", caption: "Viora" },
      { src: photo2, alt: "MNRF Vivace machine", caption: "MNRF Vivace" },
    ],
  },
  {
    heading: "Live Training Sessions",
    items: [
      { src: photo3, alt: "Botox training session", caption: "Botox Training" },
      { src: photo4, alt: "Fillers training session", caption: "Fillers Training" },
      { src: photo5, alt: "Live filler training on patient at Skin Aura", caption: "Live Filler Demo" },
      { src: photo6, alt: "Certificate distribution to trainee at Skin Aura", caption: "Certification Ceremony" },
    ],
  },
];

const HandsOnTraining = () => (
  <section id="training" className="py-16 md:py-24 bg-background relative overflow-hidden">
    <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5 animate-pulse">
          <Star className="h-4.5 w-4.5 text-primary fill-primary" /> Real Clinical Exposure
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground tracking-tight">Hands-On Training Centre</h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
          Get real clinical exposure at our advanced training centre in Gurugram under the direct mentorship of Dr Jasdeep Kaur.
        </p>
      </motion.div>

      {/* Primary Training Centre Highlight Box */}
      <div className="max-w-xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card border-accent/30 rounded-3xl p-6 md:p-8 shadow-sm hover:border-accent/50 transition-all duration-300 relative overflow-hidden bg-white"
        >
          <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full pointer-events-none" />
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
              <Building className="h-5 w-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Primary Training Centre</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">Skin Aura Brain & Spine Neuro Centre</h3>
          <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">Dr Jasdeep Kaur & Dr Vikas Kathuria</p>
          <a
            href="https://maps.app.goo.gl/u7P7hBmmfRok9p5N9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-foreground/80 hover:text-accent transition-colors"
          >
            <MapPin className="h-4 w-4 text-accent shrink-0" />
            DLF Phase IV, Gurugram, Haryana 122009
          </a>
        </motion.div>
      </div>

      {/* Feature quick tags */}
      <div className="max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-xs sm:text-sm text-foreground/80">
            <Zap className="h-4 w-4 text-accent animate-pulse" />
            Advanced Lasers & Devices
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-xs sm:text-sm text-foreground/80">
            <Users className="h-4 w-4 text-accent animate-pulse" />
            Real Clinical Patients
          </div>
        </motion.div>
      </div>

      {/* Gallery Showcase Groups */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-16"
      >
        {galleryGroups.map((group) => (
          <div key={group.heading} className="space-y-6">
            <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {group.heading}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {group.items.map((item, idx) => (
                <motion.figure
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="group glass-card border-black/5 rounded-2xl shadow-sm hover:border-accent/30 transition-all duration-300 overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div className="aspect-square bg-secondary/30 overflow-hidden relative border-b border-black/5">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 filter brightness-100"
                    />
                  </div>
                  <figcaption className="px-3 py-3 text-center text-[10px] sm:text-xs font-semibold text-foreground/80 min-h-[2.5rem] flex items-center justify-center tracking-wide leading-snug">
                    {item.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HandsOnTraining;
