import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

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
