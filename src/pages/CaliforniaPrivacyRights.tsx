import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LoanFormDialog from "@/components/loan-form/LoanFormDialog";
import { Shield, FileText, Trash2, Ban, Scale } from "lucide-react";

const CaliforniaPrivacyRights = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const rights = [
    {
      icon: FileText,
      title: "Right to Know",
      description: "You have the right to request that we disclose what personal information we collect, use, disclose, and sell about you."
    },
    {
      icon: Trash2,
      title: "Right to Delete",
      description: "You have the right to request that we delete personal information we collected from you, subject to certain exceptions."
    },
    {
      icon: Ban,
      title: "Right to Opt-Out",
      description: "You have the right to opt-out of the sale of your personal information. We do not sell personal information as defined by the CCPA."
    },
    {
      icon: Scale,
      title: "Right to Non-Discrimination",
      description: "We will not discriminate against you for exercising any of your CCPA rights."
    }
  ];

  return (
    <>
      <Helmet>
        <title>California Privacy Rights (CCPA) | Paw Vet Fund</title>
        <meta
          name="description"
          content="Learn about your privacy rights under the California Consumer Privacy Act (CCPA) and how Paw Vet Fund protects your personal information."
        />
      </Helmet>

      <Header onOpenForm={handleOpenForm} />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              California Privacy Rights
            </h1>
            <p className="text-muted-foreground text-lg">
              Your rights under the California Consumer Privacy Act (CCPA)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Effective Date: January 1, 2024 | Last Updated: December 15, 2024
            </p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This California Privacy Rights Notice supplements the information contained in our Privacy Policy 
                and applies solely to California residents. It describes the rights you have under the California 
                Consumer Privacy Act of 2018 (CCPA), as amended by the California Privacy Rights Act of 2020 (CPRA), 
                regarding your personal information.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Your Rights Under CCPA</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {rights.map((right) => (
                  <div key={right.title} className="p-6 rounded-xl bg-muted/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <right.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Categories of Information */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Categories of Personal Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the past 12 months, we have collected the following categories of personal information:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Identifiers:</strong> Name, email address, phone number, IP address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Financial Information:</strong> Income range, credit profile information (for loan matching purposes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Internet Activity:</strong> Browsing history on our site, interactions with our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Geolocation Data:</strong> Approximate location based on IP address</span>
                </li>
              </ul>
            </section>

            {/* How to Exercise Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How to Exercise Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To exercise your rights under the CCPA, you may submit a verifiable consumer request by:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Emailing us at <strong className="text-foreground">privacy@pawvetfund.com</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Calling us at <strong className="text-foreground">1-800-PET-FUND</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Writing to us at: 123 Finance Street, New York, NY 10001</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We will verify your identity before processing your request. You may also designate an authorized 
                agent to make a request on your behalf. We will respond to your request within 45 days.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-3">Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about your California privacy rights, please contact us at{" "}
                <a href="mailto:privacy@pawvetfund.com" className="text-primary hover:underline">
                  privacy@pawvetfund.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <LoanFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default CaliforniaPrivacyRights;
