import { Container } from "@/src/components/layout/container";
import { PageLayout } from "@/src/components/layout/page-layout";

export default function OccasionsPageContent() {
  return (
    <PageLayout>
      <Container className="py-10">
        <header className="text-center">
          <h1 className="text-3xl font-semibold">
            Escolha uma ocasião
          </h1>

          <p className="mt-3 text-base text-text-secondary">
            Selecione uma opção para começarmos a montar sua cesta.
          </p>
        </header>
      </Container>
    </PageLayout>
  );
}