import { UseFormReturn } from "react-hook-form";
import { LoanFormData, loanPurposes } from "../formSchema";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoanAmountStepProps {
  form: UseFormReturn<LoanFormData>;
}

const quickAmounts = [500, 1000, 2500, 5000, 10000];

const LoanAmountStep = ({ form }: LoanAmountStepProps) => {
  const amount = form.watch("loanAmount");
  const purpose = form.watch("loanPurpose");

  return (
    <div className="space-y-8">
      {/* Amount Slider */}
      <div className="space-y-4">
        <Label className="text-base font-medium">How much do you need?</Label>
        
        <div className="text-center py-6">
          <div className="inline-flex items-center gap-1 text-5xl font-bold text-primary">
            <DollarSign className="w-10 h-10" />
            <span>{amount.toLocaleString()}</span>
          </div>
        </div>

        <Slider
          value={[amount]}
          onValueChange={(value) => form.setValue("loanAmount", value[0])}
          min={500}
          max={10000}
          step={100}
          className="py-4"
        />

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>$500</span>
          <span>$10,000</span>
        </div>

        {/* Quick Amount Buttons */}
        <div className="flex flex-wrap gap-2 pt-2">
          {quickAmounts.map((amt) => (
            <Button
              key={amt}
              type="button"
              variant={amount === amt ? "default" : "outline"}
              size="sm"
              onClick={() => form.setValue("loanAmount", amt)}
              className="flex-1 min-w-[80px]"
            >
              ${amt.toLocaleString()}
            </Button>
          ))}
        </div>
      </div>

      {/* Loan Purpose */}
      <div className="space-y-4">
        <Label className="text-base font-medium">What's this loan for?</Label>
        
        <RadioGroup
          value={purpose}
          onValueChange={(value) => form.setValue("loanPurpose", value)}
          className="grid gap-3"
        >
          {loanPurposes.map((option) => (
            <div key={option.value}>
              <RadioGroupItem
                value={option.value}
                id={option.value}
                className="peer sr-only"
              />
              <Label
                htmlFor={option.value}
                className={cn(
                  "flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all",
                  "hover:border-primary/50 hover:bg-primary/5",
                  purpose === option.value
                    ? "border-primary bg-primary/10"
                    : "border-border"
                )}
              >
                <span className="font-medium">{option.label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        {form.formState.errors.loanPurpose && (
          <p className="text-sm text-destructive">
            {form.formState.errors.loanPurpose.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoanAmountStep;
