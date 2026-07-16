import { Container } from "@/src/components/layout/container";
import { PageLayout } from "@/src/components/layout/page-layout";
import { PrimaryButton } from "@/src/components/ui/primary-button";

export function Hero() {
  return (
    <PageLayout>
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <div className="flex w-full max-w-sm flex-col items-center">
          <div className="mb-6 h-32 w-32 rounded-3xl bg-brand-secondary" />

          <h1 className="font-heading text-4xl font-semibold">
            Cestas da Ciça
          </h1>

          <p className="mt-6 max-w-xs text-base leading-7 text-text-secondary">
            Monte uma cesta do seu jeito para qualquer ocasião especial.
          </p>

          <span
            aria-hidden="true"
            className="mt-6 text-3xl text-brand-primary"
          >
            ♡
          </span>

          <PrimaryButton
            type="button"
            className="mt-8 w-full"
          >
            Começar
          </PrimaryButton>
        </div>
      </Container>
    </PageLayout>
  );
}