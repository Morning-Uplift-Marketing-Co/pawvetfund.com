import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const StepIndicator = ({ currentStep, totalSteps, stepLabels }: StepIndicatorProps) => {
  return (
    <div className="w-full mb-10">
      {/* Minimal step indicator */}
      <div className="flex items-center justify-center gap-3">
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300",
                    isCompleted && "bg-primary text-primary-foreground",
                    isCurrent && "bg-primary text-primary-foreground",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <span 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isCurrent ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              </div>
              
              {/* Connector line */}
              {index < stepLabels.length - 1 && (
                <div 
                  className={cn(
                    "w-8 h-px mx-3 transition-colors",
                    stepNumber < currentStep ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
