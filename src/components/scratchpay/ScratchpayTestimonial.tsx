import { Star, Quote, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ScratchpayTestimonial = () => {
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
                "My emergency vet didn't take Scratchpay. I panicked at first, but then I found this site. 
                I got funds sent to my bank <span className="text-primary">overnight</span>. Paid the vet 
                in full the next morning. <span className="text-trust">Worked perfectly.</span>"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">SL</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sarah L.</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-trust" />
                    <span>Verified Customer • California</span>
                  </div>
                </div>
              </div>

              {/* Funding Speed Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Funded in:</span>
                <span className="font-semibold text-foreground">Under 24 Hours</span>
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

export default ScratchpayTestimonial;
