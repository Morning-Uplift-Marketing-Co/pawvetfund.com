import { Link } from "react-router-dom";

const CareCreditAltDisclaimer = () => {
  return (
    <section className="py-12 bg-[hsl(40,33%,94%)] border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-xs text-muted-foreground leading-relaxed">
          <div className="p-5 bg-white/60 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-2 text-sm">Trademark Disclaimer</h4>
            <p>
              CareCredit® is a registered trademark of Synchrony Bank. Paw Vet Fund is not affiliated with, endorsed by, or connected to CareCredit® or Synchrony Bank. All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation or endorsement.
            </p>
          </div>
          
          <div className="p-5 bg-white/60 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-2 text-sm">APR Disclosure</h4>
            <p className="mb-2">
              Annual Percentage Rate (APR) ranges from <strong>5.99% to 35.99%</strong> and is determined by the lender based on your credit profile and other factors. Loan amounts range from $500 to $10,000. Repayment terms range from 12 to 72 months.
            </p>
            <p className="mb-2">
              <strong>Representative Example:</strong> A $5,000 loan with a 36-month term at 15.99% APR would have monthly payments of approximately $176 and a total repayment amount of approximately $6,330.
            </p>
            <p>
              Checking your rate uses a "soft" credit inquiry, which does not affect your credit score. If you proceed with a loan offer, the lender may perform a "hard" credit inquiry, which may impact your credit score.
            </p>
          </div>
          
          <div className="text-center pt-4">
            <Link to="/privacy-policy" className="text-primary hover:underline mx-3">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-primary hover:underline mx-3">Terms of Service</Link>
            <Link to="/california-privacy-rights" className="text-primary hover:underline mx-3">CA Privacy Rights</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareCreditAltDisclaimer;
