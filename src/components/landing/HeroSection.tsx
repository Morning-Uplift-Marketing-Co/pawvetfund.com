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

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Soft Credit Check — No Impact to Your Score</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Your Pet's Health{" "}
              <span className="text-primary">Can't Wait.</span>{" "}
              <span className="text-accent">Neither Should You.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
              Get funds as fast as <strong className="text-foreground">24 hours</strong> to cover 
              unexpected vet bills from $500 to $10,000. All credit types considered. 
              Use the cash at <strong className="text-foreground">any veterinary clinic</strong> you choose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" onClick={onOpenForm}>
                Check Your Rate Now
                <CheckCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter ZIP Code"
                    value={zipCode}
                    onChange={handleZipChange}
                    className="h-14 w-40 text-center text-lg font-medium border-2 border-border focus:border-primary rounded-xl"
                    maxLength={5}
                  />
                  {zipError && (
                    <p className="absolute -bottom-6 left-0 text-xs text-destructive whitespace-nowrap">{zipError}</p>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  size="xl" 
                  onClick={handleZipSubmit}
                  className="group"
                >
                  Go
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Funds in 24 Hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-trust" />
                <span>High Approval Odds</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>256-bit SSL Encrypted</span>
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
