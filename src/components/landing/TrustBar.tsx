import { Shield, Users, Headphones, Award } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "256-bit SSL Security",
    description: "Bank-level encryption",
  },
  {
    icon: Users,
    label: "1M+ Users Helped",
    description: "Since 2019",
  },
  {
    icon: Headphones,
    label: "US-Based Support",
    description: "Mon-Fri 8am-8pm EST",
  },
  {
    icon: Award,
    label: "A+ BBB Rating",
    description: "Trusted nationwide",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-card border-y border-border py-6">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-3 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
