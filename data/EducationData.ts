import {IExperience} from '../model/IExperience';

export const formationData: IExperience[] = [
  {
    title_fr: "Mastère Architecture des Logiciels",
    title_en: "Master in Software Architecture",
    name: "ESGI - École Supérieure de Génie Informatique",
    location: "Paris 12ème",
    logoPath: "/school-logos/esgi.png",
    description_fr: [
      "Activités et associations : Participation à des associations ludiques et à des conférences organisées par l'école concernant par exemple le domaine du Web, la question de la sécurité des applications ou encore l'évolution des langages utilisés pour les développer.",
      "Projets de développement avec différents langages de programmation parmi lesquels Android, C++ et Spring."
    ],
    description_en: [
      "Activities and associations : Participation in recreational associations with other students and conferences organized by the school on subjects such as Web, applications security or the evolution of languages used to develop them.",
      "Coding projects with different programming languages such as Android, C++ and Spring."
    ],
    dateDebut: new Date(2015, 8, 1),
    dateFin: new Date(2017, 6, 31),
    skills: ["C#", "Java", "Spring Boot", "C++"],
    website: "https://www.esgi.fr"
  },
  {
    title_fr: "Bachelor Architecture des Logiciels",
    title_en: "Bachelor in Software Architecture",
    name: "ESGI - École Supérieure de Génie Informatique",
    location: "Paris 12ème",
    logoPath: "/school-logos/esgi.png",
    description_fr: [
      "Projets de développement avec différents langages de programmation parmi lesquels en Python, C, Java et SQL.",
      "Membre de l'association sportive de Crossfit de l'école."
    ],
    description_en: [
      "Coding projects with different programming languages such as Python, C, Java and SQL.",
      "Member of the school's crossfit association."
    ],
    dateDebut: new Date(2014, 8, 1),
    dateFin: new Date(2015, 5, 31),
    skills: ["Bases de données", "Java", "PHP", "Langage de modélisation unifié (UML)", "SQL"],
    website: "https://www.esgi.fr"
  },
  {
    title_fr: "Brevet de Technicien Supérieur",
    title_en: "High Level Technician Degree",
    name: "Lycée privé Saint Michel de Picpus",
    location: "Saint Mandé",
    description_fr: [
      "BTS Services Informatiques aux Organisations, Solutions Logicielles et Applications Métiers.",
      "Stages en entreprise (deux fois cinq semaines), développement d'applications Web interagissant avec une base de données dans le cadre des projets à présenter pour l'épreuve E4 (Conception et Maintenance de Solutions Informatiques).",
      "Ces deux années en BTS m'ont permis d'acquérir beaucoup de connaissances en matière de développement Web (PHP, SQL, HTML) notamment grâce aux deux stages faisant partie de la formation, mais aussi en développement logiciel (Java, C++)."
    ],
    description_en: [
      "High Level Technician degree in IT Services for Organizations, with a specialization in software solutions.",
      "Internships (two times five weeks), development of web applications interacting with a database to present for the final exam.",
      "Those two years allowed me to gain knowledge related to web development (PHP, SQL, HTML) thanks to two internships that were part of the program, but also in software development (Java, C++)."
    ],
    dateDebut: new Date(2012, 8, 1),
    dateFin: new Date(2014, 5, 31),
    skills: [],
    website: "https://www.saint-michel-de-saint-mande.fr/"
  },
  {
    title_fr: "Licence Mathématiques - Informatique",
    title_en: "Bachelor : IT and Mathematics",
    name: "Université Paris Descartes - Paris 5",
    location: "Paris 7ème",
    logoPath: "/school-logos/paris-5-descartes.png",
    description_fr: [
      "Première année de licence.",
      "Emploi étudiant durant le second semestre : enregistrement vidéo de certains cours pour les mettre en ligne sur la médiathèque de l'université.",
      "Course à pieds avec le service des sports de l'université."
    ],
    description_en: [
      "First year of bachelor.",
      "Student job during the second semester : video recording of certain classes in order to upload them to the university online library.",
      "Running with the university sports service."
    ],
    dateDebut: new Date(2011, 8, 1),
    dateFin: new Date(2012, 4, 31),
    skills: [],
    website: "https://u-paris.fr/"
  },
  {
    title_fr: "Baccalauréat Économique et Social",
    title_en: "Baccalaureate in Social and Economics",
    name: "Lycée privé Massillon",
    location: "Paris 4ème",
    description_fr: [`Activités extra-scolaires : Cours d'improvisation pendant un an.`],
    description_en: [`Activities : Improv during the second year.`],
    dateDebut: new Date(2008, 8, 1),
    dateFin: new Date(2011, 6, 1),
    skills: [],
    website: "https://ecolemassillon.com/"
  }
];

export default formationData;
