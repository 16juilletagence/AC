/* =========================================================
   AVARAP CONNECT — données de démonstration (prototype statique)
   Aucune donnée réelle : tout est fictif, à des fins de maquette.
   ========================================================= */

const CURRENT_USER = {
  id: "u0",
  name: "Florent Salviato",
  initials: "FS",
  role: "En repositionnement professionnel",
  status: "recherche",
  region: "Île-de-France",
  groupe: "Promotion Paris — Septembre 2025",
  headline: "Ex-directeur marketing digital · Transition vers le conseil"
};

const MEMBERS = [
  { id: "u1", name: "Aurélie Ferrand", initials: "AF", role: "Directrice de projet en repositionnement", status: "recherche", region: "Île-de-France", groupe: "Paris — Sept. 2025", secteur: "Industrie", disponible: true, headline: "15 ans en gestion de projets industriels, vers un poste de direction opérationnelle." },
  { id: "u2", name: "Nathalie Hanot", initials: "NH", role: "Coach & Marraine bénévole", status: "poste", region: "Hauts-de-France", groupe: "Marraine référente", secteur: "Conseil / RH", disponible: true, headline: "Coach certifiée, anime deux groupes Avarap Hauts-de-France." },
  { id: "u3", name: "Isaure Delacroix", initials: "ID", role: "Marraine référente", status: "poste", region: "Île-de-France", groupe: "Pool Parrains/Marraines", secteur: "Finance", disponible: true, headline: "Ex-DAF, accompagne bénévolement depuis 3 ans." },
  { id: "u4", name: "Karim Benslimane", initials: "KB", role: "Fondateur, société de conseil", status: "entrepreneur", region: "Rhône-Alpes", groupe: "Lyon — Janv. 2024", secteur: "Tech / SI", disponible: true, headline: "A créé son cabinet de conseil SI après son parcours Avarap." },
  { id: "u5", name: "Claire Vasseur", initials: "CV", role: "Responsable communication", status: "poste", region: "Pays de la Loire", groupe: "Nantes — Mars 2024", secteur: "Communication", disponible: false, headline: "En poste depuis 8 mois suite à son groupe Avarap." },
  { id: "u6", name: "Thomas Grégoire", initials: "TG", role: "Cadre en recherche, < 30 ans", status: "recherche", region: "Nouvelle-Aquitaine", groupe: "Bordeaux Jeunes Cadres", secteur: "Marketing", disponible: true, headline: "Jeune diplômé en reconversion vers le product management." },
  { id: "u7", name: "Sophie Lambert", initials: "SL", role: "Consultante indépendante", status: "entrepreneur", region: "Provence-Alpes", groupe: "Aix-Marseille — Juin 2023", secteur: "RH", disponible: true, headline: "Accompagne les PME en transformation RH depuis sa création d'activité." },
  { id: "u8", name: "Marc Delannoy", initials: "MD", role: "Directeur des opérations", status: "poste", region: "Île-de-France", groupe: "Paris — Sept. 2025", secteur: "Logistique", disponible: false, headline: "Retrouvé un poste 4 mois après la fin de son groupe." },
  { id: "u9", name: "Julie Cormier", initials: "JC", role: "En reconversion vers l'entrepreneuriat social", status: "recherche", region: "Distanciel", groupe: "Distanciel — Oct. 2025", secteur: "Impact social", disponible: true, headline: "Construit un projet d'entreprise à mission autour de l'insertion." },
  { id: "u10", name: "Paul Rivière", initials: "PR", role: "Parrain bénévole", status: "poste", region: "Rhône-Alpes", groupe: "Parrain — Lyon", secteur: "Industrie", disponible: true, headline: "Anime un groupe Lyon depuis 2 ans après son propre parcours." },
  { id: "u11", name: "Émilie Roussel", initials: "ER", role: "Cheffe de produit", status: "poste", region: "Île-de-France", groupe: "Paris — Sept. 2025", secteur: "Tech / SI", disponible: true, headline: "Repositionnée sur un poste produit après 10 ans en gestion de projet." },
  { id: "u12", name: "Yann Le Goff", initials: "YL", role: "Repreneur d'entreprise", status: "entrepreneur", region: "Pays de la Loire", groupe: "Nantes — Mars 2024", secteur: "Artisanat", disponible: false, headline: "En cours de reprise d'une entreprise familiale du bâtiment." }
];

