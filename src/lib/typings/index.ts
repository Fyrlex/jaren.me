export interface ProjectOptions {
  title: string;
  src: string;
  img: string;
  url: string;
  description: string;
  tools: string;
}

export interface HobbyOptions {
  title: string;
  description?: string;
  img: string;
  date: string;
}

export interface HobbyPageOptions {
  title: string;
  subtitle?: string;
  description: string;
  data: HobbyOptions[];
}

export interface HobbyTextOptions {
  title: string;
  description?: string;
  date: string;
}

export interface MetadataOptions {
  url: string;
}
