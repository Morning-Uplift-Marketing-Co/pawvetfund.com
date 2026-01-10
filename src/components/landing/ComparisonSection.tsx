import { Check, X, AlertCircle, Banknote, MapPin, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ComparisonSectionProps {
  onOpenForm?: () => void;
}

const comparisonData = [
  {
    feature: "Where to Use",
    pawVetFund: { value: "ANY Veterinarian (100% Freedom)", good: true },
    medicalCards: { value: "Participating Network Only", good: false },
    creditCards: { value: "Anywhere", good: true },
  },
  {
    feature: "Interest Rates",
    pawVetFund: { value: "Fixed Rates (Simple Interest)", good: true },
    medicalCards: { value: "Deferred Interest (High Risk*)", good: false },
    creditCards: { value: "Variable (High APR)", good: "warn" },
  },
  {
    feature: "Credit Impact",
    pawVetFund: { value: "Soft Pull to Check Rate", good: true },
    medicalCards: { value: "Hard Pull to Apply", good: false },
    creditCards: { value: "Hard Pull to Apply", good: false },
  },
  {
    feature: "Approval Odds",
    pawVetFund: { value: "High (Fair/Bad Credit OK)", good: true },
    medicalCards: { value: "Strict (Good Credit Required)", good: false },
    creditCards: { value: "Varies", good: "warn" },
  },
  {
    feature: "Cash Discounts",
    pawVetFund: { value: "Yes (You pay cash)", good: true },
    medicalCards: { value: "No", good: false },
    creditCards: { value: "No", good: false },
  },
];

const deepDivePoints = [
  {
    icon: Banknote,
    title: "Negotiate Better Prices",
    description: "Veterinarians often pay high fees to process medical credit cards (up to 5-10%). When you pay with cash (from your loan), you can often ask for a \"Cash Discount\" or better terms.",
  },
  {
    icon: MapPin,
    title: "No \"In-Network\" Hassle",
    description: "Emergency vets and specialists often don't accept specific financing plans. With a cash loan, the money is in your bank account. You swipe your own debit card, and the vet gets paid instantly. No questions asked.",
  },
  {
    icon: Calendar,
    title: "Predictable Monthly Payments",
    description: "Credit card minimum payments can fluctuate. Our financing comes with a fixed monthly payment and a fixed end date, so you know exactly when you'll be debt-free.",
  },
];

const ComparisonSection = ({ onOpenForm }: ComparisonSectionProps) => {
  const renderValue = (value: boolean | string | "warn") => {
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
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Don't Get Locked Into a Network.{" "}
            <span className="text-primary">Choose Freedom.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Medical credit cards restrict where you can go. Cash funding gives you 
            the power to use your funds anywhere.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto animate-fade-up animation-delay-200 mb-16">
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-2 p-4 lg:p-6 bg-primary/5 border-b border-border">
              <div className="font-medium text-muted-foreground text-sm lg:text-base">Feature</div>
              <div className="text-center">
                <div className="font-bold text-primary text-sm lg:text-base">Paw Vet Fund</div>
                <div className="text-xs text-muted-foreground hidden sm:block">Cash Funding</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground text-sm lg:text-base">Medical Cards</div>
                <div className="text-xs text-muted-foreground hidden sm:block">CareCredit/Scratchpay</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground text-sm lg:text-base">Credit Cards</div>
                <div className="text-xs text-muted-foreground hidden sm:block">Visa/Amex</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {comparisonData.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-4 gap-2 p-4 lg:p-6 items-center hover:bg-muted/50 transition-colors"
                >
                  <div className="text-xs sm:text-sm lg:text-base font-medium">{row.feature}</div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    {renderValue(row.pawVetFund.good)}
                    <span className="text-xs lg:text-sm text-foreground hidden sm:block">{row.pawVetFund.value}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    {renderValue(row.medicalCards.good)}
                    <span className="text-xs lg:text-sm text-muted-foreground hidden sm:block">{row.medicalCards.value}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    {renderValue(row.creditCards.good)}
                    <span className="text-xs lg:text-sm text-muted-foreground hidden sm:block">{row.creditCards.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deferred Interest Note */}
          <div className="mt-6 p-4 rounded-xl bg-warning/5 border border-warning/20 flex items-start gap-3">
            <Info className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">*Note on Deferred Interest:</strong> Many medical cards offer 
              "0% interest if paid in full," but if you miss a payment or don't pay off the balance in time, 
              interest is charged retroactively from Day 1. Our financing has fixed rates, so you never get hit 
              with surprise back-interest.
            </p>
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="max-w-4xl mx-auto animate-fade-up animation-delay-300">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why "Cash is King" at the Vet
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {deepDivePoints.map((point, index) => (
              <Card key={index} className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up animation-delay-400">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Stop Stressing. Start Saving Your Pet.
          </h3>
          <Button variant="hero" size="xl" onClick={onOpenForm}>
            Check Rates — No Credit Impact
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Soft credit check won't affect your score
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
