import type { PropsWithChildren } from "react";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      {children}
    </main>
  );
}