import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "../formSchema";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface LoanAmountStepProps {
  form: UseFormReturn<LoanFormData>;
}

const quickAmounts = [1000, 2000, 3000, 5000];

const LoanAmountStep = ({ form }: LoanAmountStepProps) => {
  const amount = form.watch("loanAmount");

  return (
    <div className="space-y-10 py-4">
      {/* Amount Display */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-3">I need</p>
        <div className="text-6xl font-bold tracking-tight">
          <span className="text-muted-foreground/50">$</span>
          <span className="text-foreground">{amount.toLocaleString()}</span>
        </div>
      </div>

      {/* Slider */}
      <div className="px-2">
        <Slider
          value={[amount]}
          onValueChange={(value) => form.setValue("loanAmount", value[0])}
          min={500}
          max={5000}
          step={100}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>$500</span>
          <span>$5,000</span>
        </div>
      </div>

      {/* Quick Amount Pills */}
      <div className="flex justify-center gap-2">
        {quickAmounts.map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => form.setValue("loanAmount", amt)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              amount === amt
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            )}
          >
            ${amt.toLocaleString()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoanAmountStep;
