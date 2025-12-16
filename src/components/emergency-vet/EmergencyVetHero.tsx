import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyVetHeroProps {
  onOpenForm: () => void;
}

const EmergencyVetHero = ({ onOpenForm }: EmergencyVetHeroProps) => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-[hsl(40,33%,96%)]">
      {/* Background accent */}
      <div className="absolute top-[-50%] right-[-20%] w-[60%] h-[150%] bg-[radial-gradient(ellipse_at_center,hsl(38,70%,75%,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="relative z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Emergency Pet Funding
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6">
              Your Pet Needs Care <span className="text-primary relative inline-block">Now<span className="absolute bottom-1 left-0 w-full h-2 bg-accent/40 -z-10 rounded" /></span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Get funds for emergency vet bills deposited to your bank in as little as 24 hours. All credit types considered.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Soft credit check only",
                "Funds as fast as 24hrs",
                "All credit types"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={onOpenForm}
              size="lg"
              className="bg-gradient-to-r from-accent to-amber-600 hover:from-accent/90 hover:to-amber-600/90 text-foreground font-bold px-8 py-6 text-lg rounded-xl shadow-[0_4px_20px_hsl(38,70%,55%,0.4)] hover:shadow-[0_8px_32px_hsl(38,70%,55%,0.5)] transition-all hover:-translate-y-0.5 group"
            >
              Check Your Rate Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No impact to credit score – Soft inquiry only
            </p>
          </div>
          
          {/* Visual */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_48px_hsl(168,45%,35%,0.16)]">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/80 to-primary flex flex-col items-center justify-center text-white text-center p-10">
                <svg className="w-28 h-28 mb-5 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z"/>
                  <path d="M4.42 11.247A13.152 13.152 0 008 4.466M19.58 11.247A13.152 13.152 0 0016 4.466M12 22c-2.5 0-4.5-1.5-4.5-4 0-2 1.5-3 2.5-3.5h4c1 .5 2.5 1.5 2.5 3.5 0 2.5-2 4-4.5 4z"/>
                </svg>
                <p className="text-sm opacity-80">Your pet's health shouldn't wait for financing</p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-5 -left-8 bg-white p-4 px-5 rounded-xl shadow-[0_8px_32px_hsl(168,45%,35%,0.12)] flex items-center gap-3 animate-float">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <strong className="block text-foreground text-base">Funds Deposited</strong>
                <span className="text-muted-foreground">As fast as 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetHero;
