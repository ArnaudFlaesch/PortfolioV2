import type { IRepoIcon } from "~/model/IRepoIcon";

type IProjectData = {
  name: string;
  description: string;
  repoIcons: IRepoIcon[];
};

export const projectsInfo: IProjectData[] = [
  {
    name: "Dash-Web",
    description: "DASH.WEB.PROJECT.DESCRIPTION",
    repoIcons: [
      { name: "Angular 2", label: "Frontend" },
      { name: "Jest", label: "Frontend" },
      { name: "Sass", label: "Frontend" },
      { name: "Cypress", label: "Frontend", extension: "png" }
    ]
  },
  {
    name: "Dash-WebServices",
    description: "DASH.WEBSERVICES.PROJECT.DESCRIPTION",
    repoIcons: [
      { name: "Kotlin", label: "Backend" },
      { name: "Spring", label: "Backend" },
      { name: "JUnit", label: "Backend", extension: "png" },
      { name: "Gradle", label: "Backend", extension: "png" },
      { name: "Docker", label: "Tools" },
      { name: "PostgreSQL", label: "Tools" },
      { name: "Snyk", label: "Tools" }
    ]
  },
  {
    name: "CashManager",
    description: "CASHMANAGER.PROJECT.DESCRIPTION",
    repoIcons: [
      { name: "Angular 2", label: "Frontend" },
      { name: "Jest", label: "Frontend" },
      { name: "Sass", label: "Frontend" },
      { name: "Cypress", label: "Frontend", extension: "png" }
    ]
  },
  {
    name: "arnaudflaesch.github.io",
    description: "PORTFOLIO.PROJECT.DESCRIPTION",
    repoIcons: [
      { name: "VueJS", label: "Frontend", path: "vuejs", extension: "png" },
      { name: "Nuxt", label: "Frontend", extension: "png" },
      { name: "Sass", label: "Frontend" },
      { name: "Typescript", label: "Frontend" },
      { name: "Github Actions", label: "Tools", extension: "png", path: "github-actions" },
      { name: "Cypress", label: "Frontend", extension: "png" }
    ]
  }
];
