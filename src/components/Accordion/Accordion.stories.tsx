import React from 'react';
import { Accordion } from './Accordion';
import { AccordionProps } from './Accordion.types';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const items = [
  { id: '1', title: 'Accordion Item 1', content: 'Content for item 1.' },
  { id: '2', title: 'Accordion Item 2', content: 'Content for item 2.' },
  { id: '3', title: 'Accordion Item 3', content: 'Content for item 3.' },
];

export const Default = () => <Accordion items={items} />;
