import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { AppRouter } from "@/app/AppRouter";

export const Route = createFileRoute("/$")({
  ssr: false,
  component: () => (
    <ClientOnly fallback={<div className="min-h-screen bg-background" />}>
      <AppRouter />
    </ClientOnly>
  ),
});
