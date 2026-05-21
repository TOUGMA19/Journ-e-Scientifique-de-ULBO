import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({ component: Contact });

const members = [
  { name: "Dr. Corneille BAKOUAN", email: "bakouancorneille@gmail.com", phone: "+226 71 91 93 40" },
  { name: "Dr. Tiatité NOUFE", email: "noufe.tiatite@gmail.com", phone: "+226 55 07 17 60" },
  { name: "Dr. Apollinaire TOUGMA", email: "appolinaire.tougma19@gmail.com", phone: "+226 75 20 07 93" },
];

function Contact() {
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ name: "", email: "", institution: "", statut: "", objet: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[JS-ULBO 2026] ${form.objet || "Message du site"}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nInstitution: ${form.institution}\nStatut: ${form.statut}\n\n${form.message}`
    );
    window.location.href = `mailto:journescientifiques.ulbo@gmail.com?subject=${subject}&body=${body}`;
    setToast("✅ Votre client mail s'ouvre pour finaliser l'envoi.");
    setTimeout(() => setToast(""), 4000);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <div className="section">
      <div className="section-label">Renseignements</div>
      <h1 className="section-title">Contactez-nous</h1>
      <p className="section-lead">
        Le comité d'organisation est à votre disposition pour toute question relative aux JS-ULBO 2026.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Comité d'organisation</h3>
          <div className="contact-cards">
            {members.map((m) => (
              <div className="contact-card" key={m.email}>
                <div className="contact-card-name">{m.name}</div>
                <a href={`mailto:${m.email}`} className="contact-detail">
                  <div className="contact-icon">✉️</div>{m.email}
                </a>
                <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="contact-detail">
                  <div className="contact-icon">📞</div>{m.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="info-box">
            <h4>📧 Soumission & Questions générales</h4>
            <p>Pour toute soumission ou demande d'information générale :</p>
            <a href="mailto:journescientifiques.ulbo@gmail.com">journescientifiques.ulbo@gmail.com</a>
          </div>

          <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 14, padding: 24, marginTop: 20 }}>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--dark)", marginBottom: 12 }}>
              🏛 Institution organisatrice
            </h4>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>
              <strong>Université Lédéa Bernard OUEDRAOGO (ULBO)</strong><br />
              Ouahigouya — Burkina Faso<br />
              Vèmes Journées Scientifiques — Novembre 2026
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <h3>Envoyer un message</h3>
          <div className="form-group">
            <label>Nom complet *</label>
            <input required value={form.name} onChange={set("name")} placeholder="Votre nom et prénom" />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input required type="email" value={form.email} onChange={set("email")} placeholder="votre@email.com" />
          </div>
          <div className="form-group">
            <label>Institution / Université</label>
            <input value={form.institution} onChange={set("institution")} placeholder="Votre institution" />
          </div>
          <div className="form-group">
            <label>Statut</label>
            <select value={form.statut} onChange={set("statut")}>
              <option value="">Sélectionnez votre statut</option>
              <option>Enseignant-Chercheur</option>
              <option>Chercheur</option>
              <option>Professionnel</option>
              <option>Doctorant(e)</option>
              <option>Étudiant(e) en Master</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label>Objet</label>
            <select value={form.objet} onChange={set("objet")}>
              <option value="">Choisissez un objet</option>
              <option>Question sur la soumission</option>
              <option>Frais de participation</option>
              <option>Programme</option>
              <option>Accréditation presse</option>
              <option>Partenariat</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea required value={form.message} onChange={set("message")} placeholder="Décrivez votre demande..." />
          </div>
          <button type="submit" className="form-submit">📤 Envoyer le message</button>
        </form>
      </div>

      {toast && <div className="toast show">{toast}</div>}
    </div>
  );
}
