import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "../formSchema";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Lock } from "lucide-react";

interface ReviewStepProps {
  form: UseFormReturn<LoanFormData>;
  onEditStep: (step: number) => void;
}

const ReviewStep = ({ form, onEditStep }: ReviewStepProps) => {
  const values = form.watch();

  // Calculate estimated monthly payment range
  const calculateMonthly = (apr: number) => {
    const monthlyRate = apr / 100 / 12;
    const months = 36;
    return (values.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
           (Math.pow(1 + monthlyRate, months) - 1);
  };

  const minMonthly = calculateMonthly(10.99).toFixed(0);
  const maxMonthly = calculateMonthly(25.99).toFixed(0);

  return (
    <div className="space-y-5">
      {/* Estimated Payment */}
      <div className="text-center py-5 border border-border rounded-xl bg-muted/30">
        <p className="text-xs text-muted-foreground mb-1">Estimated monthly payment</p>
        <p className="text-3xl font-bold font-serif text-foreground">${minMonthly} – ${maxMonthly}</p>
        <p className="text-xs text-muted-foreground mt-1.5">36 months · Rates vary by lender</p>
      </div>

      {/* Summary */}
      <div className="space-y-0">
        <div className="flex items-center justify-between py-2.5 border-b border-border">
          <span className="text-sm text-muted-foreground">Amount</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">${values.loanAmount?.toLocaleString()}</span>
            <button type="button" onClick={() => onEditStep(1)} className="p-1 hover:bg-muted rounded transition-colors">
              <Pencil className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-2.5 border-b border-border">
          <span className="text-sm text-muted-foreground">Name</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{values.firstName} {values.lastName}</span>
            <button type="button" onClick={() => onEditStep(2)} className="p-1 hover:bg-muted rounded transition-colors">
              <Pencil className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-2.5 border-b border-border">
          <span className="text-sm text-muted-foreground">Email</span>
          <span className="text-sm font-medium">{values.email}</span>
        </div>
        
        <div className="flex items-center justify-between py-2.5">
          <span className="text-sm text-muted-foreground">Phone</span>
          <span className="text-sm font-medium">{values.phone}</span>
        </div>
      </div>

      {/* Terms Agreement */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer group">
          <Checkbox
            id="agreeToTerms"
            checked={values.agreeToTerms}
            onCheckedChange={(checked) => form.setValue("agreeToTerms", checked as boolean)}
            className="mt-0.5"
          />
          <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
            I agree to the{" "}
            <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
          </span>
        </label>
        {form.formState.errors.agreeToTerms && (
          <p className="text-xs text-destructive mt-1.5">{form.formState.errors.agreeToTerms.message}</p>
        )}
      </div>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
        <Lock className="w-3 h-3" />
        <span>256-bit encryption · No credit impact</span>
      </div>
    </div>
  );
};

export default ReviewStep;
