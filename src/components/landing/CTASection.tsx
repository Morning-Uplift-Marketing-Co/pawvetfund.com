import { Button } from "@/components/ui/button";
import { Heart, Clock, Shield, CheckCircle } from "lucide-react";

interface CTASectionProps {
  onOpenForm: () => void;
}

const CTASection = ({ onOpenForm }: CTASectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8 animate-fade-up">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
            Your Pet Is Counting on You.
            <br />
            <span className="text-accent">We're Here to Help.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 animate-fade-up animation-delay-200">
            Don't let money stand between your pet and the care they need. 
            Check your rate in 2 minutes — it's free and won't affect your credit score.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl"
              onClick={onOpenForm}
            >
              Check Your Rate Now — Free
              <CheckCircle className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Clock className="w-4 h-4" />
              <span className="text-sm">2-Minute Form</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Shield className="w-4 h-4" />
              <span className="text-sm">No Credit Impact</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Funds in 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
