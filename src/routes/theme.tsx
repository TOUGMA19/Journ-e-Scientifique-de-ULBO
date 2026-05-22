import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/theme")({ component: Theme });

function Theme() {
  const objectives = [
    ["🧠", "Encourager les approches interdisciplinaires pour répondre aux défis complexes du développement"],
    ["🏛", "Proposer des recommandations pour l'élaboration de politiques publiques axées sur la souveraineté"],
    ["🌍", "Identifier des stratégies concrètes pour renforcer la souveraineté technologique, sanitaire et économique"],
    ["💡", "Stimuler l'innovation adaptée aux réalités africaines et notamment au Burkina Faso"],
    ["🔗", "Favoriser les synergies entre sciences exactes, sciences de la vie, sciences humaines et sociales"],
    ["📖", "Valoriser les savoirs endogènes et les langues locales comme vecteurs de transmission de la science"],
  ];

  return (
    <div className="section">
      <div className="section-label">Thème général</div>
      <h1 className="section-title">Apport de la recherche à la<br />souveraineté et au développement endogène</h1>
      <p className="section-lead">
        Les JS-ULBO 2026 s'inscrivent dans une dynamique de repositionnement de la recherche
        comme moteur central de l'autonomie africaine.
      </p>

      <div className="context-grid">
        <div className="context-text">
          <p>
            Depuis plusieurs décennies, les pays africains sont confrontés à des défis structurels
            majeurs liés à leur développement : dépendance technologique, vulnérabilité des systèmes
            de santé, faible transformation locale des ressources naturelles, fragilité des modèles
            économiques, et marginalisation des savoirs endogènes dans les politiques publiques.
          </p>
          <p>
            Dans un contexte mondial marqué par des crises multiples, la question de la souveraineté
            multidimensionnelle s'impose avec acuité. L'Agenda 2063 de l'Union Africaine définit une
            trajectoire claire pour « l'Afrique que nous voulons », une Afrique dont le développement
            est piloté par ses propres ressources et son génie créateur.
          </p>
          <p>
            Au Burkina Faso, le Plan National de Développement (PND 2026-2030) érige en priorité
            absolue la promotion d'une économie résiliente, fondée sur la valorisation des ressources
            locales et l'innovation technologique.
          </p>
          <p>
            En s'inspirant de la pensée de Joseph Ki-Zerbo — « on ne développe pas, on se développe » —
            et des idéaux de Thomas Sankara prônant l'autonomie, le Burkina Faso a fait le choix
            audacieux de l'endogénéité.
          </p>
        </div>
        <div>
          <div className="highlight-box">
            <h3>🎯 Objectif général</h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.85)", lineHeight: 1.75, marginBottom: 20 }}>
              Contribuer à la réflexion et à la production de solutions innovantes visant à renforcer
              la souveraineté et le développement endogène en Afrique et au Burkina Faso en particulier,
              en s'appuyant sur la recherche scientifique et les savoirs locaux.
            </p>
            <ul>
              <li>Valoriser les savoirs endogènes et les langues locales</li>
              <li>Favoriser les synergies interdisciplinaires</li>
              <li>Promouvoir la valorisation des ressources locales</li>
              <li>Identifier des stratégies de renforcement de la souveraineté</li>
              <li>Stimuler l'innovation adaptée aux réalités africaines</li>
              <li>Proposer des recommandations pour les politiques publiques</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 60 }}>
        <div className="section-label">Objectifs spécifiques</div>
        <div className="objectives-grid" style={{ marginTop: 20 }}>
          {objectives.map(([icon, text]) => (
            <div className="objective-card" key={text}>
              <div className="objective-icon">{icon}</div>
              <h4>{text}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
