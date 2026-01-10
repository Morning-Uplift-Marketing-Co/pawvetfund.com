import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanFormSchema, LoanFormData, defaultFormValues } from "./formSchema";
import StepIndicator from "./StepIndicator";
import LoanAmountStep from "./steps/LoanAmountStep";
import CreditProfileStep from "./steps/CreditProfileStep";
import ContactInfoStep from "./steps/ContactInfoStep";
import ReviewStep from "./steps/ReviewStep";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const stepLabels = ["Amount", "Credit", "Contact", "Review"];

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
        fieldsToValidate = ["creditRange", "employmentStatus"];
        break;
      case 3:
        fieldsToValidate = ["firstName", "lastName", "email", "phone", "zipCode"];
        break;
      case 4:
        fieldsToValidate = ["agreeToTerms"];
        break;
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < 4) {
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
    
    // Simulate API call
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
        return <CreditProfileStep form={form} />;
      case 3:
        return <ContactInfoStep form={form} />;
      case 4:
        return <ReviewStep form={form} onEditStep={handleEditStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <StepIndicator 
        currentStep={currentStep} 
        totalSteps={4} 
        stepLabels={stepLabels} 
      />

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="min-h-[400px]">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 mt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          {currentStep < 4 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="gap-2"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="hero"
              disabled={isSubmitting}
              className="gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Check My Rates — Free
                  <CheckCircle className="w-4 h-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
