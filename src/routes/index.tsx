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
            <h1>
              Vèmes Journées
              <br />
              Scientifiques
              <br />
              <em>JS-ULBO 2026</em>
            </h1>
            <p className="hero-subtitle">
              «&nbsp;Apport de la recherche à la souveraineté
              <br />
              et au développement endogène&nbsp;»
              <br />
              18 – 20 Novembre 2026 · Ouahigouya, Burkina Faso
            </p>
            <div className="hero-actions">
              <Link to="/soumission" className="btn-primary">
                📝 Soumettre une communication
              </Link>
              <a
                href="/downloads/programme-js-ulbo-2026.pdf"
                download
                className="btn-outline"
              >
                📅 Télécharger le programme (PDF)
              </a>
              <a
                href="/downloads/affiche-js-ulbo-2026.pdf"
                download
                className="btn-outline"
              >
                🖼️ Télécharger l'affiche (PDF)
              </a>
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
                <div className="countdown-item">
                  <div className="countdown-num">{c.d}</div>
                  <div className="countdown-lbl">Jours</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-num">{c.h}</div>
                  <div className="countdown-lbl">Heures</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-num">{c.m}</div>
                  <div className="countdown-lbl">Min</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-num">{c.s}</div>
                  <div className="countdown-lbl">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">5ème</div>
            <div className="stat-label">Édition des JS-ULBO</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5</div>
            <div className="stat-label">Axes thématiques</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3</div>
            <div className="stat-label">Jours de conférences</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2</div>
            <div className="stat-label">Modes de participation</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">À propos</div>
        <h2 className="section-title">Un carrefour de la recherche africaine</h2>
        <p className="section-lead">
          Les Vèmes Journées Scientifiques de l'ULBO réunissent chercheurs,
          enseignants-chercheurs, doctorants et professionnels autour d'une
          réflexion centrale : comment la science peut-elle renforcer
          l'autonomie et le développement endogène du Burkina Faso et de
          l'Afrique ?
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
          className="objectives-grid"
        >
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
          <Link
            to="/axes"
            className="objective-card"
            style={{
              background: "var(--green)",
              borderColor: "var(--green)",
              textDecoration: "none",
            }}
          >
            <div className="objective-icon" style={{ background: "rgba(255,255,255,.12)" }}>
              →
            </div>
            <h4 style={{ color: "white" }}>Explorer tous les axes de communication</h4>
          </Link>
        </div>
      </div>

      <div
        className="section"
        style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,.02))" }}
      >
        <div className="section-label">L'Université</div>
        <h2 className="section-title">
          Université Lédéa Bernard OUÉDRAOGO (ULBO)
        </h2>

        <div className="section-lead" style={{ maxWidth: 900, margin: "0 auto" }}>
          <p>
            Créée le <strong>22 octobre 2010</strong> par arrêté n°2010-389/MESSRS/SG/UO
            sous l'appellation <em>Centre Universitaire Polytechnique de Ouahigouya (CUPO)</em>,
            l'institution a connu une évolution significative au fil des années.
          </p>
          <p>
            Elle a été par la suite érigée en université autonome le{" "}
            <strong>30 septembre 2017</strong>, par le décret n°2017-1309/PRES/PM/MESRSI/MINEFID,
            sous le nom de l'<em>Université de Ouahigouya (UOHG)</em>.
          </p>
          <p>
            En Conseil des ministres du <strong>4 avril 2024</strong>, l'établissement a été
            rebaptisé <strong>Université Lédéa Bernard OUEDRAOGO (ULBO)</strong>, en hommage
            au <strong>Dr Lédéa Bernard OUEDRAOGO</strong>, figure emblématique du développement
            rural au Burkina Faso.
          </p>
          <p>
            Aujourd'hui, l'ULBO s'impose comme un pôle académique majeur dans la région du
            Yaadga et au Burkina Faso en général. L'institution est dirigée par le{" "}
            <strong>Pr Adama OUEDA</strong>.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            marginTop: 40,
          }}
          className="objectives-grid"
        >
          <div className="objective-card" style={{ borderTop: "3px solid var(--green)" }}>
            <div className="objective-icon">🎓</div>
            <h4>14 filières</h4>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
              UFR Sciences et Technologies (UFR-ST), UFR Sciences de la Santé (UFR-SS) et
              Institut de Formation et de Perfectionnement aux Métiers (IFPM).
            </p>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid var(--gold)" }}>
            <div className="objective-icon">📈</div>
            <h4>Nouveaux Masters 2025-2026</h4>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
              Master en Gestion des Ressources Humaines (GRH) et Master en Mathématiques,
              rejoignant le Master en Médecine déjà existant.
            </p>
          </div>
          <div className="objective-card" style={{ borderTop: "3px solid var(--red)" }}>
            <div className="objective-icon">👥</div>
            <h4>Communauté universitaire</h4>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
              55 personnels ATOS, 90 enseignants permanents, une centaine de vacataires et
              près de <strong>5 000 étudiants</strong>.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginTop: 32,
          }}
          className="objectives-grid"
        >
          <div className="objective-card" style={{ borderTop: "3px solid var(--green)" }}>
            <div className="objective-icon">🎯</div>
            <h4>Mission</h4>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
              Former des cadres compétents, produire et diffuser des connaissances
              scientifiques au service du développement durable et endogène.
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
              Bâtir des partenariats académiques nationaux et internationaux et accompagner
              le tissu socio-économique régional.
            </p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 14,
            color: "var(--muted)",
          }}
        >
          <p style={{ marginBottom: 12 }}>
            Au-delà de sa mission académique, l'université valorise la vie culturelle et
            sportive à travers diverses activités qui renforcent la cohésion et l'épanouissement
            de sa communauté.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://ulbo.gov.bf/ulbo-ufr-ss-presentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 13 }}
            >
              🔗 Présentation UFR-SS
            </a>
            <a
              href="https://ulbo.gov.bf/easy-customizable/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 13 }}
            >
              🔗 Site officiel ULBO
            </a>
          </div>
        </div>
      </div>

      <div className="cta-dark">
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Appel à communications
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 36,
              color: "white",
              marginBottom: 16,
            }}
          >
            Soumettez votre communication
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Date limite de soumission&nbsp;:{" "}
            <strong style={{ color: "var(--gold-light)" }}>
              15 Septembre 2026
            </strong>
            <br />
            Deux modalités disponibles : EasyChair ou email direct.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/soumission" className="btn-primary">
              📤 Soumettre maintenant
            </Link>
            <a
              href="mailto:journescientifiques.ulbo@gmail.com"
              className="btn-outline"
            >
              ✉️ Contacter le comité
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
