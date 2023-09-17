import Button from '@mui/material/Button';
import { ReactNode } from 'react';

interface ButtonProps {
    variant:"text" | "outlined" | "contained";
    color:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    children: ReactNode
}

export default function CustomButton({variant,color,children}:ButtonProps) {
  return (
      <Button variant={variant} color={color}>{children}</Button>
  );
}