import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Will checking my rate hurt my credit score?",
    answer:
      "No. We use a soft credit pull to check your rate, which does NOT affect your credit score. Only when you accept a loan offer and finalize with a lender will a hard inquiry be made — and that's standard for any loan.",
  },
  {
    question: "How fast can I get the money?",
    answer:
      "Most applicants receive funds within 24 hours of accepting a loan offer. Some lenders can fund same-day if you apply early. The money is deposited directly into your bank account, so you can use it immediately at any vet clinic.",
  },
  {
    question: "Do you accept bad credit?",
    answer:
      "Yes! We work with multiple lenders who specialize in all credit types. While we can't guarantee approval (no one legally can), many of our partner lenders have high approval odds even for those with credit challenges. Checking your rate is free and won't hurt your score.",
  },
  {
    question: "Can I use the loan at any veterinarian?",
    answer:
      "Absolutely. Unlike store credit cards like CareCredit that only work at participating vets, our personal loans give you cash in your bank account. You can use it at ANY vet clinic, emergency hospital, or even for pet medications and supplies.",
  },
  {
    question: "What can I use the loan for?",
    answer:
      "You can use the funds for any pet-related expense: emergency surgery, routine vet visits, medications, specialized treatments, pet food, or even adoption fees. It's cash in your account, so you decide how to help your furry friend.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "Loan amounts typically range from $500 to $10,000, depending on your qualifications and the lender's terms. Our form takes 2 minutes to complete, and you'll see your personalized options immediately.",
  },
  {
    question: "What are the interest rates?",
    answer:
      "APRs range from 5.99% to 35.99%, depending on your creditworthiness and the lender. You'll see your exact rate before you commit to anything — no surprises. Checking your rate is completely free.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50" id="faq">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Got Questions? <span className="text-primary">We Have Answers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about getting financial help for your pet.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-up animation-delay-200">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-card data-[state=open]:shadow-card-hover transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HelpCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-semibold text-base md:text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12 pb-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
