import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { ShieldCheck, Ban, CheckCircle2, Mail, Phone } from "lucide-react";

const DoNotSellMyInfo = () => {
  const handleOpenForm = () => {
    window.location.href = "https://trk.pawvetfund.com/click";
  };

  return (
    <>
      <Helmet>
        <title>Do Not Sell My Personal Information | Paw Vet Fund</title>
        <meta
          name="description"
          content="Learn about your right to opt-out of the sale of your personal information and how Paw Vet Fund handles your data."
        />
      </Helmet>

      <Header onOpenForm={handleOpenForm} />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Ban className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Do Not Sell My Personal Information
            </h1>
            <p className="text-muted-foreground text-lg">
              Your right to opt-out under California law
            </p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 space-y-10">
            {/* Our Commitment */}
            <section className="bg-trust/10 rounded-xl p-6 border border-trust/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-trust/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-trust" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Our Commitment to You</h2>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Paw Vet Fund does not sell your personal information.</strong>{" "}
                    We are committed to protecting your privacy and handling your data responsibly. As a lead 
                    generation service, we share your information with lending partners only to help match you 
                    with financing options — this is not considered a "sale" under the CCPA.
                  </p>
                </div>
              </div>
            </section>

            {/* What This Means */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What "Selling" Means Under CCPA</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the California Consumer Privacy Act (CCPA), "selling" personal information means sharing 
                it with a third party in exchange for monetary or other valuable consideration. This definition 
                is broader than what most people typically think of as "selling."
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Ban className="w-4 h-4 text-destructive" />
                    What We Don't Do
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Sell your data to advertisers</li>
                    <li>• Share data for unrelated marketing</li>
                    <li>• Provide data to data brokers</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-trust/5 border border-trust/20">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-trust" />
                    What We Do
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Share with lenders for your loan request</li>
                    <li>• Use for service improvement</li>
                    <li>• Protect with industry-standard security</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How to Opt-Out */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How to Opt-Out</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we do not sell personal information, California residents have the right to submit an 
                opt-out request. If our practices change in the future, we will honor your opt-out preference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To submit an opt-out request or if you have concerns about how your data is being used, 
                please contact us through one of the following methods:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:privacy@pawvetfund.com" className="text-primary hover:underline">
                      privacy@pawvetfund.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <span className="text-muted-foreground">1-800-PET-FUND</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Verification */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Verification Process</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you submit an opt-out request, we may need to verify your identity to ensure we are 
                responding to a legitimate request. We may ask you to provide information that matches the 
                information we have on file. We will respond to your request within 15 business days.
              </p>
            </section>

            {/* Questions */}
            <section className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-3">Questions or Concerns?</h2>
              <p className="text-muted-foreground">
                If you have any questions about this policy or how we handle your personal information, 
                please don't hesitate to contact us at{" "}
                <a href="mailto:privacy@pawvetfund.com" className="text-primary hover:underline">
                  privacy@pawvetfund.com
                </a>. We're committed to addressing your privacy concerns promptly.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DoNotSellMyInfo;
