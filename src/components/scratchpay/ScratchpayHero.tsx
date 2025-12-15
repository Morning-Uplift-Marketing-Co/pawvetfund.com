import { Button } from "@/components/ui/button";
import { MapPin, Banknote, ArrowRight, Shield } from "lucide-react";

interface ScratchpayHeroProps {
  onOpenForm: () => void;
}

const ScratchpayHero = ({ onOpenForm }: ScratchpayHeroProps) => {
  return (
    <section className="relative py-20 lg:py-28 hero-gradient overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Network Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Works at 100% of US Veterinarians</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            Vet Doesn't Accept Scratchpay?{" "}
            <span className="text-primary">No Problem.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Scratchpay is great, but not every vet takes it. Our personal loans deposit{" "}
            <strong className="text-foreground">CASH into your account</strong>, so you can pay{" "}
            <strong className="text-foreground">ANY veterinarian</strong> instantly.
          </p>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="xl" 
            className="group mb-8"
            onClick={onOpenForm}
          >
            See My Cash Loan Options
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>No Impact to Your Credit Score — Soft Check Only</span>
          </div>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center animate-fade-up animation-delay-100">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Banknote className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground">Cash in Your Bank</p>
              <p className="text-sm text-muted-foreground">Direct deposit in 24 hours</p>
            </div>
            <div className="text-center animate-fade-up animation-delay-200">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <p className="font-semibold text-foreground">Any Vet, Any Clinic</p>
              <p className="text-sm text-muted-foreground">No network restrictions</p>
            </div>
            <div className="text-center animate-fade-up animation-delay-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-trust/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-trust" />
              </div>
              <p className="font-semibold text-foreground">Up to 72 Months</p>
              <p className="text-sm text-muted-foreground">Flexible repayment terms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScratchpayHero;
