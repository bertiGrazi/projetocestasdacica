import { Button } from "@heroui/react";

type OccasionCardProps = {
  title: string;
  emoji: string;
  isSelected: boolean;
  onSelect: () => void;
};
export function OccasionCard({
  title,
  emoji,
  isSelected,
  onSelect,
}: OccasionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`
        flex
        min-h-36
        w-full
        flex-col
        items-center
        justify-center
        gap-3
        rounded-3xl
        border
        px-4
        py-6
        text-center
        shadow-sm
        transition
        ${
          isSelected
            ? "border-brand-primary bg-brand-primary/10"
            : "border-brand-primary/20 bg-white hover:border-brand-primary"
        }
      `}
    >
      <span aria-hidden="true" className="text-4xl">
        {emoji}
      </span>

      <span className="text-base font-semibold text-text-primary">
        {title}
      </span>
    </button>
  );
}