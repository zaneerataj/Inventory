import React, { FC, ReactNode } from 'react';
import { Switch } from '../../../components/ui/switch';
import { Label } from '../../../components/ui/label';

interface CustomSwitchProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}

const CustomSwitch: FC<CustomSwitchProps> = ({ onClick, children, className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`} onClick={onClick}>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode"> </Label>
      {children}
    </div>
  );
};

export default CustomSwitch;
