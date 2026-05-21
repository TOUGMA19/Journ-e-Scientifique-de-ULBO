import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/theme", label: "Thème & Objectifs" },
  { to: "/axes", label: "Axes" },
  { to: "/soumission", label: "Soumission" },
  { to: "/inscription", label: "Inscription" },
  { to: "/comites", label: "Comités" },
  { to: "/lieu", label: "Lieu" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <div className="nav-logo-badge">JS<br />V</div>
            <div>
              <div className="nav-logo-text">JS-ULBO 2026</div>
              <div className="nav-logo-sub">Journées Scientifiques</div>
            </div>
          </Link>
          <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={pathname === l.to ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className={`nav-cta ${pathname === "/contact" ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="page-wrap" key={pathname}>{children}</div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>JS-ULBO 2026</h3>
              <p>
                Vèmes Journées Scientifiques de l'Université Lédéa Bernard OUEDRAOGO — «&nbsp;Apport
                de la recherche à la souveraineté et au développement endogène&nbsp;» — 18-20
                Novembre 2026.
              </p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Dates clés</h4>
              <ul>
                <li><a>Lancement : 15 Mai 2026</a></li>
                <li><a>Soumission : 15 Sep. 2026</a></li>
                <li><a>Acceptation : 30 Sep. 2026</a></li>
                <li><a>Corrections : 10 Oct. 2026</a></li>
                <li><a>Paiement : 30 Oct. 2026</a></li>
                <li><a>Événement : 18-20 Nov. 2026</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Université Lédéa Bernard OUEDRAOGO — Tous droits réservés</span>
            <span>
              <a href="mailto:journescientifiques.ulbo@gmail.com">
                journescientifiques.ulbo@gmail.com
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
