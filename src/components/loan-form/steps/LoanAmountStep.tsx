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
    <div className="space-y-8 py-6">
      {/* Amount Display */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">I need</p>
        <div className="text-5xl font-bold tracking-tight font-serif">
          <span className="text-muted-foreground/40">$</span>
          <span className="text-foreground">{amount.toLocaleString()}</span>
        </div>
      </div>

      {/* Slider */}
      <div className="px-1">
        <Slider
          value={[amount]}
          onValueChange={(value) => form.setValue("loanAmount", value[0])}
          min={500}
          max={5000}
          step={100}
          className="py-3"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
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
              "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all border",
              amount === amt
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white text-muted-foreground border-border hover:border-primary/50"
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
