import { PawPrint, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Paw Vet Fund</span>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-md mb-6">
              We connect pet owners with trusted lenders who can provide fast, 
              flexible financing for unexpected veterinary expenses. Your pet's 
              health shouldn't have to wait.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-foreground/10 w-fit">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-sm">256-bit SSL Secured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-primary-foreground transition-colors">
                  Compare Options
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Alternatives */}
          <div>
            <h4 className="font-semibold mb-4">Alternatives</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/carecredit-alternative" className="hover:text-primary-foreground transition-colors">
                  CareCredit Alternative
                </Link>
              </li>
              <li>
                <Link to="/scratchpay-alternative" className="hover:text-primary-foreground transition-colors">
                  Scratchpay Alternative
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@pawvetfund.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1-800-PET-FUND</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Finance Street<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Material Disclosure - Required for Google Ads Compliance */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-8">
          <div className="bg-primary-foreground/5 rounded-xl p-6">
            <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-warning" />
              Material Disclosure — Important Information
            </h5>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              <strong>This website is a lead generation service, not a direct lender.</strong> We 
              do not make credit decisions. By submitting your information, you agree to be contacted 
              by one or more of our lending partners. APRs range from <strong>5.99% to 35.99%</strong>, 
              depending on your creditworthiness, loan amount, and lender terms. Repayment terms range 
              from <strong>61 days to 72 months</strong>.
            </p>
            <p className="text-xs text-primary-foreground/60 leading-relaxed mt-3">
              <strong>Representative Example:</strong> If you borrow $5,000 over a 36-month term at 
              an APR of 10%, the monthly payment would be $161.34. Total repayment amount: $5,808.24. 
              This example is for illustrative purposes only. Your actual rate and terms may vary.
            </p>
            <p className="text-xs text-primary-foreground/60 leading-relaxed mt-3">
              Checking your rate uses a <strong>soft credit inquiry</strong> and will not affect your 
              credit score. A hard inquiry may be performed if you choose to proceed with a loan offer.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Paw Vet Fund. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/california-privacy-rights" className="hover:text-primary-foreground transition-colors">
                California Privacy Rights
              </Link>
              <Link to="/do-not-sell-my-info" className="hover:text-primary-foreground transition-colors">
                Do Not Sell My Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
