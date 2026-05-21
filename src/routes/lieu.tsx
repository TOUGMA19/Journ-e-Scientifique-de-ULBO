import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lieu")({
  head: () => ({
    meta: [
      { title: "Lieu & Accès — JS-ULBO 2026" },
      { name: "description", content: "Lieu du séminaire JS-ULBO 2026 : Université Lédéa Bernard OUEDRAOGO, Ouahigouya, Burkina Faso. Adresse, accès et hébergement." },
      { property: "og:title", content: "Lieu & Accès — JS-ULBO 2026" },
      { property: "og:description", content: "Toutes les informations pratiques pour vous rendre au séminaire JS-ULBO 2026." },
    ],
  }),
  component: Lieu,
});

function Lieu() {
  return (
    <div className="section">
      <div className="section-label">Lieu & Accès</div>
      <h1 className="section-title">Lieu du Séminaire</h1>
      <p className="section-lead">
        Toutes les informations pratiques pour vous rendre au séminaire.
      </p>

      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 32 }}>
        <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 14, padding: 28 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "var(--green)", marginBottom: 8 }}>
            Université Lédéa Bernard OUÉDRAOGO
          </h3>
          <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>
            Département de Mathématiques — Organisateur du Séminaire
          </p>

          <h4 style={{ fontWeight: 700, marginBottom: 8 }}>📍 Adresse complète</h4>
          <p style={{ lineHeight: 1.8, marginBottom: 20 }}>
            Université Lédéa Bernard Ouédraogo (ULBO)<br />
            Département de Mathématiques<br />
            BP 400, Ouahigouya<br />
            Province du Yatenga, Région du Nord<br />
            Burkina Faso
          </p>

          <h4 style={{ fontWeight: 700, marginBottom: 8 }}>🧭 Coordonnées GPS</h4>
          <p style={{ lineHeight: 1.8 }}>
            13.5833° Nord, 2.4216° Ouest<br />
            Altitude : environ 300 mètres
          </p>
        </div>

        <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 14, padding: 28 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "var(--green)", marginBottom: 16 }}>
            🗺️ Localisation
          </h3>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid var(--border-c)", marginBottom: 16 }}>
            <iframe
              title="Carte ULBO Ouahigouya"
              src="https://www.google.com/maps?q=Universit%C3%A9+L%C3%A9d%C3%A9a+Bernard+Ou%C3%A9draogo+Ouahigouya&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <a
            href="https://www.google.com/maps?q=Universit%C3%A9+L%C3%A9d%C3%A9a+Bernard+Ou%C3%A9draogo+Ouahigouya"
            target="_blank"
            rel="noopener noreferrer"
            className="form-submit"
            style={{ display: "inline-block", textDecoration: "none", textAlign: "center" }}
          >
            🌍 Ouvrir dans Google Maps
          </a>
        </div>
      </div>

      <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 14, padding: 28, marginTop: 24 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "var(--green)", marginBottom: 16 }}>
          🚗 Comment s'y rendre ?
        </h3>
        <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Depuis Ouagadougou</h4>
        <ul style={{ lineHeight: 1.9, paddingLeft: 20 }}>
          <li>Route Nationale 2 vers le Nord (180 km)</li>
          <li>Durée : environ 3 heures en voiture</li>
          <li>Bus de transport en commun disponible</li>
        </ul>
      </div>

      <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 14, padding: 28, marginTop: 24 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "var(--green)", marginBottom: 16 }}>
          🏛 À propos de Ouahigouya
        </h3>
        <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
          Quatrième plus grande ville du Burkina Faso, Ouahigouya est la capitale de la Région du
          Nord. Ville historique et culturelle, elle est réputée pour son artisanat, ses marchés
          traditionnels et sa riche histoire liée à l'empire Mossi.
        </p>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div><strong>Population :</strong> ~100 000 habitants</div>
          <div><strong>Climat :</strong> Tropical sec</div>
          <div><strong>Langue principale :</strong> Mooré</div>
        </div>
      </div>

      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: 24 }}>
        <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 14, padding: 28 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "var(--green)", marginBottom: 16 }}>
            🛏️ Hébergement
          </h3>
          <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
            Plusieurs options d'hébergement sont disponibles à Ouahigouya, allant des hôtels de
            standing aux auberges économiques.
          </p>
          <ul style={{ lineHeight: 1.9, paddingLeft: 20 }}>
            <li>Hôtels recommandés proches de l'université</li>
            <li>Réservations conseillées à l'avance</li>
            <li>Liste détaillée sur demande</li>
          </ul>
        </div>

        <div style={{ background: "white", border: "1px solid var(--border-c)", borderRadius: 14, padding: 28 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "var(--green)", marginBottom: 16 }}>
            🕒 Horaires du séminaire
          </h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Le séminaire se déroulera sur deux jours avec un programme complet de conférences,
            sessions parallèles et moments d'échange.
          </p>
          <div style={{ marginBottom: 12 }}>
            <strong>18 novembre 2026</strong>
            <div style={{ color: "var(--text-muted)" }}>8h30 — 16h30 : Conférences plénières</div>
          </div>
          <div>
            <strong>20 novembre 2026</strong>
            <div style={{ color: "var(--text-muted)" }}>8h30 — 16h30 : Sessions parallèles et clôture</div>
          </div>
        </div>
      </div>

      <div className="info-box" style={{ marginTop: 24 }}>
        <h4>ℹ️ Informations importantes pour les participants</h4>
        <p><strong>Arrivée sur place</strong></p>
        <ul style={{ lineHeight: 1.9, paddingLeft: 20, marginBottom: 12 }}>
          <li>Accueil et remise des badges à l'entrée</li>
        </ul>
        <p><strong>Recommandations</strong></p>
        <ul style={{ lineHeight: 1.9, paddingLeft: 20 }}>
          <li>Prévoir une tenue adaptée au climat tropical sec</li>
          <li>Arriver 45 minutes avant le début des sessions</li>
        </ul>
      </div>
    </div>
  );
}
