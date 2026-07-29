import { occasions } from "@/src/data/occasions";

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
    </main>
  )
}