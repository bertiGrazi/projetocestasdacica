import { Button, type ButtonProps } from "@heroui/react";

export function PrimaryButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Button
      type="button"
      className={`
        mt-10
        w-full
        max-w-sm
        rounded-2xl
        py-6
        bg-brand-primary
        text-white
        hover:bg-brand-primary/90
        text-2xl
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
}