import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { loanFormSchema, LoanFormData, defaultFormValues } from "./formSchema";
import StepIndicator from "./StepIndicator";
import LoanAmountStep from "./steps/LoanAmountStep";
import ContactInfoStep from "./steps/ContactInfoStep";
import ReviewStep from "./steps/ReviewStep";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const stepLabels = ["Amount", "Contact", "Review"];

interface LoanApplicationFormProps {
  onClose?: () => void;
  prefillZipCode?: string;
}

const LoanApplicationForm = ({ onClose, prefillZipCode }: LoanApplicationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);

    // Create query parameters from form data (matching API Keep parameter names)
    const params = new URLSearchParams({
      requested_amount: data.loanAmount.toString(),
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      home_phone: data.phone.replace(/\D/g, ''), // Remove formatting, keep only numbers
      zip: data.zipCode,
    });

    // Close dialog first
    onClose?.();

    // Redirect to apply page with data
    navigate(`/apply?${params.toString()}`);

    setIsSubmitting(false);
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
        <div className="min-h-[280px]">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 mt-4 border-t">
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

          {currentStep < 3 ? (
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
