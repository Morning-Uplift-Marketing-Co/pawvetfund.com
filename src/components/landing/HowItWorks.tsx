import { FileText, GitCompare, Banknote, Shield, Lock, Clock, Check, Stethoscope, Heart, Pill, Apple, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface HowItWorksProps {
  onOpenForm?: () => void;
}

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Check Your Rate (2 Minutes)",
    description: "Fill out our secure online form. Tell us how much you need.",
    amount: "$500 to $50,000",
    benefits: [
      { icon: Shield, text: 'We use a "Soft Credit Pull" which means checking your options will NOT affect your credit score.' },
      { icon: Lock, text: "Your data is protected by 256-bit SSL encryption." },
    ],
  },
  {
    icon: GitCompare,
    number: "02",
    title: "Compare Loan Offers",
    description: "Our technology instantly matches you with our network of trusted lenders. You will see multiple offers with clear terms:",
    benefits: [
      { icon: Check, text: "Interest Rate (APR): See exactly what you'll pay." },
      { icon: Check, text: "Monthly Payment: Choose a term that fits your budget (12 to 60 months)." },
      { icon: Check, text: "Freedom: Pick the lender that works best for you." },
    ],
  },
  {
    icon: Banknote,
    number: "03",
    title: "Get Funded & Pay Your Vet",
    description: "Once you sign the loan agreement electronically, funds are deposited directly into your bank account—often as soon as 24 hours.",
    benefits: [
      { icon: Check, text: "Pay Cash: Use the funds to pay your veterinarian immediately." },
      { icon: Check, text: "Any Clinic: Pay ANY clinic, specialist, or emergency hospital in the US." },
    ],
  },
];

const commonUses = [
  { icon: Stethoscope, text: "Emergency Surgery (Bloat, ACL, Blockages)" },
  { icon: Heart, text: "Cancer Treatments & Chemotherapy" },
  { icon: Scissors, text: "Dental Procedures" },
  { icon: Pill, text: "Medication & Refills" },
  { icon: Apple, text: "Pet Food & Supplies" },
  { icon: Clock, text: "Routine Checkups & Vaccinations" },
];

const HowItWorks = ({ onOpenForm }: HowItWorksProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background" id="how-it-works">
      <div className="container">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Get the Funds You Need in{" "}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            No paperwork mountains. No waiting weeks. Just a simple, secure process 
            to get your pet the care they deserve.
          </p>
          <Button variant="hero" size="xl" onClick={onOpenForm}>
            Check My Rate Now
          </Button>
        </div>

        {/* Steps with Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden lg:block absolute left-[6rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number}>
                <Card
                  className="animate-fade-up overflow-hidden relative z-10 bg-card"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Step Number & Icon */}
                      <div className="lg:w-48 bg-primary/5 p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 lg:p-8">
                        <h3 className="text-xl lg:text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                          {step.amount && (
                            <span className="font-semibold text-foreground"> (from {step.amount})</span>
                          )}
                        </p>

                        {/* Benefits */}
                        <ul className="space-y-3">
                          {step.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-trust/10 flex items-center justify-center shrink-0 mt-0.5">
                                <benefit.icon className="w-3.5 h-3.5 text-trust" />
                              </div>
                              <span className="text-sm text-muted-foreground">{benefit.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connector between cards (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-start pl-[5.25rem] h-8">
                    <div className="w-3 h-3 rounded-full bg-primary/40 ring-4 ring-primary/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Common Uses Section */}
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              What Can I Use the Funds For?
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonUses.map((use, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-trust/10 flex items-center justify-center shrink-0">
                  <use.icon className="w-5 h-5 text-trust" />
                </div>
                <span className="font-medium text-sm">{use.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <div className="text-center mt-16 animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to help your pet?
          </h3>
          <Button variant="hero" size="xl" onClick={onOpenForm}>
            See My Loan Options
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            <Clock className="w-4 h-4 inline-block mr-1" />
            Takes less than 2 minutes • No impact on credit score
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
