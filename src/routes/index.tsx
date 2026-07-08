import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { AppRouter } from "@/app/AppRouter";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "GetFixLocal AI Lead Hunter — Enterprise AI Sales OS for Home Services" },
      { name: "description", content: "Discover, qualify, price, and route home service leads across USA, Lithuania, and UAE. AI Lead Hunter, contractor marketplace, and CRM inspired by Apollo.io." },
      { property: "og:title", content: "GetFixLocal AI Lead Hunter" },
      { property: "og:description", content: "The AI Sales Operating System for home service businesses." },
    ],
  }),
  component: () => (
    <ClientOnly fallback={<div className="min-h-screen bg-background" />}>
      <AppRouter />
    </ClientOnly>
  ),
});
