import { Shield, Users, Clock, Phone } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Bank-Level Security", sublabel: "256-bit SSL encryption" },
  { icon: Users, label: "500K+ Pet Owners", sublabel: "Have used our service" },
  { icon: Clock, label: "Fast Funding", sublabel: "As soon as next business day" },
  { icon: Phone, label: "US-Based Support", sublabel: "Real humans, real help" },
];

const EmergencyVetTrustBar = () => {
  return (
    <section className="bg-white py-8 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <strong className="block text-foreground">{item.label}</strong>
                <span className="text-muted-foreground">{item.sublabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetTrustBar;
