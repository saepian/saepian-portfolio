export interface Project {
  id: string;
  title: string;
  imageTitle?: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  featured: boolean;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  category: string;
  year: string;
}

export interface Participation {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  details?: string;
}

export interface AtmosphereParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}
