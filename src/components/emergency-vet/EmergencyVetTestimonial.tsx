import { Star, CheckCircle } from "lucide-react";

const EmergencyVetTestimonial = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
      {/* Large quote mark */}
      <div className="absolute top-5 left-[10%] font-serif text-[400px] leading-none opacity-5 pointer-events-none">
        "
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          
          <blockquote className="font-serif text-2xl md:text-3xl font-normal leading-relaxed mb-8 italic">
            "When my dog Max needed emergency surgery, I was devastated—emotionally and financially. Within 24 hours of applying, I had the funds in my account. Max is healthy today because I didn't have to wait or give up on him. Thank you for giving us more time together."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center font-serif text-2xl font-semibold">
              SL
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Sarah L. — Austin, TX</div>
              <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-xs mt-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified Customer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetTestimonial;
