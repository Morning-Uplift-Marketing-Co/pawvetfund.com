import { AlertTriangle, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DeferredInterestTrap = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span>Consumer Warning</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Hidden Danger of Medical Credit Cards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding "deferred interest" could save you hundreds—or even thousands—of dollars.
            </p>
          </div>

          {/* Explanation Card */}
          <Card className="border-warning/30 bg-card shadow-card mb-8 animate-fade-up animation-delay-100">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-warning/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    What is "Deferred Interest"?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many medical credit cards, including CareCredit®, offer "0% APR promotional periods." 
                    But here's the catch: if you don't pay off the{" "}
                    <strong className="text-foreground">entire balance</strong> before the promo ends—even 
                    if you're just $1 short—<span className="text-destructive font-semibold">you'll owe 
                    all the interest that accrued from Day 1</span>, often at rates of 26.99% or higher.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-up animation-delay-200">
            {/* CareCredit Risk */}
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <h4 className="font-semibold text-lg">CareCredit® Risk</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mt-0.5 text-destructive shrink-0" />
                    <span>Miss the promo deadline? Interest backdated to purchase date</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4 mt-0.5 text-destructive shrink-0" />
                    <span>$3,000 vet bill could become $4,200+ if you miss one payment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 mt-0.5 text-destructive shrink-0" />
                    <span>Standard APRs can reach 26.99% or higher</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="border-trust/30 bg-trust/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-trust" />
                  <h4 className="font-semibold text-lg">Our Personal Loans</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mt-0.5 text-trust shrink-0" />
                    <span>Fixed interest from Day 1—you always know what you owe</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4 mt-0.5 text-trust shrink-0" />
                    <span>No surprise charges, no hidden fees, no backdated interest</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 mt-0.5 text-trust shrink-0" />
                    <span>APRs from 5.99% to 35.99% based on credit profile</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Quote */}
          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-foreground italic">
              "Our loans have fixed rates—no surprises."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeferredInterestTrap;
