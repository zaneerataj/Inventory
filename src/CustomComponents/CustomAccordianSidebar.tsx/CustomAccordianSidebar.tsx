// CustomAccordion.js
import React, { useState } from 'react';

interface AccordionItem {
  label: string;
  content: React.ReactNode;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

const CustomAccordionSidebar: React.FC<CustomAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <div
            onClick={() => handleToggle(index)}
            className="cursor-pointer p-2 flex justify-between items-center"
          >
            <span>{item.label}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && <div className="p-2">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordionSidebar;
