import { Lock, Users, Clock, Phone } from "lucide-react";

const trustItems = [
  { icon: Lock, text: "256-bit", subtext: "SSL Encryption" },
  { icon: Users, text: "500K+", subtext: "Pet Owners Helped" },
  { icon: Clock, text: "24 hours", subtext: "Funding as fast as" },
  { icon: Phone, text: "US-Based", subtext: "Support Team" },
];

const CareCreditAltTrustBar = () => {
  return (
    <section className="bg-[hsl(220,60%,10%)] py-6 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-white/70 text-sm">
              <item.icon className="w-5 h-5 text-[hsl(20,85%,55%)]" />
              <span>
                <strong className="text-white">{item.text}</strong> {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareCreditAltTrustBar;
