import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function useCountdown(target: Date) {
  const [t, setT] = useState({ d: "--", h: "--", m: "--", s: "--" });
  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return setT({ d: "00", h: "00", m: "00", s: "00" });
      const pad = (n: number) => String(n).padStart(2, "0");
      setT({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function Home() {
  const c = useCountdown(new Date("2026-11-18T08:00:00"));

  const dates = [
    ["Lancement officiel", "15 Mai 2026"],
    ["Limite de soumission", "15 Septembre 2026"],
    ["Notification d'acceptation", "30 Septembre 2026"],
    ["Retour des corrections", "10 Octobre 2026"],
    ["Limite de paiement", "30 Octobre 2026"],
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-label">Université Lédéa Bernard OUEDRAOGO</div>
            <h1>Vèmes Journées<br />Scientifiques<br /><em>JS-ULBO 2026</em></h1>
            <p className="hero-subtitle">
              «&nbsp;Apport de la recherche à la souveraineté<br />
              et au développement endogène&nbsp;»<br />
              18 – 20 Novembre 2026 · Ouahigouya, Burkina Faso
            </p>
            <div className="hero-actions">
              <Link to="/soumission" className="btn-primary">📝 Soumettre une communication</Link>
              <a href="/downloads/programme-js-ulbo-2026.pdf" download className="btn-outline">📅 Télécharger le programme (PDF)</a>
              <a href="/downloads/affiche-js-ulbo-2026.pdf" download className="btn-outline">🖼️ Télécharger l'affiche (PDF)</a>
            </div>
          </div>
          <div className="hero-card">
            <h3>⏳ Dates clés</h3>
            {dates.map(([label, val]) => (
              <div className="date-item" key={label}>
                <div className="date-dot"></div>
                <div>
                  <div className="date-label">{label}</div>
                  <div className="date-val">{val}</div>
                </div>
              </div>
            ))}
            <div className="hero-card-footer">
              <span className="badge">🗓 Événement : 18-20 Nov. 2026</span>
              <div className="countdown-block">
                <div className="countdown-item"><div className="countdown-num">{c.d}</div><div className="countdown-lbl">Jours</div></div>
                <div className="countdown-item"><div className="countdown-num">{c.h}</div><div className="countdown-lbl">Heures</div></div>
                <div className="countdown-item"><div className="countdown-num">{c.m}</div><div className="countdown-lbl">Min</div></div>
                <div className="countdown-item"><div className="countdown-num">{c.s}</div><div className="countdown-lbl">Sec</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">5ème</div><div className="stat-label">Édition des JS-ULBO</div></div>
          <div className="stat-item"><div className="stat-num">5</div><div className="stat-label">Axes thématiques</div></div>
          <div className="stat-item"><div className="stat-num">3</div><div className="stat-label">Jours de conférences</div></div>
          <div className="stat-item"><div className="stat-num">2</div><div className="stat-label">Modes de participation</div></div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">À propos</div>
        <h2 className="section-title">Un carrefour de la recherche africaine</h2>
        <p className="section-lead">
          Les Vèmes Journées Scientifiques de l'ULBO réunissent chercheurs, enseignants-chercheurs,
          doctorants et professionnels autour d'une réflexion centrale : comment la science peut-elle
          renforcer l'autonomie et le développement endogène du Burkina Faso et de l'Afrique ?
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="objectives-grid">
          <div className="objective-card" style={{ borderTop: "3px solid var(--green)" }}>
            <div className="objective-icon">🔬</div>
            <h4>Sciences appliquées & Innovation technologique</h4>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid var(--gold)" }}>
            <div className="objective-icon">🌿</div>
            <h4>Valorisation des ressources naturelles</h4>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid var(--red)" }}>
            <div className="objective-icon">🏥</div>
            <h4>Santé & Souveraineté sanitaire</h4>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid #5e35b1" }}>
            <div className="objective-icon">📚</div>
            <h4>Sciences humaines & Identité culturelle</h4>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid #0097a7" }}>
            <div className="objective-icon">💰</div>
            <h4>Endogénéité économique & financière</h4>
          </div>
          <Link to="/axes" className="objective-card" style={{ background: "var(--green)", borderColor: "var(--green)", textDecoration: "none" }}>
            <div className="objective-icon" style={{ background: "rgba(255,255,255,.12)" }}>→</div>
            <h4 style={{ color: "white" }}>Explorer tous les axes de communication</h4>
          </Link>
        </div>
      </div>

      <div className="section" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,.02))" }}>
        <div className="section-label">L'Université</div>
        <h2 className="section-title">Université Lédéa Bernard OUÉDRAOGO (ULBO)</h2>
        <p className="section-lead">
          Créée pour répondre aux ambitions du développement endogène, l'Université Lédéa Bernard
          OUÉDRAOGO (ULBO) est un jeune établissement public d'enseignement supérieur et de recherche
          situé à Ouahigouya, dans la région du Nord du Burkina Faso. Elle porte le nom du Naaba
          Kiiba, Lédéa Bernard OUÉDRAOGO, figure emblématique du développement communautaire et
          père du mouvement Naam.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 32 }} className="objectives-grid">
          <div className="objective-card" style={{ borderTop: "3px solid var(--green)" }}>
            <div className="objective-icon">🎓</div>
            <h4>Mission</h4>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
              Former des cadres compétents, produire et diffuser des connaissances scientifiques au
              service du développement durable et endogène.
            </p>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid var(--gold)" }}>
            <div className="objective-icon">🔬</div>
            <h4>Recherche</h4>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
              Promouvoir une recherche ancrée dans les réalités locales, contributive à la
              souveraineté scientifique, alimentaire, sanitaire et culturelle de l'Afrique.
            </p>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid var(--red)" }}>
            <div className="objective-icon">🤝</div>
            <h4>Ouverture</h4>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
              Bâtir des partenariats académiques nationaux et internationaux et accompagner le
              tissu socio-économique régional.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-dark">
        <div style={{ maxWidth: 600, margin: "0 auto" }}>

          <div className="section-label" style={{ justifyContent: "center" }}>Appel à communications</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, color: "white", marginBottom: 16 }}>
            Soumettez votre communication
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Date limite de soumission&nbsp;: <strong style={{ color: "var(--gold-light)" }}>15 Septembre 2026</strong><br />
            Deux modalités disponibles : EasyChair ou email direct.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/soumission" className="btn-primary">📤 Soumettre maintenant</Link>
            <a href="mailto:journescientifiques.ulbo@gmail.com" className="btn-outline">✉️ Contacter le comité</a>
          </div>
        </div>
      </div>
    </>
  );
}
