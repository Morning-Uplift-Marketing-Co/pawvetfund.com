import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface CareCreditComparisonProps {
  onOpenForm: () => void;
}

const comparisonData = [
  {
    feature: "Interest Type",
    pawVetFund: { value: "Simple, Fixed Interest", good: true },
    careCredit: { value: "Deferred Interest (Risky)", good: false },
  },
  {
    feature: "Credit Required",
    pawVetFund: { value: "Fair/Poor Considered (580+)", good: true },
    careCredit: { value: "Good/Excellent Typically Required", good: false },
  },
  {
    feature: "Where to Use",
    pawVetFund: { value: "Any Vet (Cash Deposit)", good: true },
    careCredit: { value: "Only Participating Providers", good: false },
  },
  {
    feature: "Approval Speed",
    pawVetFund: { value: "Decision in Minutes", good: true },
    careCredit: { value: "Varies by Provider", good: null },
  },
  {
    feature: "Hidden Fees Risk",
    pawVetFund: { value: "No Surprises", good: true },
    careCredit: { value: "Backdated Interest if Late", good: false },
  },
  {
    feature: "Funds Delivery",
    pawVetFund: { value: "Direct to Your Bank", good: true },
    careCredit: { value: "Credit Line Only", good: null },
  },
];

const CareCreditComparison = ({ onOpenForm }: CareCreditComparisonProps) => {
  const renderIndicator = (good: boolean | null) => {
    if (good === true) {
      return <CheckCircle className="w-5 h-5 text-trust" />;
    } else if (good === false) {
      return <XCircle className="w-5 h-5 text-destructive" />;
    }
    return <AlertTriangle className="w-5 h-5 text-warning" />;
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paw Vet Fund vs. CareCredit®
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See why thousands of pet owners choose Paw Vet Fund over medical credit cards.
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
                CareCredit®
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
                    {renderIndicator(row.careCredit.good)}
                    <span className="text-sm lg:text-base text-muted-foreground">{row.careCredit.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 animate-fade-up animation-delay-200">
            <p className="text-lg text-muted-foreground mb-6">
              Get cash in hand so you can <strong className="text-foreground">negotiate with any vet</strong> and 
              use funds for any pet-related expense.
            </p>
            <Button variant="hero" size="xl" onClick={onOpenForm}>
              Check Your Rate Now
              <CheckCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareCreditComparison;
