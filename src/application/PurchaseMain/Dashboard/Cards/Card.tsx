import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../../components/ui/card';

interface CardWithFormProps {
  heading: string;
  CurrencySign: string;
  amount: number;
  icon: React.ReactNode;
  onClick?: () => void; // Optional onClick prop
  children?: React.ReactNode; // Add this line
}

export const CardWithForm: React.FC<CardWithFormProps> = ({
  heading,
  CurrencySign,
  amount,
  icon,
  onClick,
  children,
}) => {
  return (
    <Card
      className="w-[100%] transition-transform transform hover:scale-105 hover:shadow-orange-2xl shadow-orange-400"
      onClick={onClick}
    >
      <CardHeader>
        <div className="w-full flex justify-between">
          <CardTitle className="text-md">{heading}</CardTitle>
          <div>{icon}</div>
        </div>
        <CardDescription>
          {CurrencySign} {amount}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {children} {/* Render the children here */}
      </CardContent>
    </Card>
  );
};
