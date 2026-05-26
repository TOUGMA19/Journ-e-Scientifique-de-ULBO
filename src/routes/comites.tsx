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

const coordination: Member[] = [
  { name: "Pr Adama OUEDA", role: "Coordinateur des Journées Scientifiques", detail: "Président de l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Emmanuel OUEDRAOGO", role: "Président du Comité d'Organisation", detail: "VP-RCU de l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Boukary BORO", role: "Vice-président du Comité d'Organisation", detail: "Directeur de l'IFPM" },
];

const membresOrg: Member[] = [
  { name: "Dr Bila Adophe KYELEM", role: "Membre", detail: "" },
  { name: "Dr Issa OUEDRAOGO", role: "Membre", detail: "" },
  { name: "Dr Nongaba SAWADOGO", role: "Membre", detail: "" },
  { name: "Dr Salifou NIKIEMA", role: "Membre", detail: "" },
  { name: "Dr Titiaté NOUFE", role: "Membre", detail: "" },
  { name: "Dr Stanislas SANFO", role: "Membre", detail: "" },
  { name: "Dr Ilassa OUEDRAOGO", role: "Membre", detail: "" },
  { name: "Dr Harouna WASONGMA", role: "Membre", detail: "" },
  { name: "Dr Issa OUEDRAOGO", role: "Membre", detail: "" },
  { name: "Dr Salifou SANOGO", role: "Membre", detail: "" },
  { name: "Dr Rymyalegdo KIEBRE", role: "Membre", detail: "" },
  { name: "Dr Wendgoudi Appolinaire BEYI", role: "Membre", detail: "" },
  { name: "Dr Serge Stéphane KY", role: "Membre", detail: "" },
  { name: "Dr Moumoun DJASSIBO WOBA", role: "Membre", detail: "" },
  { name: "M. Madi KOMI", role: "Membre", detail: "" },
  { name: "M. Jean NASSA", role: "Membre", detail: "" },
  { name: "M. Sahidou KABORE", role: "Membre", detail: "" },
  { name: "M. Daouda SANON", role: "Membre", detail: "" },
];

const secretariat: Member[] = [
  { name: "Dr Corneille BAKOUAN", role: "Secrétariat", detail: "" },
  { name: "Dr Appolinaire TOUGMA", role: "Secrétariat", detail: "" },
  { name: "Dr Pauline W ZONGO", role: "Secrétariat", detail: "" },
  { name: "Dr Habi KY", role: "Secrétariat", detail: "" },
  { name: "M. Babi ZIDA", role: "Secrétariat", detail: "" },
  { name: "M. Youba DAO", role: "Secrétariat", detail: "" },
];

const protocole: Member[] = [
  { name: "Dr Gabiliga Noël THIOBIANO", role: "Commission protocole et accueil", detail: "" },
  { name: "M. Adramane TALL", role: "Commission protocole et accueil", detail: "" },
  { name: "Dr Tiorowe Nadine SOMDA/ILBOUDO", role: "Commission protocole et accueil", detail: "" },
  { name: "Dr Wendyam Joëlle Raymonde YOUGBARE", role: "Commission protocole et accueil", detail: "" },
];

const transport: Member[] = [
  { name: "M. Kader Ben OUEDRAOGO", role: "Commission transport", detail: "" },
  { name: "M. Lamine OUEDRAOGO", role: "Commission transport", detail: "" },
  { name: "M. Sompagnindi BOULOU", role: "Commission transport", detail: "" },
];

const sante: Member[] = [
  { name: "Dr Nongaba SAWADOGO", role: "Commission santé", detail: "" },
  { name: "Dr Camille SOMPOUGDOU", role: "Commission santé", detail: "" },
  { name: "Abdourahmane OUANGRE", role: "Commission santé", detail: "" },
];

