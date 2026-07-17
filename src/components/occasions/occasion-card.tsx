import { Button } from "@heroui/react";

type OccasionCardProps = {
  title: string;
  emoji: string;
};

export function OccasionCard({ 
  title, emoji 
}: OccasionCardProps) {
  return (
    <Button 
    type="button"
    className="
    flex
    min-h-36
    w-full
    flex-col
    items-center
    justify-center
    gap-3
    rounded-3xl
    border-2
    border-brand-primary/20
    bg-white
    px-4
    py-6
    text-center
    shadow-sm
    transition
    hover:border-brand-primary
    "
    >
      <span
          aria-hidden="true"
          className="text-4xl"
        >
          {emoji}
      </span>

      <span className="text-base font-semibold text-text-primary">
          {title}
      </span>
    </Button>
  );
}