const GROUPS = [
  { id: "g1", name: "Paris — Promotion Septembre 2025", type: "Groupe de promotion", region: "Île-de-France", members: 11, description: "Groupe présentiel constitué de 11 cadres, animé par deux marraines bénévoles. Réunion hebdomadaire au 73 rue Hallé.", format: "Présentiel" },
  { id: "g2", name: "Distanciel — Octobre 2025", type: "Groupe de promotion", region: "National / distanciel", members: 12, description: "Groupe à distance ouvert à tout le territoire, même dynamique et efficacité que le présentiel.", format: "Distanciel" },
  { id: "g3", name: "Lyon — Janvier 2024", type: "Groupe de promotion", region: "Rhône-Alpes", members: 10, description: "Groupe Rhône-Alpes Auvergne, plusieurs anciens ont créé leur activité depuis.", format: "Présentiel" },
  { id: "g4", name: "Bordeaux Jeunes Cadres", type: "Groupe de promotion", region: "Nouvelle-Aquitaine", members: 9, description: "Parcours dédié aux cadres de moins de 30 ans, format ramassé dans le temps.", format: "Présentiel & distanciel" },
  { id: "g5", name: "Anciens Avarap — Reconversion tech", type: "Groupe thématique", region: "National", members: 34, description: "Communauté d'anciens partageant offres, veille et entraide autour des métiers tech et produit.", format: "En ligne" },
  { id: "g6", name: "Entrepreneurs & repreneurs Avarap", type: "Groupe thématique", region: "National", members: 27, description: "Échanges entre anciens ayant créé ou repris une entreprise après leur groupe.", format: "En ligne" },
  { id: "g7", name: "Pool Parrains & Marraines référents", type: "Groupe bénévoles", region: "National", members: 18, description: "Espace d'échange de pratiques entre bénévoles animateurs de groupes.", format: "Mensuel" }
];

const POSTS = [
  {
    id: "p1", authorId: "u2", type: "conseil",
    time: "Il y a 2 h",
    text: "Petit rappel avant nos réunions de rentrée : la confidentialité des échanges reste la base de la confiance dans nos groupes. Merci à tous les nouveaux Parrains/Marraines de le repréciser dès la première séance. Bienveillance et engagement 🙌",
    likes: 14, comments: 3, group: "Pool Parrains & Marraines référents"
  },
  {
    id: "p2", authorId: "u4", type: "opportunite",
    time: "Il y a 5 h",
    text: "Je recrute un(e) consultant(e) SI freelance pour une mission de 3 mois sur Lyon, démarrage septembre. Profil idéal : ancien cadre en transition vers le conseil. Message en MP si intéressé·e, je peux aussi mettre en relation avec mon réseau.",
    likes: 22, comments: 7, group: "Reconversion tech"
  },
  {
    id: "p3", authorId: "u5", type: "temoignage",
    time: "Hier",
    text: "Un an jour pour jour après la fin de mon groupe Avarap Nantes ! Je voulais partager que le poste que j'occupe aujourd'hui n'existait même pas dans mes recherches initiales — c'est le travail collectif du groupe qui m'a aidée à le voir. Merci à toute la promo Mars 2024 🌻",
    likes: 41, comments: 12, group: "Nantes — Mars 2024"
  },
  {
    id: "p4", authorId: "u7", type: "evenement",
    time: "Hier",
    text: "Rappel : apéro des anciens Aix-Marseille le 12 septembre à 19h. On sera une vingtaine, l'occasion de retrouver sa promo et d'accueillir les cadres du nouveau groupe. Inscriptions dans l'onglet Événements.",
    likes: 9, comments: 2, group: "Aix-Marseille — Juin 2023"
  },
  {
    id: "p5", authorId: "u10", type: "conseil",
    time: "Il y a 2 jours",
    text: "Pour les cadres en recherche actuellement : n'hésitez pas à solliciter le pool de Parrains référents pour un entretien blanc avant vos rendez-vous importants. C'est gratuit, confidentiel, et ça change souvent la donne.",
    likes: 18, comments: 4, group: "National"
  },
  {
    id: "p6", authorId: "u9", type: "question",
    time: "Il y a 3 jours",
    text: "Des anciens du groupe se sont-ils déjà lancés dans l'entrepreneuriat social / ESS après leur parcours Avarap ? Je cherche des retours d'expérience concrets sur le financement d'un premier projet.",
    likes: 6, comments: 9, group: "Distanciel — Oct. 2025"
  }
];

