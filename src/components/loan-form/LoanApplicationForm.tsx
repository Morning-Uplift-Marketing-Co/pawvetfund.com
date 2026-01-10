import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanFormSchema, LoanFormData, defaultFormValues } from "./formSchema";
import StepIndicator from "./StepIndicator";
import LoanAmountStep from "./steps/LoanAmountStep";
import ContactInfoStep from "./steps/ContactInfoStep";
import ReviewStep from "./steps/ReviewStep";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const stepLabels = ["Amount", "Contact", "Review"];

interface LoanApplicationFormProps {
  onClose?: () => void;
  prefillZipCode?: string;
}

const LoanApplicationForm = ({ onClose, prefillZipCode }: LoanApplicationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<LoanFormData>({
    resolver: zodResolver(loanFormSchema),
    defaultValues: {
      ...defaultFormValues,
      zipCode: prefillZipCode || "",
    },
    mode: "onChange",
  });

  const validateCurrentStep = async (): Promise<boolean> => {
    let fieldsToValidate: (keyof LoanFormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ["loanAmount"];
        break;
      case 2:
        fieldsToValidate = ["firstName", "lastName", "email", "phone", "zipCode"];
        break;
      case 3:
        fieldsToValidate = ["agreeToTerms"];
        break;
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
  };

  const onSubmit = async (data: LoanFormData) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Application Submitted!",
      description: "We're matching you with lenders. Check your email for offers.",
    });
    
    setIsSubmitting(false);
    onClose?.();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <LoanAmountStep form={form} />;
      case 2:
        return <ContactInfoStep form={form} />;
      case 3:
        return <ReviewStep form={form} onEditStep={handleEditStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <StepIndicator 
        currentStep={currentStep} 
        totalSteps={3} 
        stepLabels={stepLabels} 
      />

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="min-h-[340px]">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3 pt-4">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="w-11 h-11 rounded-lg hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
            </Button>
          )}

          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className={cn(
                "flex-1 h-11 rounded-lg text-sm font-medium gap-2 bg-primary hover:bg-primary/90",
                currentStep === 1 && "ml-0"
              )}
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-11 rounded-lg text-sm font-medium bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Checking rates...
                </>
              ) : (
                "Check My Rates — Free"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
