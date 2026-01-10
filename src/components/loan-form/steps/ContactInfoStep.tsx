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

  const inputBaseClass = "h-14 pl-12 text-base bg-muted/30 border-0 rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all placeholder:text-muted-foreground/60";

  return (
    <div className="space-y-4">
      {/* Name Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
          <Input
            id="firstName"
            placeholder="First name"
            {...register("firstName")}
            className={cn(inputBaseClass, errors.firstName && "ring-2 ring-destructive/50")}
          />
          {errors.firstName && (
            <p className="text-xs text-destructive mt-1.5 pl-1">{errors.firstName.message}</p>
          )}
        </div>

        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
          <Input
            id="lastName"
            placeholder="Last name"
            {...register("lastName")}
            className={cn(inputBaseClass, errors.lastName && "ring-2 ring-destructive/50")}
          />
          {errors.lastName && (
            <p className="text-xs text-destructive mt-1.5 pl-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
        <Input
          id="email"
          type="email"
          placeholder="Email address"
          {...register("email")}
          className={cn(inputBaseClass, errors.email && "ring-2 ring-destructive/50")}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1.5 pl-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
        <Input
          id="phone"
          type="tel"
          placeholder="Phone number"
          value={watch("phone")}
          onChange={handlePhoneChange}
          className={cn(inputBaseClass, errors.phone && "ring-2 ring-destructive/50")}
        />
        {errors.phone && (
          <p className="text-xs text-destructive mt-1.5 pl-1">{errors.phone.message}</p>
        )}
      </div>

      {/* ZIP Code */}
      <div className="relative w-40">
        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
        <Input
          id="zipCode"
          placeholder="ZIP code"
          maxLength={5}
          {...register("zipCode")}
          className={cn(inputBaseClass, errors.zipCode && "ring-2 ring-destructive/50")}
        />
        {errors.zipCode && (
          <p className="text-xs text-destructive mt-1.5 pl-1">{errors.zipCode.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoStep;
