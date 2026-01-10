import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Check Your Rate in Minutes
          </DialogTitle>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-1">
            <Shield className="w-4 h-4 text-trust" />
            <span>No impact to your credit score</span>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <LoanApplicationForm onClose={() => onOpenChange(false)} prefillZipCode={prefillZipCode} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoanFormDialog;
