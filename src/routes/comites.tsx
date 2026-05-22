import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/comites")({
  head: () => ({
    meta: [
      { title: "Comités — JS-ULBO 2026" },
      { name: "description", content: "Comité d'organisation et comité scientifique des Journées Scientifiques JS-ULBO 2026." },
      { property: "og:title", content: "Comités — JS-ULBO 2026" },
      { property: "og:description", content: "Les membres du comité d'organisation et du comité scientifique du séminaire JS-ULBO 2026." },
    ],
  }),
  component: Comites,
});

type Member = { name: string; role: string; detail: string };

const organisation: Member[] = [
  { name: "Dr Emmanuel OUEDRAOGO", role: "Président du Comité d'Organisation", detail: "Maître de Conférences (MC) — Coordination générale de l'organisation du séminaire" },
  { name: "Dr Boukary BORO", role: "Vice-président du Comité d'Organisation", detail: "Maître de Conférences (MC)" },
  { name: "Dr Bila Adophe KYELEM", role: "Membre", detail: "Maître de Conférences (MC)" },
  { name: "Dr Issa OUEDRAOGO", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Dr Nongaba SAWADOGO", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Dr Corneille BAKOUAN", role: "Membre", detail: "" },
  { name: "Dr Salifou NIKIEMA", role: "Membre", detail: "" },
  { name: "Dr Titiaté NOUFE", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Dr Apollinaire TOUGMA", role: "Membre", detail: "" },
  { name: "Dr Stanislas SANFO", role: "Membre", detail: "" },
  { name: "Dr Ilassa OUEDRAOGO", role: "Membre", detail: "" },
  { name: "Dr Harouna WASONGMA", role: "Membre", detail: "" },
  { name: "Dr Issa OUEDRAOGO", role: "Membre", detail: "" },
];

const scientifique: Member[] = [
  { name: "Pr Souleymane OUEDRAOGO", role: "Président du Comité Scientifique", detail: "Supervision scientifique du séminaire" },
  { name: "Dr W. Olivier SAWADOGO", role: "Vice-président du Comité Scientifique", detail: "Maître de Conférences (MC)" },
  { name: "Dr Bila Adophe KYELEM", role: "Membre", detail: "Maître de Conférences (MC)" },
  { name: "Dr Emmanuel OUEDRAOGO", role: "Membre", detail: "Maître de Conférences (MC)" },
  { name: "Pr Adama OUEDA", role: "Membre", detail: "" },
  { name: "Pr Antoine BERE", role: "Membre", detail: "" },
  { name: "Pr Laurent T. OUEDRAOGO", role: "Membre", detail: "" },
  { name: "Pr Abdoulaye OUEDRAOGO", role: "Membre", detail: "" },
  { name: "Dr Issa OUEDRAOGO", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Dr Zanga OUATTARA", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Dr Nongaba SAWADOGO", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Pr André Marie SOUBEIGA", role: "Membre", detail: "" },
  { name: "Dr Corneille BAKOUAN", role: "Membre", detail: "" },
  { name: "Dr Salifou NIKIEMA", role: "Membre", detail: "" },
  { name: "Dr Titiaté NOUFE", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Dr Boukary BORO", role: "Membre", detail: "Maître de Conférences (MC)" },
  { name: "Dr Stéphane KY", role: "Membre", detail: "Maître de Conférences Agrégé (MCA)" },
  { name: "Dr Apollinaire TOUGMA", role: "Membre", detail: "" },
  { name: "Dr Stanislas SANFO", role: "Membre", detail: "" },
  { name: "Dr Brahima SORGHO", role: "Membre", detail: "Maître de Conférences (MC)" },
];

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();
}

function MemberCard({ m, accent }: { m: Member; accent: string }) {
  const isPresident = m.role.toLowerCase().includes("président");
  return (
    <div
      style={{
        background: "white",
        border: `1px solid ${isPresident ? accent : "var(--border-c)"}`,
        borderRadius: 14,
        padding: 20,
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        boxShadow: isPresident ? `0 4px 18px -8px ${accent}` : "none",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          flexShrink: 0,
          borderRadius: "50%",
          background: accent,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 0.5,
        }}
      >
        {initials(m.name)}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 700, color: "var(--green)", fontSize: 16, marginBottom: 4 }}>
          {m.name}
        </div>
        <div style={{ fontSize: 13, color: accent, fontWeight: 600, marginBottom: 6 }}>
          {m.role}
        </div>
        {m.detail && (
          <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
            {m.detail}
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ title, subtitle, members, accent }: { title: string; subtitle: string; members: Member[]; accent: string }) {
  return (
    <div style={{ marginTop: 56 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 6 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: "var(--green)", margin: 0 }}>
          {title}
        </h2>
        <span style={{ fontSize: 13, fontWeight: 600, color: accent, background: `${accent}1a`, padding: "6px 12px", borderRadius: 999 }}>
          {members.length} membres
        </span>
      </div>
      <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>{subtitle}</p>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {members.map((m) => (
          <MemberCard key={m.name} m={m} accent={accent} />
        ))}
      </div>
    </div>
  );
}

function Comites() {
  return (
    <div className="section">
      <div className="section-label">Organisation</div>
      <h1 className="section-title">Comités du Séminaire</h1>
      <p className="section-lead">
        Les femmes et les hommes qui font des Journées Scientifiques JS-ULBO 2026 une réalité.
      </p>

      <Section
        title="Comité d'Organisation"
        subtitle="Coordination et logistique du séminaire"
        members={organisation}
        accent="var(--green)"
      />

      <Section
        title="Comité Scientifique"
        subtitle="Évaluation des résumés et qualité scientifique"
        members={scientifique}
        accent="#b08d3a"
      />
    </div>
  );
}
