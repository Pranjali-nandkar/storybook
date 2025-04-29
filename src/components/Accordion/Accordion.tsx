import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto bg-white">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-black"
            style={{ backgroundColor: "white", fontSize: "16px" }}
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>
            <span style={{ fontSize: "20px" }}>
              {openIndex === index ? "-" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div
              className="px-6 pb-4 text-gray-700"
              style={{ fontSize: "14px", backgroundColor: "white" }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
