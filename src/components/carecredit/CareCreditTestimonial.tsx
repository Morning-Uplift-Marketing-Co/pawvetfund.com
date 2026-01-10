import { Star, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CareCreditTestimonial = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="relative bg-card border-primary/20 shadow-card overflow-hidden animate-fade-up">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <CardContent className="relative p-8 lg:p-12">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-8">
                "I have a 640 credit score and was denied by CareCredit immediately. 
                Paw Vet Fund matched me with a lender in <span className="text-primary">5 minutes</span>. 
                My dog needed emergency surgery and I was able to pay the vet in full the next day. 
                <span className="text-trust"> So relieved.</span>"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">JT</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jason T.</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-trust" />
                    <span>Verified Customer • Texas</span>
                  </div>
                </div>
              </div>

              {/* Credit Score Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm">
                <span className="text-muted-foreground">Credit Score:</span>
                <span className="font-semibold text-foreground">640 (Fair)</span>
              </div>
            </CardContent>
          </Card>

          {/* Additional Context */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Real customer experience. Individual results may vary based on credit profile and lender criteria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareCreditTestimonial;
