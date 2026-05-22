import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Layout } from "../components/Layout";

function NotFoundComponent() {
  return (
    <div className="section" style={{ textAlign: "center", paddingTop: 120 }}>
      <h1 className="section-title">404</h1>
      <p className="section-lead" style={{ margin: "0 auto 24px" }}>
        Cette page n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn-primary" style={{ background: "var(--green)", color: "white" }}>
        Retour à l'accueil
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="section" style={{ textAlign: "center", paddingTop: 120 }}>
      <h1 className="section-title">Une erreur est survenue</h1>
      <p className="section-lead" style={{ margin: "0 auto 24px" }}>
        Veuillez réessayer ou revenir à l'accueil.
      </p>
      <button
        className="btn-primary"
        style={{ background: "var(--green)", color: "white" }}
        onClick={() => { router.invalidate(); reset(); }}
      >
        Réessayer
      </button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "JS-ULBO 2026 — Vèmes Journées Scientifiques" },
      {
        name: "description",
        content:
          "Vèmes Journées Scientifiques de l'Université Lédéa Bernard OUEDRAOGO — 18-20 Novembre 2026 à Ouahigouya, Burkina Faso. Soumission, inscription et programme.",
      },
      { property: "og:title", content: "JS-ULBO 2026 — Journées Scientifiques" },
      {
        property: "og:description",
        content: "Apport de la recherche à la souveraineté et au développement endogène. 18-20 Novembre 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}
