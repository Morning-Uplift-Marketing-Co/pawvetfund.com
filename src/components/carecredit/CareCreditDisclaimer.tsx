import { Shield, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CareCreditDisclaimer = () => {
  return (
    <section className="py-12 border-t border-border bg-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trademark Disclaimer */}
          <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
            <AlertCircle className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Important Trademark Disclaimer
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Paw Vet Fund is an <strong>independent lead generation service</strong> and is{" "}
                <strong>NOT affiliated with, endorsed by, or connected to CareCredit® or Synchrony Bank</strong> in 
                any way. CareCredit® is a registered trademark of Synchrony Bank. We provide financing 
                alternatives through our network of third-party lenders. The comparison information on this 
                page is for educational purposes only.
              </p>
            </div>
          </div>

          {/* APR Disclosure */}
          <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
            <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Material Disclosure — Loan Terms & APR
              </h4>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  This website is operated by Paw Vet Fund, a lead generation service. We are{" "}
                  <strong>not a lender</strong> and do not make credit decisions. By submitting your 
                  information, you may be connected with one or more lenders or lending partners in our network.
                </p>
                <p>
                  <strong>APR Range:</strong> Annual Percentage Rates (APR) range from{" "}
                  <strong>5.99% to 35.99%</strong>, depending on your credit profile, loan amount, 
                  and the lender's assessment.
                </p>
                <p>
                  <strong>Repayment Terms:</strong> Loan terms range from{" "}
                  <strong>61 days to 72 months</strong>. The specific term offered will depend on 
                  your credit profile and the lender's policies.
                </p>
                <p>
                  <strong>Representative Example:</strong> If you borrow $5,000 at an APR of 10.00% 
                  over a 36-month term, your estimated monthly payment would be $161.34, with a 
                  total repayment amount of $5,808.24. This is an example only; your actual rate 
                  and terms may differ.
                </p>
                <p>
                  <strong>Credit Impact:</strong> Checking your rate performs a "soft" credit inquiry, 
                  which does not affect your credit score. If you proceed with a loan offer, the 
                  lender may perform a "hard" credit inquiry, which may impact your credit score.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-border">|</span>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">California Disclosures</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">Do Not Sell My Information</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareCreditDisclaimer;
