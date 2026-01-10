import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "../formSchema";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, User } from "lucide-react";

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

  const inputBaseClass = cn(
    "h-11 pl-10 text-sm bg-white border border-border rounded-lg",
    "transition-all duration-200",
    "placeholder:text-muted-foreground",
    "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
  );

  const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground";

  return (
    <div className="space-y-4">
      {/* Name Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <div className="relative">
            <User className={iconClass} />
            <Input
              id="firstName"
              placeholder="First name"
              {...register("firstName")}
              className={cn(inputBaseClass, errors.firstName && "border-destructive focus:ring-destructive/30")}
            />
          </div>
          {errors.firstName && (
            <p className="text-xs text-destructive pl-1">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <div className="relative">
            <User className={iconClass} />
            <Input
              id="lastName"
              placeholder="Last name"
              {...register("lastName")}
              className={cn(inputBaseClass, errors.lastName && "border-destructive focus:ring-destructive/30")}
            />
          </div>
          {errors.lastName && (
            <p className="text-xs text-destructive pl-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <div className="relative">
          <Mail className={iconClass} />
          <Input
            id="email"
            type="email"
            placeholder="Email address"
            {...register("email")}
            className={cn(inputBaseClass, errors.email && "border-destructive focus:ring-destructive/30")}
          />
        </div>
        {errors.email && (
          <p className="text-xs text-destructive pl-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <div className="relative">
          <Phone className={iconClass} />
          <Input
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={watch("phone")}
            onChange={handlePhoneChange}
            className={cn(inputBaseClass, errors.phone && "border-destructive focus:ring-destructive/30")}
          />
        </div>
        {errors.phone && (
          <p className="text-xs text-destructive pl-1">{errors.phone.message}</p>
        )}
      </div>

      {/* ZIP Code */}
      <div className="space-y-1 w-36">
        <div className="relative">
          <MapPin className={iconClass} />
          <Input
            id="zipCode"
            placeholder="ZIP code"
            maxLength={5}
            {...register("zipCode")}
            className={cn(inputBaseClass, errors.zipCode && "border-destructive focus:ring-destructive/30")}
          />
        </div>
        {errors.zipCode && (
          <p className="text-xs text-destructive pl-1">{errors.zipCode.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoStep;
