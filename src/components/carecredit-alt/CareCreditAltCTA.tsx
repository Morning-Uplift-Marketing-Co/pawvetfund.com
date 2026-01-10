import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CareCreditAltCTAProps {
  onOpenForm: () => void;
}

const CareCreditAltCTA = ({ onOpenForm }: CareCreditAltCTAProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(220,60%,15%)] mb-4">
            Don't Let a CareCredit Denial Stop Your Pet's Care
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take 2 minutes to check your eligibility. No impact to your credit score.
          </p>
          <Button
            onClick={onOpenForm}
            size="lg"
            className="bg-gradient-to-r from-[hsl(20,85%,55%)] to-[hsl(20,85%,45%)] hover:from-[hsl(20,85%,60%)] hover:to-[hsl(20,85%,50%)] text-white font-bold px-10 py-6 text-lg rounded-xl shadow-[0_8px_32px_hsl(20,85%,55%,0.35)] hover:shadow-[0_12px_40px_hsl(20,85%,55%,0.45)] transition-all hover:-translate-y-1 group"
          >
            Check Your Eligibility – Free
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareCreditAltCTA;
