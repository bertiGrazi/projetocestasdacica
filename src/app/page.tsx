"use client";

import {
  Button,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const colors = [
  {
    name: "Primária",
    className: "bg-brand-primary",
    hex: "#8B5E3C",
  },
  {
    name: "Secundária",
    className: "bg-brand-secondary",
    hex: "#D8C3A5",
  },
  {
    name: "Acento",
    className: "bg-brand-accent",
    hex: "#6B8E23",
  },
  {
    name: "Fundo",
    className: "bg-background-primary",
    hex: "#FAF7F2",
  },
  {
    name: "Texto",
    className: "bg-text-primary",
    hex: "#2F2F2F",
  },
];

export default function HomePage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    console.log("Dados do formulário:", data);
  }

  return (
    <main className="min-h-screen bg-background-primary px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-primary">
            Cestas da Ciça
          </p>

          <h1 className="text-3xl font-semibold text-text-primary">
            Design System
          </h1>

          <p className="mt-2 text-text-secondary">
            Visualização da identidade da marca e dos componentes principais.
          </p>
        </header>

        <section>
          <h2 className="mb-5 text-2xl font-semibold text-text-primary">
            Paleta de cores
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {colors.map((color) => (
              <div key={color.name}>
                <div
                  className={`h-32 rounded-lg shadow-md ${color.className}`}
                />

                <h3 className="mt-3 font-semibold text-text-primary">
                  {color.name}
                </h3>

                <p className="text-sm text-text-muted">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-text-primary">
            Botões
          </h2>

          <p className="mb-6 text-text-secondary">
            Modelos disponíveis para diferentes níveis de importância.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              className="bg-brand-primary text-white hover:bg-brand-primary/90"
            >
              Começar
            </Button>

            <Button
              variant="secondary"
              className="bg-brand-secondary text-text-primary"
            >
              Ver produtos
            </Button>

            <Button
              variant="outline"
              className="border-brand-primary text-brand-primary"
            >
              Saiba mais
            </Button>

            <Button
              variant="ghost"
              className="text-brand-primary hover:bg-brand-secondary/40"
            >
              Voltar
            </Button>

            <Button variant="danger">Excluir</Button>
          </div>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-text-primary">
            Tamanhos e estados
          </h3>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="sm"
              className="bg-brand-primary text-white"
            >
              Pequeno
            </Button>

            <Button
              size="md"
              className="bg-brand-primary text-white"
            >
              Médio
            </Button>

            <Button
              size="lg"
              className="bg-brand-primary text-white"
            >
              Grande
            </Button>

            <Button
              isDisabled
              className="bg-brand-primary text-white"
            >
              Desabilitado
            </Button>

            <Button
              isPending
              className="bg-brand-primary text-white"
            >
              Carregando
            </Button>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-text-primary">
            Formulário
          </h2>

          <p className="mb-6 text-text-secondary">
            Exemplo básico para dados de um pedido.
          </p>

          <Form
            aria-label="Formulário de exemplo"
            onSubmit={handleSubmit}
            className="max-w-xl space-y-5 rounded-xl border border-brand-secondary bg-white p-6 shadow-md"
          >
            <TextField
              name="name"
              isRequired
              className="w-full"
            >
              <Label className="mb-2 block font-medium text-text-primary">
                Nome
              </Label>

              <Input
                placeholder="Digite seu nome"
                className="w-full rounded-md border border-brand-secondary bg-background-primary px-4 py-3 text-text-primary outline-none focus:border-brand-primary"
              />
            </TextField>

            <TextField
              name="phone"
              className="w-full"
            >
              <Label className="mb-2 block font-medium text-text-primary">
                Telefone
              </Label>

              <Input
                type="tel"
                placeholder="(11) 99999-9999"
                className="w-full rounded-md border border-brand-secondary bg-background-primary px-4 py-3 text-text-primary outline-none focus:border-brand-primary"
              />
            </TextField>

            <TextField
              name="occasion"
              className="w-full"
            >
              <Label className="mb-2 block font-medium text-text-primary">
                Ocasião
              </Label>

              <Input
                placeholder="Ex.: aniversário"
                className="w-full rounded-md border border-brand-secondary bg-background-primary px-4 py-3 text-text-primary outline-none focus:border-brand-primary"
              />
            </TextField>

            <TextField
              name="message"
              className="w-full"
            >
              <Label className="mb-2 block font-medium text-text-primary">
                Observações
              </Label>

              <TextArea
                placeholder="Conte um pouco sobre o presente..."
                className="min-h-28 w-full resize-none rounded-md border border-brand-secondary bg-background-primary px-4 py-3 text-text-primary outline-none focus:border-brand-primary"
              />
            </TextField>

            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                fullWidth
                className="bg-brand-primary text-white hover:bg-brand-primary/90"
              >
                Solicitar orçamento
              </Button>

              <Button
                type="reset"
                variant="outline"
                fullWidth
                className="border-brand-primary text-brand-primary"
              >
                Limpar
              </Button>
            </div>
          </Form>
        </section>
      </div>
    </main>
  );
}