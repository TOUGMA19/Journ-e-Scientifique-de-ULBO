import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/axes")({ component: Axes });

const axes = [
  {
    n: 1,
    tag: "Sciences appliquées",
    title: "La recherche en sciences appliquées comme levier d'autonomie technologique et de l'innovation",
    text: "La recherche en sciences appliquées (mathématiques, physique, chimie, informatique, science de l'ingénieur, etc.) est un pilier pour l'expression et la satisfaction des besoins d'innovation technologique et d'autonomie industrielle. L'objectif de cet axe est de rompre avec le statut de « consommateur passif » de technologies importées pour devenir un « producteur de solutions » adaptées.",
  },
  {
    n: 2,
    tag: "Ressources naturelles",
    title: "La valorisation des ressources naturelles pour un développement durable",
    text: "La valorisation des ressources naturelles s'inscrit pleinement dans l'apport de la recherche à la souveraineté. Les sciences de la vie et de la terre permettent de mieux connaître et exploiter durablement la biodiversité, les sols et les plantes médicinales. L'intégration des savoirs locaux renforce l'appropriation des solutions et la résilience des communautés.",
  },
  {
    n: 3,
    tag: "Santé & Souveraineté",
    title: "La recherche en santé et souveraineté face aux défis des systèmes de santé actuels : pandémies et maladies réémergentes",
    text: "Cet axe met en lumière le rôle stratégique de la recherche en santé dans le renforcement de la souveraineté sanitaire des États face aux crises actuelles. Il s'agit de promouvoir une production locale de connaissances, de médicaments, de vaccins et de technologies de santé, en intégrant les savoirs endogènes et les innovations scientifiques.",
  },
  {
    n: 4,
    tag: "Sciences humaines & Langues",
    title: "Rôle de la littérature, des sciences humaines, sociales et des langues dans la construction d'une identité culturelle et juridique",
    text: "Cet axe met en évidence l'importance de la littérature, des sciences humaines et sociales, ainsi que du langage, dans la construction de l'identité culturelle et juridique des sociétés. Il souligne le rôle des langues nationales et des expressions culturelles dans la transmission des savoirs et des traditions.",
  },
  {
    n: 5,
    tag: "Économie & Finance",
    title: "L'endogénéité économique et financière dans un contexte d'interdépendance des économies",
    text: "Cet axe explore la capacité des économies à mobiliser leurs ressources internes pour assurer un développement autonome, tout en restant intégrées dans les échanges mondiaux. Il met l'accent sur le renforcement des systèmes financiers locaux et la réduction de la dépendance extérieure sans rompre avec les dynamiques d'interdépendance globale.",
  },
];

function Axes() {
  return (
    <div className="section">
      <div className="section-label">Axes thématiques</div>
      <h1 className="section-title">5 Axes de communication</h1>
      <p className="section-lead">
        Les communications soumises doivent s'inscrire dans l'un des cinq axes thématiques définis
        par le comité scientifique.
      </p>
      <div className="axes-list">
        {axes.map((a) => (
          <div className="axe-card" key={a.n}>
            <div className="axe-number">{a.n}</div>
            <div className="axe-content">
              <span className="axe-tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
