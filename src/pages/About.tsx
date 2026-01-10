import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Heart, Eye, Users, Shield, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LoanFormDialog from "@/components/loan-form/LoanFormDialog";

const whyDifferent = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We understand that you are stressed. Our process is designed to be frictionless and supportive.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden agendas. We are clear about how our financing works and how we get paid (by the lenders, not by you).",
  },
  {
    icon: Users,
    title: "Independence",
    description: "We are not owned by a bank or a veterinary conglomerate. We work for you.",
  },
];

const About = () => {
  const [formOpen, setFormOpen] = useState(false);
  const handleOpenForm = () => setFormOpen(true);

  return (
    <>
      <Helmet>
        <title>About Us | Paw Vet Fund - Our Mission to Help Pets</title>
        <meta
          name="description"
          content="Learn about Paw Vet Fund's mission to bridge the gap between pet emergencies and financial reality. We provide fast, transparent pet financing."
        />
        <link rel="canonical" href="https://pawvetfund.com/about" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header onOpenForm={handleOpenForm} />
        
        <main className="flex-1">
          {/* Hero / Mission Section */}
          <section className="py-20 lg:py-28 hero-gradient">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                  We Believe No Pet Should Be{" "}
                  <span className="text-primary">Denied Care</span> Due to Cost
                </h1>
              </div>

              <div className="max-w-2xl mx-auto mt-8 animate-fade-up animation-delay-100">
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  At <strong className="text-foreground">Paw Vet Fund</strong>, we know the panic of a 
                  midnight emergency vet visit. We know the sinking feeling when you hear the cost of 
                  surgery. We are pet owners, animal lovers, and advocates for affordable veterinary care.
                </p>
                <p className="text-lg text-muted-foreground text-center leading-relaxed mt-6">
                  Our mission is simple: <strong className="text-foreground">To bridge the gap between 
                  pet emergencies and financial reality.</strong> We provide a fast, transparent, and 
                  dignified way for pet owners to access the funds they need when it matters most.
                </p>
              </div>
            </div>
          </section>

          {/* Why We Are Different */}
          <section className="py-20 lg:py-28 bg-muted/50">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why We Are Different
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {whyDifferent.map((item, index) => (
                  <Card 
                    key={index} 
                    className="text-center animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Important Disclosure */}
          <section className="py-16 lg:py-20 bg-background">
            <div className="container">
              <div className="max-w-2xl mx-auto animate-fade-up">
                <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Important Disclosure</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Paw Vet Fund is a marketing lead generator and is a referral service. 
                    We are <strong className="text-foreground">not a lender</strong> and do not make credit decisions.
                  </p>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Our Address</p>
                        <p className="text-sm text-muted-foreground">
                          1234 Pet Lover Lane, Suite 100<br />
                          Austin, TX 78701
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Contact Us</p>
                        <p className="text-sm text-muted-foreground">
                          support@pawvetfund.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Block */}
          <section className="py-20 lg:py-28 bg-primary/5">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Let's get your furry friend back on their feet.
                </h2>
                <Button variant="hero" size="xl" onClick={handleOpenForm}>
                  Check My Rate
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No impact on your credit score
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <LoanFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default About;
