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
  { name: "Dr Emmanuel OUEDRAOGO", role: "Président du Comité d'Organisation", detail: "Coordinateur principal — Responsable de la supervision générale de l'organisation du séminaire" },
  { name: "Dr Corneil BAKOUAN", role: "Membre", detail: "Budget, financement et Relations institutionnelles" },
  { name: "Dr Salifou NIKIEMA", role: "Membre", detail: "Budget, financement et Relations institutionnelles" },
  { name: "Dr Gérard ZONGO", role: "Membre", detail: "Budget, financement et Relations institutionnelles" },
  { name: "Dr M. DJASSIBO WOBA", role: "Membre", detail: "Budget, financement et Relations institutionnelles" },
  { name: "Dr Boyam Fabrice YAMEOGO", role: "Membre", detail: "Programme et Coordination scientifique" },
  { name: "Dr Appolinaire TOUGMA", role: "Membre", detail: "Programme et Coordination scientifique" },
  { name: "Dr Tiyamba VALEA", role: "Membre", detail: "Programme et Coordination scientifique" },
  { name: "Dr Charles Wend-Waoga TOUGMA", role: "Membre", detail: "Programme et Coordination scientifique" },
  { name: "Dr Seydou SORE", role: "Membre", detail: "Support administratif et Suivi et évaluation" },
  { name: "Dr Noufou SAWADOGO", role: "Membre", detail: "Logistique, communication, Infrastructure et accueil" },
  { name: "Dr Abdoulaye KABORE", role: "Membre", detail: "Logistique, communication, Infrastructure et accueil" },
  { name: "Dr Mohamed BANCE", role: "Membre", detail: "Logistique, communication, Infrastructure et accueil" },
  { name: "Dr Wilfried B. TIENIN", role: "Membre", detail: "Support administratif et Suivi et évaluation" },
  { name: "Blami KOTE", role: "Membre", detail: "Support administratif et Suivi et évaluation" },
];

const scientifique: Member[] = [
  { name: "Pr. Idrissa KABORE", role: "Président du Comité Scientifique", detail: "Université Nazi BONI (UNB)" },
  { name: "Pr. André CONSEIBO", role: "Membre", detail: "Université Norbert ZONGO (UNZ)" },
  { name: "Pr. Patricia ZOUNGRANA", role: "Membre", detail: "Université Thomas SANKARA (UTS)" },
  { name: "Pr. M. Françoise OUEDRAOGO", role: "Membre", detail: "Université Joseph Ki ZERBO (UJKZ)" },
  { name: "Pr. Somdouda SAWADOGO", role: "Membre", detail: "École Normale Supérieure (ENS)" },
  { name: "Pr. Boureima SANGARE", role: "Membre", detail: "Université Nazi BONI (UNB)" },
  { name: "Pr. Gilbert BAYILI", role: "Membre", detail: "Université Joseph Ki ZERBO (UJKZ)" },
  { name: "Pr. Arouna OUEDRAOGO", role: "Membre", detail: "Université Norbert ZONGO (UNZ)" },
  { name: "Pr. Kounhinir SOME", role: "Membre", detail: "Université Norbert ZONGO (UNZ)" },
  { name: "Pr. Frédéric OUEDRAOGO", role: "Membre", detail: "Université Norbert ZONGO (UNZ)" },
  { name: "Dr. Yaya TRAORE", role: "Membre", detail: "Université Joseph Ki ZERBO (UJKZ)" },
  { name: "Dr. Abdoulaye SERE", role: "Membre", detail: "Université Nazi BONI (UNB)" },
  { name: "Dr. Olivier SAWADOGO", role: "Membre (MC)", detail: "Université Lédéa Bernard OUEDRAOGO (ULBO)" },
  { name: "Dr. Bila Adolphe KYELEM", role: "Membre (MC)", detail: "Université Lédéa Bernard OUEDRAOGO (ULBO)" },
  { name: "Dr. Elisée GOUBA", role: "Membre", detail: "Université Joseph Ki ZERBO (UJKZ)" },
  { name: "Dr. Etienne OUEDRAOGO", role: "Membre (MC)", detail: "Université Norbert ZONGO (UNZ)" },
  { name: "Dr. F. Victorien OUEDRAOGO", role: "Membre (MC)", detail: "Université Joseph Ki ZERBO (UJKZ)" },
  { name: "Dr. Abdoulaye COMPAORE", role: "Membre (MC)", detail: "Université Norbert ZONGO (UNZ)" },
  { name: "Dr. Abdoulaye SIMPORE", role: "Membre (MC)", detail: "Université Yembila Abdoulaye TOGUYENI (UYAT)" },
  { name: "Dr. Ibrahim NONKANE", role: "Membre (MC)", detail: "Université Thomas SANKARA (UTS)" },
  { name: "Dr. Emmanuel OUEDRAOGO", role: "Membre", detail: "" },
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
