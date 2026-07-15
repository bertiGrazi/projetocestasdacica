import { Button, type ButtonProps } from "@heroui/react";

export function PrimaryButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Button
      className={`
        bg-brand-primary
        text-white
        hover:bg-brand-primary/90
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
}