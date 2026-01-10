import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "../formSchema";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DollarSign, User, Pencil, Shield } from "lucide-react";

interface ReviewStepProps {
  form: UseFormReturn<LoanFormData>;
  onEditStep: (step: number) => void;
}

const ReviewStep = ({ form, onEditStep }: ReviewStepProps) => {
  const values = form.watch();

  // Calculate estimated monthly payment range (using average APR)
  const calculateMonthly = (apr: number) => {
    const monthlyRate = apr / 100 / 12;
    const months = 36;
    return (values.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
           (Math.pow(1 + monthlyRate, months) - 1);
  };

  const minMonthly = calculateMonthly(10.99).toFixed(0);
  const maxMonthly = calculateMonthly(25.99).toFixed(0);

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="space-y-3">
        {/* Loan Details */}
        <div className="p-3 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="font-semibold">Loan Details</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onEditStep(1)}>
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-0.5 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-medium">${values.loanAmount?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-3 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span className="font-semibold">Contact Information</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onEditStep(2)}>
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-0.5 text-sm">
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
        <div className="p-3 rounded-lg border-2 border-primary/20 bg-primary/5">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
            <p className="text-xl font-bold text-primary">${minMonthly} - ${maxMonthly}</p>
            <p className="text-xs text-muted-foreground mt-1">Based on 36-month term</p>
          </div>
        </div>
      </div>

      {/* Terms Agreement */}
      <div className="space-y-3 pt-3 border-t">
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

        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded-lg">
          <Shield className="w-4 h-4 text-trust flex-shrink-0" />
          <span>Your information is protected with 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
