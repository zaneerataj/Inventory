import * as React from "react"

// import { Button } from "../../../../../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../../../components/ui/card"



interface CardWithFormProps {
    heading: string;
    CurrencySign: string;
    amount: number;
    icon: React.ReactNode;

}

export const CardWithForm: React.FC<CardWithFormProps> = ({
    heading,
    CurrencySign,
    amount,
    icon,
}) => {
    return (
        <Card className="w-full text-dark transition-transform transform hover:scale-105 hover:shadow-lg">
            <CardHeader>
                <div className="w-full flex justify-between items-center">
                    <CardTitle className="text-md">{heading}</CardTitle>
                    <div>{icon}</div>
                </div>
                <CardDescription className="text-2xl font-bold">
                    {CurrencySign} {amount.toFixed(2)}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Add any additional content here if needed */}
            </CardContent>
            {/* <CardFooter className="bg-[#142327]">
                <button className="w-full text-smpy rounded flex  justify-center">
                    More info
                    <span className="ml-2">&#x27A4;</span>
                </button>
            </CardFooter> */}
        </Card>
    );
};


























