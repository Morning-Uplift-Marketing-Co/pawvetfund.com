import { Star, Quote, CheckCircle } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Real Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              When Every Minute <span className="text-accent">Matters</span>
            </h2>
          </div>

          {/* Main Testimonial */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card animate-fade-up animation-delay-200">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-glow">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed mb-8">
              "Our dog Max needed emergency surgery on a Saturday night. I was{" "}
              <span className="text-primary font-semibold">denied by CareCredit</span>{" "}
              and my credit card was maxed out. I found this service at 2am, filled out the form, 
              and had <span className="text-accent font-semibold">$4,500 in my account by Monday morning</span>. 
              Max is healthy and running around again. This service literally saved his life."
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                SM
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-foreground">Sarah M.</p>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-trust/10 text-trust text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified Customer
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Austin, TX — Dog Owner</p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-up animation-delay-300">
            <div className="text-center p-6 rounded-xl bg-card shadow-card">
              <p className="text-3xl md:text-4xl font-bold text-primary">4.8/5</p>
              <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card shadow-card">
              <p className="text-3xl md:text-4xl font-bold text-accent">97%</p>
              <p className="text-sm text-muted-foreground mt-1">Would Recommend</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card shadow-card">
              <p className="text-3xl md:text-4xl font-bold text-trust">1M+</p>
              <p className="text-sm text-muted-foreground mt-1">Pets Helped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
