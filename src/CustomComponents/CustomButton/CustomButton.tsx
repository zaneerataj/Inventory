import React, { FC } from 'react';
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from '../../../components/ui/button';

interface CustomButtonProps extends Omit<BaseButtonProps, 'children'> {
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
  label = '',
  icon,
  variant = 'outline',
  className,
  size,
  onClick,
  disabled,
  children,
}) => {
  return (
    <BaseButton
      variant={variant}
      className={` flex items-center bg-[#fa7317] ${className} text-white`}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
      {children}
    </BaseButton>
  );
};

export default CustomButton;

// import { Button } from "../../../components/ui/button";
// import React, { FC } from "react";

// interface CustomButtonProps {
//     label?: string; // Define label as an optional string prop
//     variant?: 'default' | 'outline' | 'contained' | 'text' | 'icon' | 'destructive'; // Specify allowed variants  }
//     className?: string;
//     size?: string;
//     onClick?: () => void; // onClick event handler
//     disabled?: boolean; // Whether the button is disabled
//     children?: React.ReactNode; // Optional children to be rendered inside the button
// }
// const CustomButton: FC<CustomButtonProps> = ({ label = "Button", variant = "outline", className  , size="" , onClick , disabled , children}) => {
//     return (
//         <Button variant={variant as any} className={className} size={{size}} onClick={onClick} disabled={disabled} >
//             {label}
//             {children}
//         </Button>
//     );
// }

// export default CustomButton;
