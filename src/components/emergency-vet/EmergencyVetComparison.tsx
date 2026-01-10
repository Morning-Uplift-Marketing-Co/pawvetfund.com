import { Check, X, CreditCard, DollarSign, Bookmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyVetComparisonProps {
  onOpenForm: () => void;
}

const comparisonOptions = [
  {
    title: "High-Interest Credit Cards",
    icon: CreditCard,
    featured: false,
    items: [
      { good: false, text: "APRs often 20-29%+" },
      { good: false, text: "Variable rates can spike" },
      { good: false, text: "Minimum payments = long debt" },
      { good: true, text: "Quick access if available" },
    ],
  },
  {
    title: "Personal Loans via Paw Vet Fund",
    icon: DollarSign,
    featured: true,
    badge: "Recommended",
    items: [
      { good: true, text: "APRs from 5.99% to 35.99%" },
      { good: true, text: "Fixed rates = predictable payments" },
      { good: true, text: "Cash in hand – negotiate with ANY vet" },
      { good: true, text: "All credit types considered" },
    ],
  },
  {
    title: "Vet-Specific Credit (e.g., CareCredit)",
    icon: Bookmark,
    featured: false,
    items: [
      { good: false, text: "Only accepted at participating vets" },
      { good: false, text: "Deferred interest traps" },
      { good: false, text: "Stricter approval requirements" },
      { good: true, text: "0% promo periods available" },
    ],
  },
];

const EmergencyVetComparison = ({ onOpenForm }: EmergencyVetComparisonProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Compare Options
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose a Personal Loan for Pet Care?
          </h2>
          <p className="text-lg text-muted-foreground">
            See how personal loans stack up against other financing options for your pet's medical needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {comparisonOptions.map((option) => (
            <div
              key={option.title}
              className={`rounded-2xl p-7 relative border-2 transition-all ${
                option.featured
                  ? "bg-gradient-to-br from-primary to-primary/90 text-white scale-[1.02] shadow-[0_12px_48px_hsl(168,45%,35%,0.16)] border-transparent"
                  : "bg-secondary border-transparent hover:border-border"
              }`}
            >
              {option.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {option.badge}
                </span>
              )}
              
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  option.featured ? "bg-white/15 text-white" : "bg-white text-muted-foreground"
                }`}
              >
                <option.icon className="w-7 h-7" />
              </div>
              
              <h3
                className={`font-serif text-xl font-semibold mb-5 ${
                  option.featured ? "text-white" : "text-foreground"
                }`}
              >
                {option.title}
              </h3>
              
              <ul className="space-y-0">
                {option.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 py-2.5 border-b last:border-0 ${
                      option.featured
                        ? "border-white/10 text-white"
                        : "border-black/5 text-foreground"
                    }`}
                  >
                    {item.good ? (
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          option.featured ? "text-accent" : "text-green-500"
                        }`}
                      />
                    ) : (
                      <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                    )}
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              {option.featured && (
                <div className="mt-7">
                  <Button
                    onClick={onOpenForm}
                    className="w-full bg-gradient-to-r from-accent to-amber-600 hover:from-accent/90 hover:to-amber-600/90 text-foreground font-bold py-5 rounded-xl group"
                  >
                    Check Your Rate Now
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetComparison;
