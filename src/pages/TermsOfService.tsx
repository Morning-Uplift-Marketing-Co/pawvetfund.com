import { Helmet } from "react-helmet-async";
import { FileText } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useState } from "react";
import LoanFormDialog from "@/components/loan-form/LoanFormDialog";

const TermsOfService = () => {
  const [formOpen, setFormOpen] = useState(false);
  const handleOpenForm = () => setFormOpen(true);

  return (
    <>
      <Helmet>
        <title>Terms of Service | Paw Vet Fund</title>
        <meta
          name="description"
          content="Read Paw Vet Fund's Terms of Service to understand the terms and conditions of using our pet financing services."
        />
        <link rel="canonical" href="https://pawvetfund.com/terms-of-service" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header onOpenForm={handleOpenForm} />
        
        <main className="flex-1 py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
                  <p className="text-muted-foreground">Last Updated: December 15, 2024</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using the Paw Vet Fund website ("Service"), you agree to be bound by 
                    these Terms of Service. If you do not agree to these terms, please do not use our Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">2. Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Paw Vet Fund is a lead generation service that connects consumers with potential lending 
                    partners. <strong className="text-foreground">We are NOT a lender</strong> and do not make 
                    credit decisions, approve loans, or set loan terms. Any loan offer you receive will come 
                    directly from a third-party lender in our network.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">3. Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To use our Service, you must be at least 18 years old, a legal resident of the United States, 
                    and have a valid bank account. By submitting your information, you represent that all 
                    information provided is accurate and complete.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">4. No Guarantee of Loan Approval</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Submitting your information through our Service does not guarantee that you will receive 
                    a loan offer. Loan approval, interest rates, and terms are determined solely by the 
                    lending partners and depend on your creditworthiness and other factors.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">5. Consent to Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By submitting your information, you expressly consent to be contacted by Paw Vet Fund 
                    and/or our lending partners via telephone (including autodialed and prerecorded calls), 
                    SMS/text messages, and email at any number or address you provide, even if your number 
                    is on a Do Not Call list.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">6. APR and Loan Terms Disclosure</h2>
                  <div className="p-4 rounded-xl bg-warning/5 border border-warning/20 mb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">APR Range:</strong> Annual Percentage Rates (APR) 
                      offered by our lending partners range from <strong>5.99% to 35.99%</strong>. Your actual 
                      rate will depend on your credit profile, loan amount, and the lender's assessment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      <strong className="text-foreground">Repayment Terms:</strong> Loan terms range from 
                      <strong> 61 days to 72 months</strong>.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">7. Credit Impact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Checking your rate on our website uses a "soft" credit inquiry, which does 
                    <strong className="text-foreground"> NOT affect your credit score</strong>. However, if 
                    you accept a loan offer and proceed with a lender, they may perform a "hard" credit 
                    inquiry, which may impact your credit score.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">8. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Service may contain links to third-party websites or services. We are not responsible 
                    for the content, privacy policies, or practices of any third-party sites.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">9. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Service is provided "as is" and "as available" without warranties of any kind, 
                    either express or implied. We do not warrant that the Service will be uninterrupted, 
                    secure, or error-free.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">10. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the fullest extent permitted by law, Paw Vet Fund shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages arising out of 
                    your use of the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the 
                    State of Texas, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">12. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective 
                    immediately upon posting. Your continued use of the Service after changes constitutes 
                    acceptance of the modified Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">13. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border">
                    <p className="text-foreground font-medium">Paw Vet Fund</p>
                    <p className="text-muted-foreground">1234 Pet Lover Lane, Suite 100</p>
                    <p className="text-muted-foreground">Austin, TX 78701</p>
                    <p className="text-muted-foreground">Email: legal@pawvetfund.com</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <LoanFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default TermsOfService;
