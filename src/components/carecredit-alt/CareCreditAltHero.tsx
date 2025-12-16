import { ArrowRight, CheckCircle, Shield, AlertTriangle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CareCreditAltHeroProps {
  onOpenForm: () => void;
}

const CareCreditAltHero = ({ onOpenForm }: CareCreditAltHeroProps) => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-[hsl(220,60%,15%)]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,hsl(20,85%,55%,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,hsl(220,50%,25%,0.5)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 border-2 border-[hsl(20,85%,55%,0.1)] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-300 px-4 py-2.5 rounded-full text-sm font-semibold mb-7">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              Denied by CareCredit?
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] mb-6">
              Get a <span className="text-[hsl(20,85%,55%)] relative inline-block">Personal Loan<span className="absolute bottom-1.5 left-0 w-full h-1.5 bg-[hsl(20,85%,55%)] opacity-30 rounded" /></span> for Vet Bills Instead
            </h1>
            
            <p className="text-lg md:text-xl text-white/75 mb-9 max-w-lg leading-relaxed">
              No deferred interest traps. No limited network. Just cash deposited to your bank to use at <strong className="text-white">ANY</strong> vet you choose.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: CheckCircle, text: "Fair/poor credit considered" },
                { icon: Shield, text: "Fixed interest rates" },
                { icon: DollarSign, text: "Cash deposited to your bank" },
              ].map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-white/90 text-sm">
                  <benefit.icon className="w-4 h-4 text-green-400" />
                  {benefit.text}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <Button
                onClick={onOpenForm}
                size="lg"
                className="bg-gradient-to-r from-[hsl(20,85%,55%)] to-[hsl(20,85%,45%)] hover:from-[hsl(20,85%,60%)] hover:to-[hsl(20,85%,50%)] text-white font-bold px-10 py-6 text-lg rounded-xl shadow-[0_8px_32px_hsl(20,85%,55%,0.35)] hover:shadow-[0_12px_40px_hsl(20,85%,55%,0.45)] transition-all hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Check Your Eligibility
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              
              <p className="flex items-center gap-2 text-sm text-white/60">
                <Shield className="w-4 h-4 text-green-400" />
                No impact to credit score – Soft inquiry only
              </p>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="bg-white rounded-3xl p-9 shadow-[0_16px_64px_hsl(220,60%,15%,0.2)] relative">
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-5 py-3 rounded-full font-bold text-sm shadow-[0_4px_16px_hsl(142,55%,45%,0.4)] flex items-center gap-2 animate-float">
                <CheckCircle className="w-4 h-4" />
                High Approval Odds
              </div>
              
              <div className="flex items-center gap-4 mb-7 pb-6 border-b border-border">
                <div className="w-14 h-14 bg-[hsl(20,85%,55%,0.15)] rounded-xl flex items-center justify-center text-[hsl(20,85%,55%)]">
                  <DollarSign className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[hsl(220,60%,15%)]">Personal Loan Options</h3>
                  <p className="text-sm text-muted-foreground">Multiple lenders compete for you</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "$500", label: "Minimum Loan", highlight: false },
                  { value: "$10K", label: "Maximum Loan", highlight: true },
                  { value: "24hr", label: "Fast Funding", highlight: false },
                  { value: "ANY", label: "Vet Accepted", highlight: true },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-5 bg-[hsl(40,33%,96%)] rounded-xl">
                    <div className={`font-serif text-3xl font-extrabold mb-1 ${stat.highlight ? "text-[hsl(20,85%,55%)]" : "text-[hsl(220,60%,15%)]"}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareCreditAltHero;
