export type IRepository = {
  createdAt: Date;
  description: string;
  name: string;
  pushedAt: Date;
  url: string;
  primaryLanguage?: {
    name: string;
  };
  languages: ILanguagesData;
};

export type IEdge = {
  node: {
    name: string;
    color: string;
  };
  size: number;
};

type ILanguagesData = {
  edges: IEdge[];
  totalSize: number;
};
