import { PrimaryButton } from "@/src/components/ui/primary-button";

type BasketCardProps = {
 name: string;
 description: string;
 price: number;
};

export function BasketCard({ 
  name, 
  description, 
  price }: BasketCardProps) {
    return (
      <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"></div>

          <h2 className="text-xl font-semibold">
          {name}
          </h2>

          <p className="mt-2 text-sm text-gray-600">
          {description}
          </p>

          <p className="mt-4 text-lg font-bold">
          {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>

          <PrimaryButton>Ver cesta</PrimaryButton>

      </article>
    )
  }