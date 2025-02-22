// src/App.tsx
import React from 'react';
import { User, ShoppingCart, BadgeCent, Percent, Expand, TicketPlus, ShoppingBag, ScrollText } from 'lucide-react';
import { CardWithForm } from './Card';



interface CardData {
    title: string;
    value: string;
    icon: React.ReactNode;

    description: string;
}

const cardData: CardData[] = [
    {
        title: 'TOTAL PURCHASE DUE',
        value: '344.00',
        icon: <ShoppingCart />,
        description: '',
    },
    {
        title: 'TOTAL SALES DUE',
        value: '485.00',
        icon: <BadgeCent />,
        description: '',
    },
    {
        title: 'TOTAL SALES AMOUNT',
        value: '845.00',
        icon: <Percent />,
        description: '',
    },
    {
        title: 'TOTAL EXPENSES AMOUNT',
        value: '400.00',
        icon: <Expand />,
        description: '',
    },
    {
        title: 'TODAY TOTAL PURCHASE',
        value: '475.00',
        icon: <ShoppingCart />,
        description: '',
    },
    {
        title: 'TODAY PAYMENT RECEIVED(SALES)',
        value: '356.00',
        icon: <BadgeCent />,
        description: '',
    },
    {
        title: 'TODAYS TOTAL SALES',
        value: '360.00',
        icon: <Percent />,
        description: '',
    },
    {
        title: 'TODAYS TOTAL EXPENSES',
        value: '500.00',
        icon: <Expand />,
        description: '',
    },
    {
        title: 'CUSTOMERS',
        value: '8',
        icon: <User />,
        description: '',
    },
    {
        title: 'SUPPLIERS',
        value: '10',
        icon: <TicketPlus />,
        description: '',
    },
    {
        title: 'PURCHASE INVOICE',
        value: '7',
        icon: <ShoppingBag />,
        description: '',
    },
    {
        title: 'SALES INVOICE',
        value: '9',
        icon: <ScrollText />,
        description: '',
    },
];

const Cards: React.FC = () => {
    return (
        <>
            <div className="  p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {cardData.map((card, index) => (
                        <>
                            <CardWithForm heading={card?.title} CurrencySign={"$"} amount={Number(card?.value)} icon={card?.icon} />

                        </>

                    ))}
                </div>
            </div>
            
           
        </>
    );

};


export default Cards;
