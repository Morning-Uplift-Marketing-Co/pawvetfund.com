import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "../formSchema";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";

interface LoanAmountStepProps {
  form: UseFormReturn<LoanFormData>;
}

const quickAmounts = [500, 1000, 2000, 3000, 5000];

const LoanAmountStep = ({ form }: LoanAmountStepProps) => {
  const amount = form.watch("loanAmount");

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
            max={5000}
            step={100}
            className="py-4"
          />

          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$500</span>
            <span>$5,000</span>
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

    </div>
  );
};

export default LoanAmountStep;