const scientifique: Member[] = [
  { name: "Pr Souleymane OUEDRAOGO", role: "Président du Comité Scientifique", detail: "Professeur Titulaire à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr W. Olivier SAWADOGO", role: "Vice-président du Comité Scientifique", detail: "Maître de Conférences à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Pr Adama OUEDA", role: "Membre", detail: "Professeur Titulaire à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Bila Adophe KYELEM", role: "Membre", detail: "Maître de Conférences à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Emmanuel OUEDRAOGO", role: "Membre", detail: "Maître de Conférences à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Pr Antoine BERE", role: "Membre", detail: "Professeur Titulaire à l'Université Joseph KI-ZERBO" },
  { name: "Pr Laurent T. OUEDRAOGO", role: "Membre", detail: "Professeur Titulaire à l'Université Joseph KI-ZERBO" },
  { name: "Pr Abdoulaye OUEDRAOGO", role: "Membre", detail: "Professeur Titulaire à l'Université Joseph KI-ZERBO" },
  { name: "Dr Issa OUEDRAOGO", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr ZANGA OUATTARA", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Nongoba SAWADOGO", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Pr André Marie SOUBEIGA", role: "Membre", detail: "Professeur Titulaire à l'Université Joseph KI-ZERBO" },
  { name: "Dr Corneille BAKOUAN", role: "Membre", detail: "Maître assistant à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Salifou NIKIEMA", role: "Membre", detail: "Maître assistant à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Tiatité NOUFE", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Abdul Aziz Wendkuni OUANDAOGO", role: "Membre", detail: "Maître assistant à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Tahirou SANOU", role: "Membre", detail: "Maître assistant à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Boukary BORO", role: "Membre", detail: "Maître de Conférences à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Stéphane KY", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Stanislas SANFO", role: "Membre", detail: "Maître assistant à l'Université Lédéa Bernard OUEDRAOGO" },
  { name: "Dr Brahima SORGHO", role: "Membre", detail: "Maître de Conférences à l'Université Joseph KI-ZERBO" },
  { name: "Dr Moustapha SAWADOGO", role: "Membre", detail: "Maître de Conférences à l'Université Joseph KI-ZERBO" },
  { name: "Dr Moussa OUEDRAOGO", role: "Membre", detail: "Maître de Conférences à l'Université Nazi BONI" },
  { name: "Dr Soumaila GANSORE", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Joseph KI-ZERBO" },
  { name: "Dr Antoine YERBANGA", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Thomas SANKARA" },
  { name: "Dr Issa DIANDA", role: "Membre", detail: "Maître de Conférences Agrégé à l'Université Nazi BONI" },
  { name: "Pr Nourdine ALAA", role: "Membre", detail: "Professeur Titulaire à l'Université Cadi Ayyad" },
  { name: "Pr Said RAGHAY", role: "Membre", detail: "Professeur Titulaire à l'Université Cadi Ayyad" },
  { name: "Pr Issa ZABSONRE", role: "Membre", detail: "Professeur Titulaire à l'Université Joseph KI-ZERBO" },
  { name: "Pr Issa KABORE", role: "Membre", detail: "Professeur Titulaire à l'Université NAZI BONI" },
  { name: "Pr Arouna OUEDRAOGO", role: "Membre", detail: "Professeur Titulaire à l'Université Norbert ZONGO" },
  { name: "Pr Sié KAM", role: "Membre", detail: "Professeur Titulaire à l'Université Joseph KI-ZERBO" },
  { name: "Pr Adamah MESSAN", role: "Membre", detail: "Professeur Titulaire au 2IE" },
  { name: "Pr Ousmane COULIBALY", role: "Membre", detail: "Professeur Titulaire à l'Université Joseph KI-ZERBO" },
  { name: "Dr Boureima DIANDA", role: "Membre", detail: "Maître de Recherche à l'IRSAT/CNRST" },
  { name: "Dr Ali DOUMOUNIA", role: "Membre", detail: "Maître de Conférences à l'ENS" },
  { name: "Dr Germain OUEDRAOGO", role: "Membre", detail: "Maître de Conférences à l'Université Yembila Abdoulaye TOGUEYENI" },
  { name: "Dr Kossi B. IMBGA", role: "Membre", detail: "Maître de Conférences à l'Université Norbert ZONGO" },
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
  const isPresident = m.role.toLowerCase().includes("président") || m.role.toLowerCase().includes("coordinateur");
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
        {members.map((m, i) => (
          <MemberCard key={`${m.name}-${i}`} m={m} accent={accent} />
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
        title="Cellule de coordination"
        subtitle="Direction et supervision générale"
        members={coordination}
        accent="var(--green)"
      />

      <Section
        title="Membres du Comité d'Organisation"
        subtitle="Membres actifs du comité"
        members={membresOrg}
        accent="var(--green)"
      />

      <Section
        title="Secrétariat"
        subtitle="Gestion administrative et logistique"
        members={secretariat}
        accent="var(--green)"
      />

      <Section
        title="Protocole et accueil"
        subtitle="Commission chargée du protocole et de l'accueil"
        members={protocole}
        accent="var(--green)"
      />

      <Section
        title="Transport"
        subtitle="Commission chargée des déplacements"
        members={transport}
        accent="var(--green)"
      />

      <Section
        title="Santé"
        subtitle="Commission chargée des questions de santé"
        members={sante}
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
