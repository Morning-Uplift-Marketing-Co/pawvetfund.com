import { UseFormReturn } from "react-hook-form";
import { LoanFormData, creditRanges, employmentStatuses } from "../formSchema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TrendingUp, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreditProfileStepProps {
  form: UseFormReturn<LoanFormData>;
}

const CreditProfileStep = ({ form }: CreditProfileStepProps) => {
  const creditRange = form.watch("creditRange");
  const employmentStatus = form.watch("employmentStatus");

  return (
    <div className="space-y-8">
      {/* Credit Score Range */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <Label className="text-base font-medium">Estimated Credit Score</Label>
        </div>
        
        <RadioGroup
          value={creditRange}
          onValueChange={(value) => form.setValue("creditRange", value)}
          className="grid gap-3"
        >
          {creditRanges.map((option) => (
            <div key={option.value}>
              <RadioGroupItem
                value={option.value}
                id={`credit-${option.value}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`credit-${option.value}`}
                className={cn(
                  "flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all",
                  "hover:border-primary/50 hover:bg-primary/5",
                  creditRange === option.value
                    ? "border-primary bg-primary/10"
                    : "border-border"
                )}
              >
                <div>
                  <span className="font-semibold">{option.label}</span>
                  <span className="text-muted-foreground ml-2">({option.range})</span>
                </div>
                <div className="text-right text-sm">
                  <div className="text-primary font-medium">{option.approvalOdds}</div>
                  <div className="text-muted-foreground text-xs">{option.aprRange}</div>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        {form.formState.errors.creditRange && (
          <p className="text-sm text-destructive">
            {form.formState.errors.creditRange.message}
          </p>
        )}
      </div>

      {/* Employment Status */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <Label className="text-base font-medium">Employment Status</Label>
        </div>
        
        <RadioGroup
          value={employmentStatus}
          onValueChange={(value) => form.setValue("employmentStatus", value)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {employmentStatuses.map((option) => (
            <div key={option.value}>
              <RadioGroupItem
                value={option.value}
                id={`employment-${option.value}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`employment-${option.value}`}
                className={cn(
                  "flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all text-center",
                  "hover:border-primary/50 hover:bg-primary/5",
                  employmentStatus === option.value
                    ? "border-primary bg-primary/10"
                    : "border-border"
                )}
              >
                <span className="font-medium">{option.label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        {form.formState.errors.employmentStatus && (
          <p className="text-sm text-destructive">
            {form.formState.errors.employmentStatus.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreditProfileStep;
