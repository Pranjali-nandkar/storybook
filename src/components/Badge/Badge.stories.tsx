import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Primary = () => <Badge label="Primary Badge" variant="primary" />;
export const Secondary = () => <Badge label="Secondary Badge" variant="secondary" />;
export const Success = () => <Badge label="Success Badge" variant="success" />;
export const Warning = () => <Badge label="Warning Badge" variant="warning" />;
export const Error = () => <Badge label="Error Badge" variant="error" />;
