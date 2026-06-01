import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/soumission")({ component: Soumission });

const timeline = [
  ["15 Mai 2026", "🚀 Lancement officiel de l'appel à communications"],
  ["10 Septembre 2026", "📤 Date limite de soumission des communications"],
  ["05 Octobre 2026", "📬 Notification d'acceptation aux auteurs"],
  ["10 Octobre 2026", "✏️ Retour des corrections et versions finales"],
  ["30 Octobre 2026", "💳 Date limite de paiement des frais de participation"],
  ["11 Novembre 2026", "📋 Publication du programme provisoire"],
  ["18 – 20 Novembre 2026", "🎓 Déroulement des Journées Scientifiques"],
];

function Soumission() {
  return (
    <div className="section">
      <div className="section-label">Appel à communications</div>
      <h1 className="section-title">Modalités de soumission</h1>
      <p className="section-lead">
        Deux options de soumission sont disponibles. Veillez à respecter les normes de rédaction
        avant tout envoi.
      </p>

      <div
        style={{
          marginTop: 32,
          marginBottom: 48,
          padding: "36px 32px",
          borderRadius: 20,
          background: "linear-gradient(135deg, var(--green) 0%, #0a2e18 100%)",
          color: "white",
          boxShadow: "0 20px 50px -20px rgba(10,46,24,.55)",
          border: "2px solid var(--gold)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "var(--gold)",
            color: "#1a1a1a",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 999,
            marginBottom: 14,
          }}
        >
          ⚠️ À télécharger avant toute soumission
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 32,
            lineHeight: 1.15,
            marginBottom: 10,
            color: "white",
          }}
        >
          Modèle officiel de résumé — JS-ULBO 2026
        </h3>
        <p style={{ color: "rgba(255,255,255,.85)", fontSize: 16, lineHeight: 1.6, marginBottom: 24, maxWidth: 720 }}>
          L'utilisation du <strong style={{ color: "var(--gold-light, #ffd56b)" }}>modèle officiel</strong> est
          <strong> obligatoire</strong>. Tout résumé soumis hors gabarit (Word ou LaTeX) sera automatiquement
          rejeté par le comité scientifique.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            href="/downloads/template-resume-js-ulbo-2026.docx"
            download
            className="btn-primary"
            style={{
              background: "var(--gold)",
              color: "#1a1a1a",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 24px",
            }}
          >
            ⬇️ Télécharger le modèle Word (.docx)
          </a>
          <a
            href="/downloads/template-resume-js-ulbo-2026-latex.zip"
            download
            className="btn-outline"
            style={{
              borderColor: "white",
              color: "white",
              fontSize: 16,
              padding: "14px 24px",
            }}
          >
            ⬇️ Télécharger le modèle LaTeX (.zip)
          </a>
        </div>
      </div>




      <div className="soumission-grid">
        <div className="soumission-card">
          <div className="soumission-card-head">
            <h3>Option 1 — EasyChair</h3>
            <p>Soumission via la plateforme de gestion de conférences</p>
          </div>
          <div className="soumission-card-body">
            <p>
              Rendez-vous sur la plateforme EasyChair dédiée aux JS-ULBO 2026 pour déposer votre
              résumé et votre communication complète.
            </p>
            <div className="format-rules">
              <h4>Instructions</h4>
              <ul>
                <li>Créez un compte EasyChair (ou connectez-vous)</li>
                <li>Sélectionnez le track correspondant à votre axe</li>
                <li>Renseignez les métadonnées de votre article</li>
                <li>Téléversez le fichier au format PDF</li>
              </ul>
            </div>
            <a href="https://easychair.org/my/conference?conf=jsulbo2026" target="_blank" rel="noreferrer" className="btn-primary">
              🔗 Accéder à EasyChair
            </a>
          </div>
        </div>

        <div className="soumission-card">
          <div className="soumission-card-head" style={{ background: "linear-gradient(135deg,#0a2e18,var(--green))" }}>
            <h3>Option 2 — Email direct</h3>
            <p>Soumission par envoi électronique au secrétariat</p>
          </div>
          <div className="soumission-card-body">
            <p>
              Vous pouvez soumettre directement votre communication par courrier électronique à
              l'adresse officielle des JS-ULBO 2026.
            </p>
            <div className="format-rules">
              <h4>Format de l'email</h4>
              <ul>
                <li>Objet : [JS-ULBO 2026] – Axe N° – Titre abrégé</li>
                <li>Nom complet, institution, statut</li>
                <li>Fichier joint : PDF ou Word (.docx)</li>
                <li>Copie de la page de titre incluse</li>
              </ul>
            </div>
            <a href="mailto:journescientifiques.ulbo@gmail.com" className="btn-primary">
              ✉️ journescientifiques.ulbo@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 16, padding: 36, marginTop: 40 }}>
        <div className="section-label">Normes de rédaction</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, marginTop: 16 }}>
          <div className="format-rules" style={{ margin: 0 }}>
            <h4>📄 Résumé</h4>
            <ul>
              <li>300 à 500 mots (Format Word)</li>
              <li>Times New Roman 11pt, interligne simple</li>
              <li>Objectif, méthode, résultats, conclusion</li>
              <li>4 mots-clés maximum</li>
              <li>3 à 5 références bibliographiques</li>
            </ul>
          </div>
          <div className="format-rules" style={{ margin: 0 }}>
            <h4>🌐 Langue</h4>
            <ul>
              <li>Français obligatoire pour le résumé</li>
              <li>Première lettre du titre en majuscule</li>
              <li>Pas de point à la fin du titre</li>
              <li>Tout résumé non conforme sera rejeté</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 60 }}>
        <div className="section-label">Calendrier</div>
        <div className="timeline" style={{ marginTop: 24 }}>
          {timeline.map(([date, title]) => (
            <div className="timeline-item" key={date}>
              <div className="timeline-date">{date}</div>
              <div className="timeline-title">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
