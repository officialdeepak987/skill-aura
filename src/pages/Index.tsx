import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import AboutSection from "@/components/AboutSection";
import PlatformFeatures from "@/components/PlatformFeatures";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CoursesSection from "@/components/CoursesSection";
import InstructorSection from "@/components/InstructorSection";
import HandsOnTraining from "@/components/HandsOnTraining";
import EbookSection from "@/components/EbookSection";
import ClarityCallCTA from "@/components/ClarityCallCTA";
import StudentSuccess from "@/components/StudentSuccess";
import CertificateSection from "@/components/CertificateSection";
import ClinicExpertise from "@/components/ClinicExpertise";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCounsellingButtons from "@/components/FloatingCounsellingButtons";
import InternshipHero from "@/components/InternshipHero";
import EnrollmentForm from "@/components/EnrollmentForm";
import FlagshipProgram from "@/components/FlagshipProgram";
import ProgramStructure from "@/components/ProgramStructure";
import InternshipPricing from "@/components/InternshipPricing";
import TargetAudience from "@/components/TargetAudience";
import AuthorityTrust from "@/components/AuthorityTrust";
import InternshipFinalCTA from "@/components/InternshipFinalCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeatureStrip />
    <AboutSection />
    <PlatformFeatures />
    <WhoShouldJoin />
    <CoursesSection />

    {/* Internship Program Sections */}
    <InternshipHero />
    <FlagshipProgram />
    <ProgramStructure />
    <InternshipPricing />
    <TargetAudience />
    <AuthorityTrust />
    <InternshipFinalCTA />

    <InstructorSection />
    <HandsOnTraining />
    <EbookSection />
    <ClarityCallCTA />
    <StudentSuccess />
    <CertificateSection />
    <ClinicExpertise />
    <CTASection />
    <EnrollmentForm />
    <Footer />
    <FloatingWhatsApp />
    <FloatingCounsellingButtons />
  </div>
);

export default Index;
