import React from 'react';
import { Navbar } from './Navbar';
import { Meta, Story } from '@storybook/react';
import { NavbarProps } from './Navbar.types';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    brand: { control: 'text' },
    links: { control: 'object' },
  },
} as Meta<NavbarProps>;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: 'MyBrand',
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};
