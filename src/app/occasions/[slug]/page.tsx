import { occasions } from "@/src/data/occasions";

import { baskets } from "@/src/data/baskets";
import { BasketCard } from "../../../components/product/basket-card";

type OccassionsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OccassionsPage({ params }: OccassionsPageProps) {
  const { slug } = await params;

  const occasion = occasions.find(
    (occasion) => occasion.id === slug
  );

  const occasionBaskets = baskets.filter(
    (basket) => basket.occasionId === slug
  );

  if (!occasion) {
    return (
      <main className="min-h-screen px-4 py-8">
        <h1 className="text-3xl font-bold">Ocasião não encontrada</h1>
        <p className="mt-2 text-gray-600">
          A ocasião que você está procurando não foi encontrada.
        </p>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold">
        {occasion?.emoji} {occasion?.title}
      </h1>
      <p className="mt-2 text-gray-600">
        {occasion?.description}
      </p>

      <section className="mt-10">
        <h1 className="text-2xl font-semibold">
          Escolha a sua cesta 
        </h1>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {occasionBaskets.map((basket) => (
            <BasketCard
              key={basket.id}
              name={basket.name}
              description={basket.description}
              price={basket.price}
            />
          ))}
        </div>
      </section>
    </main>
  )
}