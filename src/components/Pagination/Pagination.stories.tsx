import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    totalPages: { control: { type: 'number' }, defaultValue: 10 },
    currentPage: { control: { type: 'number' }, defaultValue: 1 },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A reusable pagination component supporting accessibility, keyboard navigation, and theming.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);

    return (
      <div className="p-4">
        <Pagination {...args} currentPage={page} onPageChange={setPage} />
      </div>
    );
  },
};
