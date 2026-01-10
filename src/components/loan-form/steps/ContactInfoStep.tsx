import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "../formSchema";
import { Input } from "@/components/ui/input";
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
  const { register, formState: { errors }, setValue, watch } = form;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted, { shouldValidate: true });
  };

  return (
    <div className="space-y-5">
      {/* Name Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            id="firstName"
            placeholder="First name"
            {...register("firstName")}
            className={cn(
              "h-12 bg-transparent border-0 border-b-2 rounded-none px-0 text-base placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors",
              errors.firstName ? "border-destructive" : "border-border"
            )}
          />
          {errors.firstName && (
            <p className="text-xs text-destructive mt-1.5">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <Input
            id="lastName"
            placeholder="Last name"
            {...register("lastName")}
            className={cn(
              "h-12 bg-transparent border-0 border-b-2 rounded-none px-0 text-base placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors",
              errors.lastName ? "border-destructive" : "border-border"
            )}
          />
          {errors.lastName && (
            <p className="text-xs text-destructive mt-1.5">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <Input
          id="email"
          type="email"
          placeholder="Email address"
          {...register("email")}
          className={cn(
            "h-12 bg-transparent border-0 border-b-2 rounded-none px-0 text-base placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors",
            errors.email ? "border-destructive" : "border-border"
          )}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1.5">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Input
          id="phone"
          type="tel"
          placeholder="Phone number"
          value={watch("phone")}
          onChange={handlePhoneChange}
          className={cn(
            "h-12 bg-transparent border-0 border-b-2 rounded-none px-0 text-base placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors",
            errors.phone ? "border-destructive" : "border-border"
          )}
        />
        {errors.phone && (
          <p className="text-xs text-destructive mt-1.5">{errors.phone.message}</p>
        )}
      </div>

      {/* ZIP Code */}
      <div className="w-32">
        <Input
          id="zipCode"
          placeholder="ZIP code"
          maxLength={5}
          {...register("zipCode")}
          className={cn(
            "h-12 bg-transparent border-0 border-b-2 rounded-none px-0 text-base placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary transition-colors",
            errors.zipCode ? "border-destructive" : "border-border"
          )}
        />
        {errors.zipCode && (
          <p className="text-xs text-destructive mt-1.5">{errors.zipCode.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoStep;
