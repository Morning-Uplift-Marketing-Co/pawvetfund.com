import { Banknote, BadgePercent, Stethoscope, HandCoins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CashIsKing = () => {
  const benefits = [
    {
      icon: BadgePercent,
      title: "Negotiate Discounts",
      description: "Many vets offer 5-15% off for cash-paying customers. Your loan funds work like cash.",
    },
    {
      icon: Stethoscope,
      title: "Choose Any Specialist",
      description: "Emergency vet? Out-of-state specialist? No network means no limitations.",
    },
    {
      icon: HandCoins,
      title: "Pay Upfront, Save More",
      description: "Avoid payment plan fees that some clinics charge. Pay in full and keep more money.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Banknote className="w-4 h-4" />
              <span>Financial Freedom</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Cash is King at the Vet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't be limited by a network. With a cash loan, you are a{" "}
              <strong className="text-foreground">cash-paying customer</strong>. This gives you the 
              power to negotiate discounts and choose any specialist.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className={`border-primary/10 bg-card shadow-card hover:shadow-card-hover transition-shadow animate-fade-up animation-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Highlight Box */}
          <Card className="mt-10 border-accent/30 bg-accent/5 animate-fade-up animation-delay-400">
            <CardContent className="p-6 lg:p-8 text-center">
              <p className="text-lg font-medium text-foreground">
                💡 <strong>Pro Tip:</strong> When you call a vet, ask:{" "}
                <span className="text-primary">"Do you offer a cash discount?"</span> — 
                You might be surprised how often they say yes!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CashIsKing;
