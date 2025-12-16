import { AlertTriangle, HelpCircle, Shield, DollarSign, XCircle } from "lucide-react";

const CareCreditAltTrap = () => {
  return (
    <section className="py-24 bg-[hsl(40,33%,96%)] relative">
      {/* Top connector line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[hsl(220,60%,15%)] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Warning
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[hsl(220,60%,15%)] mb-5">
            The Hidden Danger of Medical Credit Cards
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Before applying for another medical credit card, understand the risks that could cost you hundreds—or even thousands—more than you expected.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Visual Example */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_hsl(220,60%,15%,0.1)] border-2 border-border relative">
            <span className="absolute -top-5 left-8 text-4xl bg-white px-3">⚠️</span>
            
            <h3 className="text-red-500 font-semibold text-lg mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Real-World Deferred Interest Trap
            </h3>
            
            <div className="bg-[hsl(40,33%,96%)] rounded-xl p-6 mb-5 space-y-3 text-sm">
              <p><strong className="text-[hsl(220,60%,15%)]">The Setup:</strong> You charge $3,000 for your pet's surgery on a medical credit card with "0% for 12 months" promotion.</p>
              <p><strong className="text-[hsl(220,60%,15%)]">Month 11:</strong> You've paid off $2,850. Only $150 left!</p>
              <p><strong className="text-[hsl(220,60%,15%)]">Month 12:</strong> Life happens. You miss the deadline by just 3 days.</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-5">
              <div className="text-red-500 font-bold text-sm mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                What You Now Owe:
              </div>
              <p className="text-2xl font-extrabold text-red-500">$150 + $780 retroactive interest = $930</p>
            </div>
          </div>
          
          {/* Explanation Points */}
          <div className="space-y-6">
            {[
              {
                icon: HelpCircle,
                title: "What is \"Deferred Interest\"?",
                description: "Unlike 0% APR, deferred interest accumulates silently from day one. If you don't pay the FULL balance before the promo ends, you owe ALL the interest—backdated to your first purchase.",
              },
              {
                icon: Shield,
                title: "How Personal Loans Are Different",
                description: "Our lenders offer simple, fixed interest. Your rate is locked in from day one. No surprises. No retroactive charges. You know exactly what you'll pay—every single month.",
              },
              {
                icon: DollarSign,
                title: "Cash = Freedom & Negotiating Power",
                description: "With funds deposited directly to your bank, you can negotiate cash discounts with your vet, choose any clinic (not just \"participating providers\"), and use it for any pet expense.",
              },
            ].map((point) => (
              <div key={point.title} className="flex gap-5 bg-white p-7 rounded-2xl shadow-sm border-l-4 border-[hsl(20,85%,55%)]">
                <div className="w-13 h-13 bg-[hsl(20,85%,55%,0.15)] rounded-xl flex items-center justify-center text-[hsl(20,85%,55%)] flex-shrink-0">
                  <point.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[hsl(220,60%,15%)] mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareCreditAltTrap;
