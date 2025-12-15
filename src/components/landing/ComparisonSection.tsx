import { Check, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    feature: "Use at ANY vet clinic",
    pawVetFund: true,
    careCredit: false,
    scratchpay: false,
  },
  {
    feature: "Cash in hand (negotiate discounts)",
    pawVetFund: true,
    careCredit: false,
    scratchpay: false,
  },
  {
    feature: "All credit types accepted",
    pawVetFund: true,
    careCredit: false,
    scratchpay: "Limited",
  },
  {
    feature: "Fixed monthly payments",
    pawVetFund: true,
    careCredit: "Partial",
    scratchpay: true,
  },
  {
    feature: "No deferred interest traps",
    pawVetFund: true,
    careCredit: false,
    scratchpay: true,
  },
  {
    feature: "No down payment required",
    pawVetFund: true,
    careCredit: true,
    scratchpay: "Often Required",
  },
  {
    feature: "Terms up to 72 months",
    pawVetFund: true,
    careCredit: false,
    scratchpay: false,
  },
  {
    feature: "Soft credit check (no score impact)",
    pawVetFund: true,
    careCredit: false,
    scratchpay: true,
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
            Unlike medical credit cards, our financing gives you cash in hand — 
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
                <div className="font-bold text-primary">Paw Vet Fund</div>
                <div className="text-xs text-muted-foreground">Cash Funding</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">CareCredit</div>
                <div className="text-xs text-muted-foreground">Medical Card</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">Scratchpay</div>
                <div className="text-xs text-muted-foreground">Vet Financing</div>
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
                  <div className="flex justify-center">{renderValue(row.pawVetFund)}</div>
                  <div className="flex justify-center">{renderValue(row.careCredit)}</div>
                  <div className="flex justify-center">{renderValue(row.scratchpay)}</div>
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
