import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const StepIndicator = ({ currentStep, totalSteps, stepLabels }: StepIndicatorProps) => {
  return (
    <div className="w-full mb-8">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2">
        {stepLabels.map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div
              key={stepNumber}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                isCurrent ? "w-8 bg-primary" : "w-1.5",
                isCompleted ? "bg-primary" : "bg-muted",
                !isCompleted && !isCurrent && "bg-muted"
              )}
            />
          );
        })}
      </div>
      
      {/* Step label */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        Step {currentStep} of {totalSteps} · <span className="text-foreground font-medium">{stepLabels[currentStep - 1]}</span>
      </p>
    </div>
  );
};

export default StepIndicator;
