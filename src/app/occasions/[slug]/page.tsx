type OccassionsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OccassionsPage({ params }: OccassionsPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold">
        Ocasião: {slug}
      </h1>
    </main>
  )
}