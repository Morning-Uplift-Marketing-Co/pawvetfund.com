import { BarChart3, CheckCircle, AlertCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CareCreditAltTableProps {
  onOpenForm: () => void;
}

const comparisonData = [
  {
    feature: "Interest Type",
    pawVet: { value: "Simple, Fixed Interest", badge: "Predictable", good: true },
    careCredit: { value: "Deferred Interest", badge: "Risky", good: false },
  },
  {
    feature: "Credit Required",
    pawVet: { value: "Fair/Poor Considered", badge: "Inclusive", good: true },
    careCredit: { value: "Good/Excellent Required", badge: "Restrictive", good: false },
  },
  {
    feature: "Where to Use",
    pawVet: { value: "ANY Vet Clinic", badge: "Flexible", good: true },
    careCredit: { value: "Participating Providers Only", badge: "Limited", good: false },
  },
  {
    feature: "How You Receive Funds",
    pawVet: { value: "Cash to Your Bank", badge: "Freedom", good: true },
    careCredit: { value: "Direct to Provider", badge: "Restricted", good: false },
  },
  {
    feature: "Surprise Charges",
    pawVet: { value: "None – Fixed Payments", badge: "Transparent", good: true },
    careCredit: { value: "Possible Retroactive Interest", badge: "Watch Out", good: false },
  },
];

const CareCreditAltTable = ({ onOpenForm }: CareCreditAltTableProps) => {
  return (
    <section className="py-24 bg-[hsl(220,60%,15%)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,hsl(20,85%,55%,0.1)_0%,transparent_40%),radial-gradient(ellipse_at_90%_10%,hsl(220,50%,25%,0.8)_0%,transparent_40%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[hsl(20,85%,55%)] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            Side-by-Side Comparison
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Paw Vet Fund vs. CareCredit®
          </h2>
          <p className="text-lg text-white/70">See the key differences before you decide</p>
        </div>
        
        {/* Comparison Table */}
        <div className="rounded-3xl overflow-hidden shadow-[0_16px_64px_hsl(220,60%,15%,0.2)]">
          {/* Headers */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-0.5 bg-white/10">
            <div className="bg-[hsl(220,60%,10%)] p-7 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">Feature</h3>
            </div>
            <div className="bg-[hsl(20,85%,55%)] p-7 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Paw Vet Fund</h3>
              </div>
              <p className="text-white/80 text-sm">Personal Loan Alternative</p>
              <span className="inline-block bg-white text-[hsl(20,85%,55%)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mt-2">
                Recommended
              </span>
            </div>
            <div className="bg-[hsl(220,50%,25%)] p-7 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">CareCredit®</h3>
              </div>
              <p className="text-white/70 text-sm">Medical Credit Card</p>
            </div>
          </div>
          
          {/* Rows */}
          {comparisonData.map((row) => (
            <div key={row.feature} className="grid grid-cols-[1.5fr_1fr_1fr] gap-0.5 bg-white/10">
              <div className="bg-[hsl(40,33%,96%)] p-6 flex items-center gap-3 font-semibold text-[hsl(220,60%,15%)]">
                {row.feature}
              </div>
              <div className="bg-[hsl(20,85%,55%,0.15)] p-6 flex flex-col items-center justify-center text-center gap-2">
                <span className="font-bold text-[hsl(20,85%,45%)]">{row.pawVet.value}</span>
                <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  {row.pawVet.badge}
                </span>
              </div>
              <div className="bg-[hsl(0,0%,98%)] p-6 flex flex-col items-center justify-center text-center gap-2">
                <span className="font-bold text-muted-foreground">{row.careCredit.value}</span>
                <span className="inline-flex items-center gap-1 bg-red-500/10 text-red-500 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                  <AlertCircle className="w-3 h-3" />
                  {row.careCredit.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={onOpenForm}
            size="lg"
            className="bg-gradient-to-r from-[hsl(20,85%,55%)] to-[hsl(20,85%,45%)] hover:from-[hsl(20,85%,60%)] hover:to-[hsl(20,85%,50%)] text-white font-bold px-10 py-6 text-lg rounded-xl shadow-[0_8px_32px_hsl(20,85%,55%,0.35)] hover:shadow-[0_12px_40px_hsl(20,85%,55%,0.45)] transition-all hover:-translate-y-1 group"
          >
            Check Your Eligibility Now
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareCreditAltTable;
