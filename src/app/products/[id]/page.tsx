import Image from "next/image";
import {notFound} from "next/navigation";

import { baskets} from "@/src/data/baskets";

type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>
};

export default async function ProductDetailsPage({ 
  params 
}: ProductDetailsPageProps) {
  const { id } = await params;

  const basket = baskets.find((basket) => basket.id === id);

  const items = basket?.items || [];

  if (!basket) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-md px-4 py-8">
      <Image 
        src={basket.image}
        alt={basket.name}
        width={600}
        height={400}
        className="h-64 w-full rounded-3xl object-cover"
        priority
      />

      <section className="mt-6">
        <h1 className="text-3xl font-bold">{basket.name}</h1>

        <p className="mt-3 text-gray-600">{basket.description}</p>

        <p className="mt-4 text-2xl font-bold">
          {basket.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>

        {items.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">
              Itens da cesta
            </h2>

            <ul className="mt-3 space-y-2">
              {items.map((item) => (
                <li 
                key={item}
                className="rounded-xl bg-gray-100 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  )

}