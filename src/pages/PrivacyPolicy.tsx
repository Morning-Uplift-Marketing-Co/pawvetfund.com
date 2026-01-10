import { Helmet } from "react-helmet-async";
import { Shield } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  const handleOpenForm = () => {
    window.location.href = "https://trk.pawvetfund.com/click";
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Paw Vet Fund</title>
        <meta
          name="description"
          content="Read Paw Vet Fund's Privacy Policy to understand how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href="https://pawvetfund.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header onOpenForm={handleOpenForm} />
        
        <main className="flex-1 py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
                  <p className="text-muted-foreground">Last Updated: December 15, 2024</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Paw Vet Fund ("we," "us," or "our") respects your privacy and is committed to protecting 
                    your personal information. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect information about you in a variety of ways, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information you provide.</li>
                    <li><strong className="text-foreground">Financial Information:</strong> Income, employment status, credit profile information necessary to match you with lending partners.</li>
                    <li><strong className="text-foreground">Device Information:</strong> IP address, browser type, operating system, and other technical data.</li>
                    <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent on pages, and other analytics data.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Match you with potential lending partners in our network</li>
                    <li>Communicate with you about your inquiry and our services</li>
                    <li>Improve our website and user experience</li>
                    <li>Comply with legal obligations</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">4. Sharing Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may share your information with third-party lending partners in our network who may 
                    contact you regarding loan offers. By submitting your information, you consent to being 
                    contacted by these partners via phone, email, or text message. We do not sell your 
                    personal information to unaffiliated third parties for their marketing purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information, including 256-bit SSL encryption for data transmission. However, 
                    no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Opt-out of the sale of your personal information (California residents)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">7. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience, analyze 
                    website traffic, and for marketing purposes. You can control cookies through your 
                    browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">8. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or wish to exercise your rights, 
                    please contact us at:
                  </p>
                  <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border">
                    <p className="text-foreground font-medium">Paw Vet Fund</p>
                    <p className="text-muted-foreground">1234 Pet Lover Lane, Suite 100</p>
                    <p className="text-muted-foreground">Austin, TX 78701</p>
                    <p className="text-muted-foreground">Email: privacy@pawvetfund.com</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
