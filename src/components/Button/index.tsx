import Button from '@mui/material/Button';
import { ReactNode } from 'react';

interface ButtonProps {
    variant:"text" | "outlined" | "contained";
    color:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    children: ReactNode;
    onClick:() => void;
}

export default function CustomButton({variant,color,children,onClick}:ButtonProps) {
  return (
      <Button variant={variant} color={color} onClick={onClick}>{children}</Button>
  );
}