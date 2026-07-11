import { MapPin, Mail, Phone, Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="bg-[hsl(260_18%_6%)] text-white/80 py-16 border-t border-black/5 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <img src={logo} alt="Skin Aura Skill Academy" className="h-12 w-auto mb-4 filter brightness-100 invert" />
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xs">
            Professional aesthetic dermatology and cosmetology training by Dr Jasdeep Kaur. Empowering the next generation of certified skin therapists.
          </p>
        </div>

        {/* Learning Hub links */}
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-accent">Learning Hub</h4>
          <div className="space-y-2.5">
            {[
              { label: "About Us", href: "#about" },
              { label: "Courses", href: "#courses" },
              { label: "Training Centre", href: "#training" },
              { label: "Clinic Services", href: "#clinic" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="block text-xs sm:text-sm text-white/65 hover:text-primary transition-colors tracking-wide">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-accent">Quick Links</h4>
          <div className="space-y-2.5">
            <a href="https://learn.skinauraskillacademy.com/s/store/courses/All%20Courses" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-white/65 hover:text-primary transition-colors tracking-wide">
              All Courses
            </a>
            <a href="https://www.sabclinic.com/" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-white/65 hover:text-primary transition-colors tracking-wide">
              SAB Clinic
            </a>
            <a href="https://www.drjasdeepkaur.com/" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-white/65 hover:text-primary transition-colors tracking-wide">
              Dr Jasdeep Kaur Portal
            </a>
          </div>
        </div>

        {/* Contact info & Socials */}
        <div className="space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-accent">Contact Us</h4>
          <div className="space-y-3 text-xs sm:text-sm text-white/60">
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4.5 w-4.5 mt-0.5 shrink-0 text-accent" />
              <a href="https://maps.app.goo.gl/1jEtrbu2ZCHBugX76" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors leading-relaxed">
                H.N. 7311, GF & Basement, behind Supermart 2, DLF Phase IV, Sector 43, Gurugram, Haryana 122009
              </a>
            </div>
            <a href="mailto:connect@sabclinic.com" className="flex items-center gap-2.5 hover:text-primary transition-colors">
              <Mail className="h-4.5 w-4.5 text-accent shrink-0" />
              connect@sabclinic.com
            </a>
            <a
              href="tel:+919217175260"
              className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-green-400 hover:text-green-300 transition-colors animate-pulse pt-1 block"
            >
              <Phone className="h-5.5 w-5.5 shrink-0" />
              +91 92171 75260
            </a>
            <a href="tel:+918586844718" className="flex items-center gap-2.5 hover:text-primary transition-colors text-xs text-white/40">
              <Phone className="h-4 w-4 shrink-0" />
              +91 85868 44718
            </a>
          </div>
          
          <div className="flex gap-2.5 pt-2">
            {[
              { href: "https://youtube.com/@skinauraclinic?si=W8u4_mwseJ8JCpeS", icon: Youtube, label: "YouTube" },
              { href: "https://www.instagram.com/sabclinicggn?igsh=MXZ0cG5ycGtzbHFqMw==", icon: Instagram, label: "Instagram" },
              { href: "https://www.facebook.com/sabclinicggn", icon: Facebook, label: "Facebook" },
            ].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all duration-300">
                <s.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Embed map and copyright line */}
      <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] text-white/40 uppercase tracking-wider text-center md:text-left">
          © {new Date().getFullYear()} Skin Aura Skill Academy. All rights reserved.
        </p>
        
        {/* Rounded mini Map Container */}
        <div className="w-full sm:w-80 h-36 rounded-2xl overflow-hidden border border-white/10 shadow-lg shrink-0">
          <iframe
            title="Skin Aura Skill Academy – Location Map"
            src="https://www.google.com/maps?q=H.N.+7311,+behind+Supermart+2,+DLF+Phase+IV,+Sector+43,+Gurugram,+Haryana+122009&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
