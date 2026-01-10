import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";

// Optimized responsive images with AVIF, WebP and fallback
import heroImageAvif from "@/assets/hero-vet.jpg?w=640;960;1280&format=avif&as=srcset";
import heroImageWebp from "@/assets/hero-vet.jpg?w=640;960;1280&format=webp&as=srcset";
import heroImageJpg from "@/assets/hero-vet.jpg?w=640;960;1280&format=jpg&as=srcset";
import heroImageFallback from "@/assets/hero-vet.jpg?w=960";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  const [zipCode, setZipCode] = useState("");
  const [zipError, setZipError] = useState("");

  const handleZipSubmit = () => {
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zipCode)) {
      setZipError("Please enter a valid 5-digit ZIP code");
      return;
    }
    setZipError("");
    onOpenForm();
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZipCode(value);
    if (zipError) setZipError("");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Image - Optimized with AVIF, WebP and responsive srcset */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            srcSet={heroImageAvif} 
            type="image/avif" 
            sizes="100vw"
          />
          <source 
            srcSet={heroImageWebp} 
            type="image/webp" 
            sizes="100vw"
          />
          <source 
            srcSet={heroImageJpg} 
            type="image/jpeg" 
            sizes="100vw"
          />
          <img
            src={heroImageFallback}
            alt="Veterinarian comforting a dog in a modern clinic"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
            decoding="async"
            width={960}
            height={640}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container relative z-10 py-12 px-4 sm:px-6 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-up text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Soft Credit Check — No Impact to Your Score</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Your Pet's Health{" "}
              <span className="text-primary">Can't Wait.</span>{" "}
              <span className="text-accent">Neither Should You.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              Get funds as fast as <strong className="text-foreground">24 hours</strong> to cover 
              unexpected vet bills from $500 to $10,000. All credit types considered. 
              Use the cash at <strong className="text-foreground">any veterinary clinic</strong> you choose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 items-center lg:items-start">
              {/* ZIP Code Input Group */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="ZIP Code"
                    value={zipCode}
                    onChange={handleZipChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleZipSubmit()}
                    className="h-12 sm:h-14 w-full sm:w-36 text-center text-base sm:text-lg font-medium border-2 border-border focus:border-primary rounded-xl bg-background"
                    maxLength={5}
                  />
                  {zipError && (
                    <p className="absolute -bottom-5 left-0 right-0 text-xs text-destructive text-center sm:text-left sm:whitespace-nowrap">{zipError}</p>
                  )}
                </div>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={handleZipSubmit}
                  className="group w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8"
                >
                  Check My Rate
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Secondary CTA */}
              <button 
                onClick={onOpenForm}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <CheckCircle className="w-4 h-4" />
                <span className="underline underline-offset-2">Skip ZIP — Check Your Rate Now</span>
              </button>
            </div>

            {/* Quick Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Funds in 24 Hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-trust flex-shrink-0" />
                <span>High Approval Odds</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                <span>SSL Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual with optimized responsive image */}
          <div className="relative hidden lg:block animate-fade-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <picture>
                <source 
                  srcSet={heroImageAvif} 
                  type="image/avif" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <source 
                  srcSet={heroImageWebp} 
                  type="image/webp" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <source 
                  srcSet={heroImageJpg} 
                  type="image/jpeg" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <img
                  src={heroImageFallback}
                  alt="Veterinarian providing compassionate care to a pet"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  width={960}
                  height={640}
                />
              </picture>
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-trust/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-trust" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Pre-Qualified in 2 Minutes</p>
                    <p className="text-sm text-muted-foreground">No impact to your credit score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
