import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "../formSchema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactInfoStepProps {
  form: UseFormReturn<LoanFormData>;
}

const formatPhoneNumber = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
};

const ContactInfoStep = ({ form }: ContactInfoStepProps) => {
  const { register, formState: { errors, dirtyFields }, setValue, watch } = form;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted, { shouldValidate: true });
  };

  const renderFieldStatus = (fieldName: keyof LoanFormData) => {
    const hasError = errors[fieldName];
    const isDirty = dirtyFields[fieldName];
    const value = watch(fieldName);
    
    if (!isDirty || !value) return null;
    
    if (hasError) {
      return <AlertCircle className="w-5 h-5 text-destructive" />;
    }
    return <CheckCircle className="w-5 h-5 text-trust" />;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <div className="relative">
            <Input
              id="firstName"
              placeholder="John"
              {...register("firstName")}
              className={cn(
                "pr-10",
                errors.firstName && "border-destructive focus-visible:ring-destructive"
              )}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {renderFieldStatus("firstName")}
            </div>
          </div>
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <div className="relative">
            <Input
              id="lastName"
              placeholder="Smith"
              {...register("lastName")}
              className={cn(
                "pr-10",
                errors.lastName && "border-destructive focus-visible:ring-destructive"
              )}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {renderFieldStatus("lastName")}
            </div>
          </div>
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="john.smith@email.com"
            {...register("email")}
            className={cn(
              "pr-10",
              errors.email && "border-destructive focus-visible:ring-destructive"
            )}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {renderFieldStatus("email")}
          </div>
        </div>
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <div className="relative">
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={watch("phone")}
            onChange={handlePhoneChange}
            className={cn(
              "pr-10",
              errors.phone && "border-destructive focus-visible:ring-destructive"
            )}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {renderFieldStatus("phone")}
          </div>
        </div>
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* ZIP Code */}
      <div className="space-y-2">
        <Label htmlFor="zipCode">ZIP Code</Label>
        <div className="relative">
          <Input
            id="zipCode"
            placeholder="12345"
            maxLength={5}
            {...register("zipCode")}
            className={cn(
              "pr-10 max-w-[150px]",
              errors.zipCode && "border-destructive focus-visible:ring-destructive"
            )}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {renderFieldStatus("zipCode")}
          </div>
        </div>
        {errors.zipCode && (
          <p className="text-sm text-destructive">{errors.zipCode.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoStep;
