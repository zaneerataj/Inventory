import React, { FC } from 'react';
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
import CustomButton from '../CustomButton/CustomButton';

interface CustomAlertProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  message?: string | React.ReactNode; // Allow both string and React nodes
  header?: string; // Optional header for the dialog
  className?: string; // Optional className
  customerData?: any; // Customer data to display
  children?: React.ReactNode; // Additional content
}

const CustomAlert: FC<CustomAlertProps> = ({
  open,
  onClose,
  onSave,
  message,
  header,
  className,
  customerData,
  children,
}) => {
  return (
    <div className={className}>
      <AlertDialog open={open} onOpenChange={onClose}>
        <AlertDialogContent className="max-w-3xl h-auto overflow-auto">
          {' '}
          {/* Allow overflow */}
          <AlertDialogHeader>
            <AlertDialogTitle>{header || ''}</AlertDialogTitle>
          </AlertDialogHeader>
          {message && (
            <AlertDialogDescription>{message}</AlertDialogDescription>
          )}
          {customerData && (
            <div className="mt-4">
              <p>
                <strong>Customer ID:</strong> {customerData.id}
              </p>
              <p>
                <strong>Customer Name:</strong> {customerData.name}
              </p>
              <p>
                <strong>Email:</strong> {customerData.email}
              </p>
              <p>
                <strong>Phone:</strong> {customerData.phone}
              </p>
              {/* Other customer fields can go here */}
            </div>
          )}
          {children}
          <AlertDialogFooter>
            <CustomButton onClick={onClose}>Close</CustomButton>
            <CustomButton onClick={onSave}>Save</CustomButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CustomAlert;
