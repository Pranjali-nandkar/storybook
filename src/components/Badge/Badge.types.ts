export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}
