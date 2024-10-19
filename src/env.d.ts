/// <reference path="../.astro/types.d.ts" />

interface ISocial {
  name: string;
  icon: string;
  url: string;
}

interface INav {
  name: string;
  url: string;
  featured: boolean;
}

interface IProject {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  completed?: boolean;
}

interface ISkill {
  title: string;
  description: string;
}

interface ITech {
  name: string;
  url: string;
  img: string;
  alt: string;
}