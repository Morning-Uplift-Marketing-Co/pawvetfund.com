import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: `Our dog Max needed emergency surgery on a Saturday night. I was denied by CareCredit and my credit card was maxed out. I found this service at 2am, filled out the form, and had $4,500 in my account by Monday morning. Max is healthy and running around again. This service literally saved his life.`,
    highlight1: "denied by CareCredit",
    highlight2: "$4,500 in my account by Monday morning",
    name: "Sarah M.",
    initials: "SM",
    location: "Austin, TX",
    petType: "Dog Owner",
    rating: 5,
  },
  {
    quote: `My cat Luna needed an emergency procedure that cost $3,200. I have a 580 credit score and thought I had no options. Within 10 minutes of applying, I was matched with a lender. The funds hit my account the next day. Luna is recovering beautifully!`,
    highlight1: "580 credit score",
    highlight2: "funds hit my account the next day",
    name: "Marcus T.",
    initials: "MT",
    location: "Denver, CO",
    petType: "Cat Owner",
    rating: 5,
  },
  {
    quote: `When my senior golden retriever needed hip surgery, I was quoted $6,000. I'm a single mom and didn't know how I'd afford it. This service connected me with a lender offering reasonable monthly payments. My boy is walking pain-free now!`,
    highlight1: "single mom",
    highlight2: "reasonable monthly payments",
    name: "Jennifer K.",
    initials: "JK",
    location: "Portland, OR",
    petType: "Dog Owner",
    rating: 5,
  },
  {
    quote: `I was embarrassed about my credit situation after my divorce. Traditional financing turned me down everywhere. Paw Vet Fund didn't judge—they just helped. Got $2,800 for my pup's dental surgery within 24 hours.`,
    highlight1: "Traditional financing turned me down",
    highlight2: "$2,800 for my pup's dental surgery within 24 hours",
    name: "David R.",
    initials: "DR",
    location: "Chicago, IL",
    petType: "Dog Owner",
    rating: 5,
  },
  {
    quote: `My rabbit needed specialized care that my regular vet couldn't provide. The specialist required payment upfront—$1,500. I applied here on my lunch break and had approval within an hour. Best decision I ever made.`,
    highlight1: "payment upfront",
    highlight2: "approval within an hour",
    name: "Ashley P.",
    initials: "AP",
    location: "Miami, FL",
    petType: "Rabbit Owner",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Real Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              When Every Minute <span className="text-accent">Matters</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Thousands of pet owners have trusted us in their time of need. Here are their stories.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full animate-fade-up animation-delay-200"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-full">
                  <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6 pt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-lg md:text-xl lg:text-2xl font-serif leading-relaxed mb-8">
                      "{testimonial.quote.split(testimonial.highlight1)[0]}
                      <span className="text-primary font-semibold">{testimonial.highlight1}</span>
                      {testimonial.quote.split(testimonial.highlight1)[1]?.split(testimonial.highlight2)[0]}
                      <span className="text-accent font-semibold">{testimonial.highlight2}</span>
                      {testimonial.quote.split(testimonial.highlight2)[1]}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-foreground">{testimonial.name}</p>
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-trust/10 text-trust text-xs font-medium">
                            <CheckCircle className="w-3 h-3" />
                            Verified Customer
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location} — {testimonial.petType}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card hover:bg-primary hover:text-primary-foreground border-border" />
              <CarouselNext className="static translate-y-0 bg-card hover:bg-primary hover:text-primary-foreground border-border" />
            </div>
          </Carousel>

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
