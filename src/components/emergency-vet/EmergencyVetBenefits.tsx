import { DollarSign, Smile } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Cash Means Negotiating Power",
    description:
      "With cash in hand, you can negotiate directly with your vet for possible discounts, payment plans, or shop around for the best care at the best price.",
  },
  {
    icon: Smile,
    title: "Use for Any Pet Expense",
    description:
      "Not just surgery—use funds for medications, specialist visits, emergency care, ongoing treatments, or even pet food during tough times.",
  },
];

const EmergencyVetBenefits = () => {
  return (
    <section className="py-16 bg-[hsl(40,33%,93%)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white p-7 rounded-xl flex items-start gap-5 shadow-[var(--card-shadow)]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent/30 to-accent rounded-lg flex items-center justify-center text-foreground flex-shrink-0">
                <benefit.icon className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetBenefits;
