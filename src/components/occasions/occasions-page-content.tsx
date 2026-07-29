"use client";

import { Container } from "@/src/components/layout/container";
import { PageLayout } from "@/src/components/layout/page-layout";
import { OccasionCard } from "./occasion-card";

import { occasions } from "@/src/data/occasions";

import { useState } from "react";

export default function OccasionsPageContent() {
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  
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

        <div className="mt-10 grid grid-cols-2 gap-4">
          {occasions.map((occasion) => (
            <OccasionCard
              key={occasion.id}
              title={occasion.title}
              emoji={occasion.emoji}
              isSelected={selectedOccasion === occasion.id}
              onSelect={() => setSelectedOccasion(occasion.id)}
            />
          ))} 
        </div>
      </Container>
    </PageLayout>
  );
}