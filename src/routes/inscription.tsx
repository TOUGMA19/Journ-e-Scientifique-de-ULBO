import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inscription")({ component: Inscription });

const frais = [
  { title: "Enseignants-Chercheurs\n& Hospitalo-universitaires", price: "20 000", note: "Pour les enseignants-chercheurs, chercheurs et personnels hospitalo-universitaires.", badge: "Présentation obligatoire" },
  { title: "Professionnels", price: "20 000", note: "Pour les professionnels et praticiens souhaitant partager leurs expériences de terrain.", badge: "Communication acceptée", featured: true },
  { title: "Doctorants", price: "10 000", note: "Tarif réduit pour les doctorants inscrits dans un programme de thèse.", badge: "Justificatif requis" },
  { title: "Étudiants en Master", price: "5 000", note: "Tarif accessible pour les étudiants de niveau master souhaitant présenter leurs travaux.", badge: "Certificat étudiant requis" },
];

function Inscription() {
  return (
    <div className="section">
      <div className="section-label">Frais de participation</div>
      <h1 className="section-title">Inscription aux JS-ULBO 2026</h1>
      <p className="section-lead">
        Les frais de participation varient selon le statut du participant. La participation est
        possible en présentiel ou en ligne.
      </p>

      <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
        <div style={{ background: "var(--green-pale)", border: "1px solid var(--green)", borderRadius: 10, padding: "14px 20px", fontSize: 14, color: "var(--green)", fontWeight: 600 }}>
          ✅ En Présentiel
        </div>
        <div style={{ background: "#e3f2fd", border: "1px solid #1565c0", borderRadius: 10, padding: "14px 20px", fontSize: 14, color: "#1565c0", fontWeight: 600 }}>
          💻 En Ligne
        </div>
      </div>

      <div className="frais-grid">
        {frais.map((f) => (
          <div className={`frais-card${f.featured ? " featured" : ""}`} key={f.title}>
            <div className="frais-head">
              <h3 style={{ whiteSpace: "pre-line" }}>{f.title}</h3>
              <div className="frais-price">{f.price} <span>FCFA</span></div>
            </div>
            <div className="frais-body">
              <p>{f.note}</p>
              <span className="frais-badge">{f.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="payment-info">
        <h3>💳 Processus d'inscription</h3>
        <div className="payment-steps">
          <div className="payment-step">
            <div className="payment-step-num">1</div>
            <p><strong style={{ color: "white" }}>Soumission acceptée</strong><br />Attendez la notification d'acceptation de votre communication</p>
          </div>
          <div className="payment-step">
            <div className="payment-step-num">2</div>
            <p><strong style={{ color: "white" }}>Règlement des frais</strong><br />Procédez au paiement avant le 30 Octobre 2026 selon les instructions communiquées</p>
          </div>
          <div className="payment-step">
            <div className="payment-step-num">3</div>
            <p><strong style={{ color: "white" }}>Confirmation & Accréditation</strong><br />Recevez votre badge et accédez à toutes les activités de l'événement</p>
          </div>
        </div>
        <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, marginTop: 20, textAlign: "center" }}>
          Pour toute question relative à l'inscription, contactez : {" "}
          <a href="mailto:journescientifiques.ulbo@gmail.com" style={{ color: "var(--gold-light)", textDecoration: "none" }}>
            journescientifiques.ulbo@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
