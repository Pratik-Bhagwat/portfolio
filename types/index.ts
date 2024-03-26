import { StaticImageData } from "next/image";

type Techstack = {
  id: number;
  name: string;
  image: StaticImageData;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[];
  techstacks: Techstack[];
  completed: boolean;
  URL: string;
  videoURL: string;
};
