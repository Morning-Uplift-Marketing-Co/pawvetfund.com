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
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-8 rounded-3xl border-0 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Get your rate
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-2">
            <Shield className="w-3.5 h-3.5 text-trust" />
            <span>No credit impact</span>
          </div>
        </div>
        
        <LoanApplicationForm onClose={() => onOpenChange(false)} prefillZipCode={prefillZipCode} />
      </DialogContent>
    </Dialog>
  );
};

export default LoanFormDialog;
