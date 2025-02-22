import React, { FC, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../../components/ui/alert-dialog';
import { UserPlus } from 'lucide-react';
import CustomButton from '../CustomButton/CustomButton';

interface CustomAlertDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  description?: string;
  header?: string; // Optional header for the dialog
  className?: string; // Add className as an optional prop
  children?: React.ReactNode; // Add children as an optional prop
}

const CustomAlertDialog: FC<CustomAlertDialogProps> = ({ open, onClose, onSave, description, header, className, children }) => {
  const [isClose, setIsClose] = useState(open); // Use `open` prop to control state

  const handleClose = () => {
    setIsClose(false);
    onClose(); // Trigger the onClose callback when closing the dialog
  };

  return (
    <div className={className}> {/* Apply className to the wrapper div */}
      <AlertDialog open={isClose} onOpenChange={setIsClose}>
        <AlertDialogTrigger>
          <button>
            <div className="absolute top-0 w-8 rounded-md border h-9 border-gray-400">
              <UserPlus className="w-6 h-6 mt-1 ml-1" />
            </div>
            {/* <UserPlus className="absolute top-1 w-6 h-6 rounded-md border  border-gray-300" /> */}
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-3xl h-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>{header || ''}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
          {children}
          <AlertDialogFooter>
            <CustomButton onClick={handleClose}>Close</CustomButton>
            <CustomButton onClick={onSave}>Save</CustomButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CustomAlertDialog;