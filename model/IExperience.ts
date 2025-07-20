export type IExperience = {
  title_fr: string;
  title_en?: string;
  name: string;
  logoPath?: string;
  location: string;
  description_fr: string[];
  description_en?: string[];
  dateDebut: Date;
  dateFin?: Date;
  skills: string[];
  website: string;
};
