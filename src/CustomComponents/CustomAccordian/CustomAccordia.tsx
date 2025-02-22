import React, { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';

interface AccordionItemData {
  label: string;
  content: string;
}

interface CustomAccordionProps {
  items: AccordionItemData[];
}

const CustomAccordion: FC<CustomAccordionProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Accordion key={`accordion-${index}`} type="single" collapsible>
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger>{item.label}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export default CustomAccordion;
