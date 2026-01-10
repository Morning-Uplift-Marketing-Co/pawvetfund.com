import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import LoanApplicationForm from "./LoanApplicationForm";
import { Shield } from "lucide-react";

interface LoanFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefillZipCode?: string;
}

const LoanFormDialog = ({ open, onOpenChange, prefillZipCode }: LoanFormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-8 rounded-2xl border-0 shadow-xl bg-white">
        {/* Header */}
        <div className="text-center mb-1">
          <h2 className="text-2xl font-bold font-serif text-foreground tracking-tight">
            Get your rate
          </h2>
          <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-primary/5">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">No credit impact</span>
          </div>
        </div>
        
        <LoanApplicationForm onClose={() => onOpenChange(false)} prefillZipCode={prefillZipCode} />
      </DialogContent>
    </Dialog>
  );
};

export default LoanFormDialog;
