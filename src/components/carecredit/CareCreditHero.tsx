import { Button } from "@/components/ui/button";
import { XCircle, CheckCircle, Shield } from "lucide-react";

interface CareCreditHeroProps {
  onOpenForm: () => void;
}

const CareCreditHero = ({ onOpenForm }: CareCreditHeroProps) => {
  return (
    <section className="relative py-20 lg:py-28 hero-gradient overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Denial Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <XCircle className="w-4 h-4" />
            <span>CareCredit® Denied Your Application?</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            Was Your CareCredit®{" "}
            <span className="text-destructive">Application Denied?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Don't let a rejection letter stop your pet's treatment. Get a{" "}
            <strong className="text-foreground">personal cash loan</strong> instead. 
            Approval odds are higher, and funds work at{" "}
            <strong className="text-foreground">ANY vet</strong>.
          </p>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="xl" 
            className="group mb-8"
            onClick={onOpenForm}
          >
            Check Your Eligibility
            <CheckCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
          </Button>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>No Impact to Your Credit Score — Soft Check Only</span>
          </div>

          {/* Key Differences */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-trust/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-trust" />
              </div>
              <p className="font-semibold text-foreground">Fair Credit Considered</p>
              <p className="text-sm text-muted-foreground">Scores as low as 580</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground">Fixed Interest Rates</p>
              <p className="text-sm text-muted-foreground">No deferred interest traps</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <p className="font-semibold text-foreground">Use at Any Vet</p>
              <p className="text-sm text-muted-foreground">Cash deposited to your bank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareCreditHero;
