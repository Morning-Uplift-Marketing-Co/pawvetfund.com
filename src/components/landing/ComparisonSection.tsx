import { Check, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    feature: "Use at ANY vet clinic",
    ourLoans: true,
    creditCard: true,
    careCredit: false,
  },
  {
    feature: "Cash in hand (negotiate discounts)",
    ourLoans: true,
    creditCard: false,
    careCredit: false,
  },
  {
    feature: "High approval odds for all credit types",
    ourLoans: true,
    creditCard: false,
    careCredit: false,
  },
  {
    feature: "Fixed monthly payments",
    ourLoans: true,
    creditCard: false,
    careCredit: "Partial",
  },
  {
    feature: "No deferred interest traps",
    ourLoans: true,
    creditCard: true,
    careCredit: false,
  },
  {
    feature: "Soft credit check (no score impact)",
    ourLoans: true,
    creditCard: false,
    careCredit: false,
  },
];

const ComparisonSection = () => {
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="w-6 h-6 rounded-full bg-trust/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-trust" />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
          <X className="w-4 h-4 text-destructive" />
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full bg-warning/20 flex items-center justify-center">
        <AlertCircle className="w-4 h-4 text-warning" />
      </div>
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/50" id="compare">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Cash Gives You <span className="text-primary">More Options</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Unlike store credit cards, a personal loan gives you cash in hand — 
            so you can negotiate with your vet, shop around, or cover medications too.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto animate-fade-up animation-delay-200">
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-primary/5 border-b border-border">
              <div className="font-medium text-muted-foreground">Feature</div>
              <div className="text-center">
                <div className="font-bold text-primary">Our Loans</div>
                <div className="text-xs text-muted-foreground">Personal Loan</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">Credit Cards</div>
                <div className="text-xs text-muted-foreground">High Interest</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">CareCredit</div>
                <div className="text-xs text-muted-foreground">Store Card</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-4 gap-4 p-6 items-center hover:bg-muted/50 transition-colors"
                >
                  <div className="text-sm md:text-base font-medium">{row.feature}</div>
                  <div className="flex justify-center">{renderValue(row.ourLoans)}</div>
                  <div className="flex justify-center">{renderValue(row.creditCard)}</div>
                  <div className="flex justify-center">{renderValue(row.careCredit)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button variant="hero" size="xl">
              Check Your Rate — Free & Fast
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Checking won't affect your credit score
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
