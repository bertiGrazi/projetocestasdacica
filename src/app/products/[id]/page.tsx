type ProductDetailsPageProps = {
  params: Promise<{
    id: string;
  }>
};

export default async function ProductDetailsPage({ 
  params 
}: ProductDetailsPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold">
       Detalhes da cesta
      </h1>

       <p className="mt-4 text-lg">
        ID da cesta: {id}
       </p>
    </main>
  )

}