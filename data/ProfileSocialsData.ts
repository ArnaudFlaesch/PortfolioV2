interface ProfileSocialLink {
  name: string;
  link: string;
  imgPath: string;
  labelI18nCode: string;
}

import { credlyLink, scrumOrgLink, mediumLink, linkedinLink, stackOverflowLink, githubLink } from "~/data/SiteData";

export const profileSocialLinks: ProfileSocialLink[] = [
  {
    name: "LinkedIn",
    link: linkedinLink,
    imgPath: "/icons/socials/linkedin-icon.png",
    labelI18nCode: "LINKEDIN.PROFILE"
  },
  {
    name: "GitHub",
    link: githubLink,
    imgPath: "/icons/socials/github-icon.png",
    labelI18nCode: "GITHUB.PROFILE"
  },
  {
    name: "Scrum.org",
    link: scrumOrgLink,
    imgPath: "/icons/socials/scrum-org-icon.png",
    labelI18nCode: "SCRUM.ORG.PROFILE"
  },
  {
    name: "Certifications",
    link: credlyLink,
    imgPath: "/icons/socials/credly-icon.png",
    labelI18nCode: "CERTIFICATIONS"
  },
  {
    name: "Medium",
    link: mediumLink,
    imgPath: "/icons/socials/medium-icon.png",
    labelI18nCode: "MEDIUM.PROFILE"
  },
  {
    name: "Stack Overflow",
    link: stackOverflowLink,
    imgPath: "/icons/socials/stackoverflow-icon.png",
    labelI18nCode: "STACK.OVERFLOW.PROFILE"
  }
];
