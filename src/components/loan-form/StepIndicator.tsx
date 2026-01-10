import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const StepIndicator = ({ currentStep, totalSteps, stepLabels }: StepIndicatorProps) => {
  return (
    <div className="w-full mb-6">
      {/* Progress bar */}
      <div className="flex items-center gap-1.5">
        {stepLabels.map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div
              key={stepNumber}
              className={cn(
                "h-1 flex-1 rounded-full transition-all duration-300",
                isCompleted || isCurrent ? "bg-primary" : "bg-border"
              )}
            />
          );
        })}
      </div>
      
      {/* Step label */}
      <p className="text-center text-xs text-muted-foreground mt-3">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
};

export default StepIndicator;