const EVENTS = [
  { id: "e1", title: "40 ans de l'Avarap — Soirée anniversaire", date: "2026-09-18", time: "19:00", region: "Île-de-France", format: "Présentiel", lieu: "Paris, 73 rue Hallé", attendees: 86, description: "Grande soirée nationale pour célébrer les 40 ans de l'association et ses 25 000 cadres accompagnés." },
  { id: "e2", title: "Apéro des anciens — Aix-Marseille", date: "2026-09-12", time: "19:00", region: "Provence-Alpes", format: "Présentiel", lieu: "Aix-en-Provence", attendees: 21, description: "Retrouvailles de promo et accueil du nouveau groupe." },
  { id: "e3", title: "Webinaire — Réussir sa reconversion vers le conseil", date: "2026-08-05", time: "12:30", region: "National", format: "Distanciel", lieu: "En ligne", attendees: 64, description: "Trois anciens Avarap devenus consultants indépendants partagent leur parcours." },
  { id: "e4", title: "Réunion d'échange de pratiques — Parrains/Marraines", date: "2026-08-14", time: "18:30", region: "National", format: "Distanciel", lieu: "En ligne", attendees: 30, description: "Rendez-vous mensuel du pool de bénévoles animateurs." },
  { id: "e5", title: "Journée portes ouvertes — Nouveau groupe Lyon", date: "2026-09-25", time: "18:00", region: "Rhône-Alpes", format: "Présentiel", lieu: "Lyon", attendees: 15, description: "Présentation de la méthode Avarap aux futurs participants." }
];

const OPPORTUNITIES = [
  { id: "o1", authorId: "u4", type: "Mission freelance", title: "Consultant(e) SI — mission 3 mois", location: "Lyon", postedAgo: "il y a 5 h", description: "Mission de transformation SI pour un groupe industriel, démarrage septembre. Profil orienté conseil apprécié." },
  { id: "o2", authorId: "u8", type: "Emploi salarié", title: "Directeur des opérations adjoint", location: "Île-de-France", postedAgo: "il y a 1 j", description: "Poste ouvert dans mon entreprise, secteur logistique. Je peux transmettre le CV directement au DRH." },
  { id: "o3", authorId: "u3", type: "Mise en relation", title: "Recherche profil DAF pour PME familiale", location: "Île-de-France", postedAgo: "il y a 2 j", description: "Un client de mon réseau cherche un DAF en temps partagé. Je fais l'intermédiaire pour un premier échange." },
  { id: "o4", authorId: "u7", type: "Recherche d'associé", title: "Associé(e) pour cabinet conseil RH", location: "Provence-Alpes / distanciel", postedAgo: "il y a 3 j", description: "Je cherche un ou une associée pour développer l'offre RH PME. Ouverte à un profil issu d'un groupe Avarap." },
  { id: "o5", authorId: "u12", type: "Mise en relation", title: "Recherche repreneur — activité artisanat", location: "Pays de la Loire", postedAgo: "il y a 4 j", description: "Je connais une entreprise artisanale en cession, dirigeant proche de la retraite. Contact possible via moi." }
];

const CONVERSATIONS = [
  {
    id: "c1", withId: "u2", unread: 2,
    messages: [
      { from: "them", text: "Bonjour Florent, merci pour votre message ! Oui, je serais ravie d'échanger sur votre projet de repositionnement.", time: "10:12" },
      { from: "me", text: "Merci beaucoup Nathalie. Auriez-vous 20 minutes cette semaine pour un premier échange ?", time: "10:20" },
      { from: "them", text: "Avec plaisir, jeudi 14h vous conviendrait ?", time: "10:24" },
      { from: "them", text: "Je vous envoie un lien de visio dans la foulée.", time: "10:24" }
    ]
  },
  {
    id: "c2", withId: "u4", unread: 0,
    messages: [
      { from: "me", text: "Bonjour Karim, je viens de voir votre annonce pour la mission SI freelance sur Lyon.", time: "Hier" },
      { from: "them", text: "Bonjour Florent, avec plaisir d'en discuter. Vous êtes disponible pour un appel demain ?", time: "Hier" },
      { from: "me", text: "Oui tout à fait, je vous propose 11h.", time: "Hier" }
    ]
  },
  {
    id: "c3", withId: "u11", unread: 0,
    messages: [
      { from: "them", text: "Salut Florent, contente de voir qu'on est dans la même promo Paris ! On se voit à la réunion de jeudi ?", time: "Lundi" },
      { from: "me", text: "Oui avec plaisir, à jeudi !", time: "Lundi" }
    ]
  },
  {
    id: "c4", withId: "u7", unread: 1,
    messages: [
      { from: "them", text: "Bonjour Florent, j'ai vu votre profil dans l'annuaire — votre parcours en marketing digital pourrait beaucoup m'intéresser pour un client. On échange ?", time: "Mar." }
    ]
  }
];

function getMember(id) {
  if (id === CURRENT_USER.id) return CURRENT_USER;
  return MEMBERS.find(m => m.id === id);
}

function statusLabel(status) {
  return { recherche: "En recherche", poste: "En poste", entrepreneur: "Entrepreneur·e" }[status] || status;
}
function statusBadgeClass(status) {
  return { recherche: "badge-blue", poste: "badge-green", entrepreneur: "badge-purple" }[status] || "badge-gold";
}
