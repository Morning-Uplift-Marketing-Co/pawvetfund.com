import { FileText, BarChart3, CreditCard, Clock, Shield } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Fill Out a Simple Form",
    description: "Answer a few basic questions about your loan needs. Our secure form takes less than 2 minutes to complete.",
    badge: "~2 minutes",
    badgeIcon: Clock,
  },
  {
    number: "2",
    icon: BarChart3,
    title: "Compare Your Options",
    description: "We connect you with multiple lenders who compete for your business. Review rates and terms with no obligation.",
    badge: "Soft pull only",
    badgeIcon: Shield,
  },
  {
    number: "3",
    icon: CreditCard,
    title: "Get Funded",
    description: "If approved, funds are deposited directly to your bank account. Use the cash at ANY vet clinic you choose.",
    badge: "As fast as 24 hours",
    badgeIcon: Clock,
  },
];

const EmergencyVetHowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Funds for Your Pet in 3 Easy Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            No complicated paperwork. No waiting rooms. Just a simple online process designed for pet emergencies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-1 bg-gradient-to-r from-primary to-accent rounded" />
          
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 rounded-2xl text-center shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all hover:-translate-y-2 relative group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-white font-serif text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                {step.number}
              </div>
              
              <div className="w-20 h-20 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-5 text-primary">
                <step.icon className="w-9 h-9" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              
              <span className="inline-flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full text-xs font-semibold text-primary">
                <step.badgeIcon className="w-3.5 h-3.5" />
                {step.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetHowItWorks;
