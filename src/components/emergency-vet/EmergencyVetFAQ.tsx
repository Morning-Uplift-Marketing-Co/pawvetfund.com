import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Will checking my rate affect my credit score?",
    answer:
      "No! Our initial check uses a soft inquiry, which doesn't impact your credit score. Only if you choose to accept an offer and proceed with a full application will a hard inquiry occur.",
  },
  {
    question: "How fast can I get the funds?",
    answer:
      "Once approved, many lenders can deposit funds as soon as the next business day. In some cases, same-day funding may be available depending on your bank and lender.",
  },
  {
    question: "What credit score do I need?",
    answer:
      "We work with lenders who consider all credit types—fair, poor, and excellent. While better credit may qualify for lower rates, having imperfect credit doesn't automatically disqualify you.",
  },
  {
    question: "Can I use the loan at any veterinarian?",
    answer:
      "Absolutely! Unlike vet-specific credit cards, our personal loans deposit cash directly to your bank account. You can use it at any vet clinic, specialist, or animal hospital you choose.",
  },
];

const EmergencyVetFAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to the most common questions about pet financing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white p-7 rounded-xl shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyVetFAQ;
