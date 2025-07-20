import { IExperience } from "../../arnaudflaesch.github.io/model/IExperience";

export const jobData: IExperience[] = [
  {
    title_fr: "Développeur d'applications",
    title_en: "Software Developer",
    dateDebut: new Date(Date.parse("2024-06-17")),
    name: "Institut Pasteur",
    location: "Paris 15ème, France",
    logoPath: "/company-logos/institut-pasteur.svg",
    description_fr: ["Développeur d'applications chez l'Institut Pasteur à Paris."],
    description_en: ["Software Developer at Institut Pasteur in Paris."],

    description_fr: [
      "Réalisation de projets internes chez la DSI de l'Institut Pasteur.",
      "",
      "Environnement technique : Spring Boot 3, Kotlin, Angular 19 et Postgresql.",
      "",
      "Participation aux 20km de Paris 2024 avec l'entreprise."
    ],
    description_en: [
      "Development of internal projects at the IT department of the Institut Pasteur.",
      "",
      "Technical environnement : Spring Boot 3, Kotlin, Angular 19 and Postgresql.",
      "",
      "Participation to the 2024 20km of Paris with the company."
    ],
    
    skills: [],
    website: "https://www.pasteur.fr"
  },
  {
    title_fr: "Développeur backend Java",
    title_en: "Java backend developer",
    dateDebut: new Date(Date.parse("2021-08-02")),
    dateFin: new Date(Date.parse("2024-05-24")),
    name: "Publicis Sapient France",
    location: "Paris 20ème, France",
    logoPath: "/company-logos/publicis-sapient.png",
    description_fr: [
      "Développements sur la partie backend d'une application e-commerce dans une équipe agile d'une dizaine de personnes avec le framework SAFe.",
      "",
      "• Développement de nouveaux endpoints permettant de récupérer la liste des produits déjà achetés par un utilisateur, les commandes et la liste des bons de livraisons associés aux différentes commandes.",
      "• Écriture des tests unitaires et des tests d'intégrations associés aux différents développements.",
      "",
      "Environnement technique : Spring Boot, Java 11, Kafka, microservices et MongoDB.",
      "",
      "Participation à l'édition 2023 de la No Finish Line Paris avec une équipe de coureurs de l'entreprise."
    ],
    description_en: [
      "Developments on the backend side of an e-commerce application in an agile team of ten people with the SAFe framework.",
      "",
      "• Development of new endpoints allowing to get the list of already purchased products, the list of orders, and the list of delivery notes related to orders.",
      "• Writing of unit and integration tests related to the developed features.",
      "",
      "Technical environment : Spring Boot, Java 11, Kafka, microservices and MongoDB.",
      "",
      "Participation to the 2023 edition of the No Finish Line Paris with a team of runners from the company."
    ],
    skills: [],
    website: "https://www.publicissapient.fr/"
  },
  {
    title_fr: "Développeur fullstack",
    title_en: "Fullstack developer",
    dateDebut: new Date(Date.parse("2019-05-01")),
    dateFin: new Date(Date.parse("2021-04-30")),
    name: "tbMaestro",
    location: "Montréal, Canada",
    logoPath: "/company-logos/tbmaestro.png",
    description_fr: [
      "Volontariat International en Entreprise dans une équipe agile (Scrum) de 6 développeurs et un Product Owner.",
      "Réalisation de développements sur l'application SaaS de l'entreprise :",
      "",
      "• Création du module de gestion des contrôles liés aux actifs.",
      "• Création du module de génération d'un compte rendu envoyé par mail contenant les différentes actions effectuées par les utilisateurs (création, modification et suppression d'un actif par exemple) durant une période configurable.",
      "• Module de gestion des espaces liés à un actif.",
      "• Migration des tests End-to-End de l'application de Selenium vers Cypress.",
      "",
      "Environnement technique : Angular 10, Kotlin, Sass, Spring Boot, PostgreSQL, MongoDB, Docker et Jenkins."
    ],
    description_en: [
      "International Internship Program in an agile team (Scrum) of 6 developers and a Product Owner.",
      "Development of new features on the company's SaaS application :",
      "",
      "• Creation of a module that manages checks related to real estate assets.",
      "• Creation of a module that generates a mail report containing the different actions done by the users (adding, updating and deleting an asset for example) during a configurable period.",
      "• Module that manages the spaces related to a real estate asset.",
      "• Migration of the End To End tests of the application from Selenium to Cypress.",
      "",
      "Technical environment : Angular 10, Kotlin, Sass, Spring Boot, PostgreSQL, MongoDB, Docker and Jenkins."
    ],
    skills: ["Angular 2", "Java 8", "SQL", "Spring Boot"],
    website: "https://www.tbmaestro.com/"
  },
  {
    title_fr: "Développeur fullstack",
    title_en: "Fullstack developer",
    dateDebut: new Date(Date.parse("2017-09-18")),
    dateFin: new Date(Date.parse("2019-04-12")),
    name: "Sopra Steria",
    location: "Montreuil, France",
    logoPath: "/company-logos/sopra-steria.png",
    description_fr: [
      "Développement d'une application Web permettant de répertorier et gérer les limitations de vitesses sur les tronçons des routes de France.",
      "Équipe de 4 développeurs, une Scrum Master et un Product Owner.",
      "",
      "• Création d'interfaces, affichage et gestion des données cartographiques côté front-end.",
      "• Développement de la partie back-end et gestion de la base de données.",
      "• Développement des tests unitaires.",
      "",
      "Environnement technique : Java (Struts 2), JQuery, SQL, CSS (Sass) et OpenLayers.",
      "",
      "Participation à l'édition 2017 de l'Ekiden de Paris avec d'autres coureurs de l'entreprise."
    ],
    description_en: [
      "Development of a web application allowing to list and manage speed limitations on french roads.",
      "Team of 4 developers, one Scrum Master and one Product Owner.",
      "",
      "• Development of interfaces, display and management of cartographic data on the frontend side.",
      "• Development on the backend side and management of the database.",
      "• Writing of unit tests.",
      "",
      "Technical environment : Java (Struts 2), JQuery, SQL, CSS (Sass) and OpenLayers.",
      "",
      "Participation to the 2017 edition of the Paris Ekiden with other runners of the company."
    ],
    skills: [
      "JavaScript ES6",
      "Java 8",
      "Tomcat 9",
      "Webpack",
      "Gulp",
      "CSS",
      "JQuery",
      "Sonar",
      "Jenkins",
      "Struts 2",
      "SQL",
      "Spring Boot",
      "Sass",
      "Git"
    ],
    website: "https://www.soprasteria.com/fr"
  },
  {
    title_fr: "Développeur Java",
    title_en: "Java developer",
    name: "Franprix - Leader Price",
    dateDebut: new Date(Date.parse("2016-9-01")),
    dateFin: new Date(Date.parse("2017-08-31")),
    location: "Chennevières sur Marne, France",
    logoPath: "/company-logos/franprix.png",
    description_fr: [
      "Contrat de professionnalisation en alternance dans le cadre de ma deuxième année de mastère à l'ESGI au sein du service dédié au portail magasin et à l'intranet du siège.",
      "Développement et maintenance d'outils à destination des services RH (entretiens annuels) et également du personnel chargé de la sécurité des magasins (gestion des incidents).",
      "",
      "Environnement technique : Java J2EE (JSF 2, Vaadin, Liferay, Tomcat Server).",
      "Équipe agile de 6 personnes."
    ],
    description_en: [
      "Work-study contrat during my second year of master at ESGI in the service that manages the shop portal and the company's intranet.",
      "Development and maintenance of tools used by HR for anual interviews and also tools that help security personnel manage incidents related to shops.",
      "",
      "Technical environment : Java J2EE (JSF 2, Vaadin, Liferay, Tomcat Server).",
      "Agile team of 6 people."
    ],
    website: "https://www.franprix.fr/",
    skills: ["Java 7", "Vaadin 7", "Liferay", "JSF 2", "Tomcat 7", "SVN"]
  },
  {
    title_fr: "Développeur Web",
    title_en: "Web developer",
    name: "AB Cube",
    dateDebut: new Date(Date.parse("2015-10-01")),
    dateFin: new Date(Date.parse("2016-08-31")),
    location: "Montreuil, France",
    logoPath: "/company-logos/ab-cube.png",
    description_fr: [
      "Contrat de professionnalisation en alternance dans le cadre de ma première année de mastère à l'ESGI.",
      "Réalisation d'un outil de gestion des produits pour les laboratoires pharmaceutiques : ajout, import et export au format XML pour envoi aux autorités pharmaceutiques (EMA)."
    ],
    description_en: [
      "Work-study contract during my first year of master at ESGI.",
      "Development of a tool that manages products for phamarceutical laboratories : creation, import and XML export to pharmaceutical authorities (EMA)."
    ],
    website: "https://www.ab-cube.com/",
    skills: ["PHP", "SQL", "JavaScript", "Git"]
  },
  {
    title_fr: "Développeur Java",
    title_en: "Java developer",
    name: "GMF Assurances",
    dateDebut: new Date(Date.parse("2015-05-15")),
    dateFin: new Date(Date.parse("2015-07-31")),
    location: "Levallois-Perret, France",
    logoPath: "/company-logos/gmf.jpg",
    description_fr: [
      "Stage de trois mois dans le cadre de ma troisième année à l'ESGI : participation à la refonte graphique d'une application web d'entreprise dans une équipe de 10 personnes.",
      "Le but était de changer les pages web en respectant les nouvelles normes graphiques et de remplacer le code de l'ancien framework utilisé (Struts 1) par celui du framework JSF 2."
    ],
    description_en: [
      "Three-month internship during my third year at ESGI : working on the UI redesign of an enterprise web application in a team of ten people.",
      "The goal was to update the web pages to respect the new UI norms and to replace the old framework (Struts 1) with JSF 2."
    ],
    website: "https://www.gmf.fr/",
    skills: ["Java 7", "JSF 2", "Struts 1", "Git"]
  },
  {
    title_fr: "Développeur Java / JS",
    title_en: "Java / JS developer",
    name: "La Réserve Paris",
    dateDebut: new Date(Date.parse("2014-06-02")),
    dateFin: new Date(Date.parse("2014-07-31")),
    location: "Paris 8ème, France",
    logoPath: "/company-logos/la-reserve-paris.jpg",
    description_fr: [
      "Stage de deux mois : développement d'une application web en PHP, SQL et JavaScript dont l'objectif était d'enregistrer des événements concernant les clients d'un hôtel ainsi que la gestion automatique d'un fichier permettant d'actualiser la liste des clients.",
      "",
      "Équipe de 2 personnes.",
      "Environnement technique : PHP, MySQL, JavaScript et CSS."
    ],
    description_en: [
      "Two-month internship : development of a web application with PHP, SQL and JavaScript whose goal was to record events related to an hotel's customers as well as managing automatically a file that can actualize the list of customers.",
      "",
      "Team of two people.",
      "Technical environment : PHP, MySQL, JavaScript and CSS."
    ],
    skills: ["PHP", "SQL", "JavaScript", "JQuery", "CSS"],
    website: "https://www.lareserve-paris.com/"
  }
];

export default jobData;
