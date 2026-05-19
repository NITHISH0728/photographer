import ShuffleHero from "@/components/ShuffleHero";
import CircularTestimonials from "@/components/CircularTestimonials";
import ExpandableGallery from "@/components/ExpandableGallery";
import ReviewsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import AboutSection3 from "@/components/AboutSection3";
import MobileNav from "@/components/MobileNav";

const MOCK_PHOTOGRAPHERS = [
  {
    name: "Alex Rivera",
    designation: "Lead Photographer",
    quote:
      "Capturing the unspoken emotions between moments is where the true story lies.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&auto=format&fit=crop",
  },
  {
    name: "Sarah Chen",
    designation: "Portrait Specialist",
    quote:
      "Light and shadow are my canvas. Every face has a unique geometry that deserves to be highlighted.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&auto=format&fit=crop",
  },
  {
    name: "Michael Torres",
    designation: "Editorial Photographer",
    quote:
      "My goal is to freeze time in a way that feels cinematic, timeless, and completely authentic.",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Background Wrapper — covers both nav and hero */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image with Subtle Blur */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero-back.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
            transform: "scale(1.05)",
          }}
        />
        {/* Very Light Glassmorphic Overlay */}
        <div className="absolute inset-0 z-[1] bg-white/25" />

        {/* Transparent Navbar */}
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/30 border-b border-white/20">
          <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
            <span className="font-bold text-lg sm:text-xl tracking-tight">Studio.</span>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#work" className="text-foreground/70 hover:text-foreground transition-colors">Work</a>
              <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
              <a href="#photographers" className="text-foreground/70 hover:text-foreground transition-colors">Photographers</a>
              <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
            </div>
            <MobileNav />
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10">
          <ShuffleHero />
        </div>
      </div>

      <div id="photographers" className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">Photographer Details</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Get to know the creative minds behind the lens.
          </p>
        </div>
        <CircularTestimonials testimonials={MOCK_PHOTOGRAPHERS} />
      </div>

      <div id="work">
        <ExpandableGallery />
      </div>

      <ReviewsSection />

      <div id="about">
        <AboutSection3 />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
