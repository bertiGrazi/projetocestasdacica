"use client";

import {
  Button,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { Container } from "@/src/components/layout/container";
import { PageLayout } from "@/src/components/layout/page-layout";
import { PrimaryButton } from "@/src/components/ui/primary-button";

export default function DesignSystemPage() {
  return (
    <PageLayout>
      <Container className="py-8 sm:py-12">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Cestas da Ciça
          </p>

          <h1 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
            Design System
          </h1>

          <p className="mt-3 max-w-2xl text-text-secondary">
            Página para testar componentes, estilos e responsividade.
          </p>
        </header>

        <div className="space-y-12">
          <ButtonSection />

          <FormSection />

          <ResponsiveSection />
        </div>
      </Container>
    </PageLayout>
  );
}

function ButtonSection() {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold">
        Botões
      </h2>

      <p className="mt-2 text-text-secondary">
        Variações de tamanho, estado e importância.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <PrimaryButton className="w-full sm:w-auto">
          Começar
        </PrimaryButton>

        <Button
          variant="outline"
          className="w-full border-brand-primary text-brand-primary sm:w-auto"
        >
          Ver detalhes
        </Button>

        <Button
          variant="ghost"
          className="w-full text-brand-primary sm:w-auto"
        >
          Voltar
        </Button>

        <PrimaryButton
          isDisabled
          className="w-full sm:w-auto"
        >
          Desabilitado
        </PrimaryButton>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold">
        Formulário
      </h2>

      <p className="mt-2 text-text-secondary">
        Exemplo simples para testar os campos.
      </p>

      <form className="mt-6 max-w-xl space-y-5 rounded-xl border border-brand-secondary bg-white p-4 shadow-md sm:p-6">
        <TextField
          name="name"
          isRequired
          className="w-full"
        >
          <Label className="mb-2 block font-medium">
            Nome
          </Label>

          <Input
            placeholder="Digite seu nome"
            className="w-full rounded-md border border-brand-secondary bg-background-primary px-4 py-3 outline-none focus:border-brand-primary"
          />
        </TextField>

        <TextField
          name="phone"
          className="w-full"
        >
          <Label className="mb-2 block font-medium">
            Telefone
          </Label>

          <Input
            type="tel"
            placeholder="(11) 99999-9999"
            className="w-full rounded-md border border-brand-secondary bg-background-primary px-4 py-3 outline-none focus:border-brand-primary"
          />
        </TextField>

        <TextField
          name="message"
          className="w-full"
        >
          <Label className="mb-2 block font-medium">
            Observações
          </Label>

          <TextArea
            placeholder="Conte um pouco sobre o presente..."
            className="min-h-28 w-full resize-none rounded-md border border-brand-secondary bg-background-primary px-4 py-3 outline-none focus:border-brand-primary"
          />
        </TextField>

        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryButton
            type="submit"
            className="w-full"
          >
            Enviar
          </PrimaryButton>

          <Button
            type="reset"
            variant="outline"
            className="w-full border-brand-primary text-brand-primary"
          >
            Limpar
          </Button>
        </div>
      </form>
    </section>
  );
}

function ResponsiveSection() {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold">
        Grid responsivo
      </h2>

      <p className="mt-2 text-text-secondary">
        Redimensione a tela para observar a mudança das colunas.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Aniversário", "Romântico", "Agradecimento"].map(
          (occasion) => (
            <article
              key={occasion}
              className="rounded-xl border border-brand-secondary bg-white p-5 shadow-sm"
            >
              <div className="mb-4 h-32 rounded-lg bg-brand-secondary" />

              <h3 className="font-heading text-xl font-semibold">
                {occasion}
              </h3>

              <p className="mt-2 text-sm text-text-secondary">
                Exemplo de card adaptável para diferentes tamanhos de tela.
              </p>

              <PrimaryButton className="mt-5 w-full">
                Ver opções
              </PrimaryButton>
            </article>
          ),
        )}
      </div>
    </section>
  );
}