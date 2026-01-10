import { UseFormReturn } from "react-hook-form";
import { LoanFormData, creditRanges, employmentStatuses } from "../formSchema";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard, User, Pencil, Shield } from "lucide-react";

interface ReviewStepProps {
  form: UseFormReturn<LoanFormData>;
  onEditStep: (step: number) => void;
}

const ReviewStep = ({ form, onEditStep }: ReviewStepProps) => {
  const values = form.watch();
  
  const creditLabel = creditRanges.find(c => c.value === values.creditRange);
  const employmentLabel = employmentStatuses.find(e => e.value === values.employmentStatus)?.label || "";

  // Calculate estimated monthly payment range
  const minApr = values.creditRange === "excellent" ? 5.99 : 
                 values.creditRange === "good" ? 10.99 :
                 values.creditRange === "fair" ? 15.99 : 20.99;
  const maxApr = values.creditRange === "excellent" ? 12.99 : 
                 values.creditRange === "good" ? 18.99 :
                 values.creditRange === "fair" ? 25.99 : 35.99;
  
  const calculateMonthly = (apr: number) => {
    const monthlyRate = apr / 100 / 12;
    const months = 36;
    return (values.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
           (Math.pow(1 + monthlyRate, months) - 1);
  };

  const minMonthly = calculateMonthly(minApr).toFixed(0);
  const maxMonthly = calculateMonthly(maxApr).toFixed(0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="space-y-4">
        {/* Loan Details */}
        <div className="p-4 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="font-semibold">Loan Details</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onEditStep(1)}>
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-medium">${values.loanAmount?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Credit Profile */}
        <div className="p-4 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <span className="font-semibold">Credit Profile</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onEditStep(2)}>
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credit Score:</span>
              <span className="font-medium">{creditLabel?.label} ({creditLabel?.range})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Employment:</span>
              <span className="font-medium">{employmentLabel}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-4 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span className="font-semibold">Contact Information</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onEditStep(3)}>
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name:</span>
              <span className="font-medium">{values.firstName} {values.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium">{values.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Phone:</span>
              <span className="font-medium">{values.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">ZIP:</span>
              <span className="font-medium">{values.zipCode}</span>
            </div>
          </div>
        </div>

        {/* Estimated Payment */}
        <div className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
            <p className="text-2xl font-bold text-primary">${minMonthly} - ${maxMonthly}</p>
            <p className="text-xs text-muted-foreground mt-1">Based on 36-month term</p>
          </div>
        </div>
      </div>

      {/* Terms Agreement */}
      <div className="space-y-4 pt-4 border-t">
        <div className="flex items-start gap-3">
          <Checkbox
            id="agreeToTerms"
            checked={values.agreeToTerms}
            onCheckedChange={(checked) => form.setValue("agreeToTerms", checked as boolean)}
          />
          <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed cursor-pointer">
            I agree to the{" "}
            <a href="/terms" className="text-primary underline hover:no-underline">Terms of Service</a>
            {" "}and{" "}
            <a href="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</a>.
            I consent to be contacted by lenders regarding my loan request.
          </Label>
        </div>
        {form.formState.errors.agreeToTerms && (
          <p className="text-sm text-destructive">{form.formState.errors.agreeToTerms.message}</p>
        )}

        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <Shield className="w-4 h-4 text-trust flex-shrink-0" />
          <span>Your information is protected with 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
