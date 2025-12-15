import { FileText, GitCompare, Banknote, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Complete a Simple Form",
    description: "Takes just 2 minutes. Basic info only — no SSN required for initial check.",
    highlight: "2-Minute Application",
  },
  {
    icon: GitCompare,
    number: "02",
    title: "Compare Your Options",
    description: "Multiple lenders compete for your business. See rates from 5.99% to 35.99% APR.",
    highlight: "Multiple Lenders Compete",
  },
  {
    icon: Banknote,
    number: "03",
    title: "Get Funded Fast",
    description: "Cash deposited directly to your bank. Use it at ANY vet clinic you choose.",
    highlight: "Funds in 24 Hours",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-background" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Get the Help You Need in{" "}
            <span className="text-primary">3 Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No complicated paperwork. No hidden fees. Just fast, transparent funding 
            when your furry family member needs it most.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-border via-primary/30 to-border" />
              )}

              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 relative">
                {/* Step Number */}
                <span className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <ArrowRight className="w-3 h-3" />
                  {step.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
