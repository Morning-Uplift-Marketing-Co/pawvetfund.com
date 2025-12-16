import { Star, CheckCircle } from "lucide-react";

const CareCreditAltTestimonial = () => {
  return (
    <section className="py-24 bg-[hsl(40,33%,96%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_8px_40px_hsl(220,60%,15%,0.1)] relative">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 font-serif text-8xl text-[hsl(20,85%,55%,0.1)] leading-none">
              "
            </div>
            
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[hsl(20,85%,55%)] text-[hsl(20,85%,55%)]" />
              ))}
            </div>
            
            <blockquote className="font-serif text-xl md:text-2xl text-[hsl(220,60%,15%)] leading-relaxed text-center mb-8 relative z-10">
              "After getting denied by CareCredit, I was desperate. Paw Vet Fund connected me with a lender who approved me within hours. The fixed rate means I know exactly what I'm paying each month—no surprises. My cat got the surgery she needed and I didn't have to stress about hidden interest charges."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[hsl(20,85%,55%)] to-[hsl(20,85%,45%)] rounded-full flex items-center justify-center text-white font-serif text-xl font-semibold">
                MK
              </div>
              <div className="text-left">
                <div className="font-semibold text-[hsl(220,60%,15%)]">Michelle K. — Phoenix, AZ</div>
                <div className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mt-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareCreditAltTestimonial;
