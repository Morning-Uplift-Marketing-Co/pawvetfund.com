import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyVetCTAProps {
  onOpenForm: () => void;
}

const EmergencyVetCTA = ({ onOpenForm }: EmergencyVetCTAProps) => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't Let Finances Stand Between Your Pet and Care
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take 2 minutes to see if you qualify. No impact to your credit score.
          </p>
          <Button
            onClick={onOpenForm}
            size="lg"
            className="bg-gradient-to-r from-accent to-amber-600 hover:from-accent/90 hover:to-amber-600/90 text-foreground font-bold px-10 py-6 text-lg rounded-xl shadow-[0_4px_20px_hsl(38,70%,55%,0.4)] hover:shadow-[0_8px_32px_hsl(38,70%,55%,0.5)] transition-all hover:-translate-y-0.5 group"
          >
            Check Your Rate – It's Free
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetCTA;
