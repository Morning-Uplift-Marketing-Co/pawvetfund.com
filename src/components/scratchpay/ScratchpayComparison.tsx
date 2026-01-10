import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react";

interface ScratchpayComparisonProps {
  onOpenForm: () => void;
}

const comparisonData = [
  {
    feature: "Network Coverage",
    pawVetFund: { value: "100% of US Vets (Cash)", good: true },
    scratchpay: { value: "Only Partnered Clinics", good: false },
  },
  {
    feature: "Down Payment",
    pawVetFund: { value: "Often $0 Down", good: true },
    scratchpay: { value: "Down payment often required", good: false },
  },
  {
    feature: "Payment Terms",
    pawVetFund: { value: "Up to 72 Months", good: true },
    scratchpay: { value: "Limited term options", good: null },
  },
  {
    feature: "How You Get Funds",
    pawVetFund: { value: "Direct Bank Deposit", good: true },
    scratchpay: { value: "Paid to Provider Only", good: null },
  },
  {
    feature: "Use for Any Expense",
    pawVetFund: { value: "Yes — Meds, Food, Travel", good: true },
    scratchpay: { value: "Vet Bills Only", good: false },
  },
  {
    feature: "Credit Check Type",
    pawVetFund: { value: "Soft Pull (No Impact)", good: true },
    scratchpay: { value: "Soft Pull (No Impact)", good: true },
  },
];

const ScratchpayComparison = ({ onOpenForm }: ScratchpayComparisonProps) => {
  const renderIndicator = (good: boolean | null) => {
    if (good === true) {
      return <CheckCircle className="w-5 h-5 text-trust shrink-0" />;
    } else if (good === false) {
      return <XCircle className="w-5 h-5 text-destructive shrink-0" />;
    }
    return <AlertTriangle className="w-5 h-5 text-warning shrink-0" />;
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paw Vet Fund vs. Scratchpay
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Both are great options—but when your vet isn't in the network, we've got you covered.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl border border-border overflow-hidden shadow-card animate-fade-up animation-delay-100">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 lg:p-6 font-semibold text-muted-foreground">
                Feature
              </div>
              <div className="p-4 lg:p-6 font-semibold text-center bg-primary/5 border-x border-border">
                <span className="text-primary">Paw Vet Fund</span>
              </div>
              <div className="p-4 lg:p-6 font-semibold text-center text-muted-foreground">
                Scratchpay
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}
              >
                <div className="p-4 lg:p-6 font-medium text-foreground flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 lg:p-6 bg-primary/5 border-x border-border">
                  <div className="flex items-center gap-2 justify-center text-center">
                    {renderIndicator(row.pawVetFund.good)}
                    <span className="text-sm lg:text-base">{row.pawVetFund.value}</span>
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <div className="flex items-center gap-2 justify-center text-center">
                    {renderIndicator(row.scratchpay.good)}
                    <span className="text-sm lg:text-base text-muted-foreground">{row.scratchpay.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 animate-fade-up animation-delay-200">
            <p className="text-lg text-muted-foreground mb-6">
              Need funds for a vet that doesn't take Scratchpay? We can help.
            </p>
            <Button variant="hero" size="xl" onClick={onOpenForm}>
              See My Cash Loan Options
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScratchpayComparison;
