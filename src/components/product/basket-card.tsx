import Image from "next/image";

import { PrimaryButton } from "@/src/components/ui/primary-button";

type BasketCardProps = {
 name: string;
 id: string;
 description: string;
 price: number;
 image: string;
};

export function BasketCard({ 
  name, 
  id,
  description, 
  price,
  image
 }: BasketCardProps) {
    return (
      <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={`Cesta ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>

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