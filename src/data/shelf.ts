import type { ImageMetadata } from "astro";
import mistborn-thefinalempire from "@/assets/posters/Mistborn-TheFinalEmpire.jpg";
import thebookofclarence from "@assets/posters/thebookofclarence.jpg";
import conclave from "@/assets/posters/conclave.jpg";
import theRoad from "@/assets/posters/the-road.jpg";
import dune from "@/assets/posters/dune.jpg";
import meditations from "@/assets/posters/meditations.jpg";

export type Book = {
  title: string;
  author: string;
  cover: ImageMetadata;
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
};

export type Film = {
  title: string;
  year: number;
  poster: ImageMetadata;
  type: "film" | "show";
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
};

export const books: Book[] = [
  {
    title: "The Road",
    author: "Cormac McCarthy",
    cover: theRoad,
    rating: 5,
    tags: ["fiction"],
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover: dune,
    rating: 5,
    tags: ["sci-fi"],
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    cover: meditations,
    rating: 5,
    tags: ["philosophy"],
  },
];

export const films: Film[] = [
  {
    title: "Nosferatu",
    year: 2024,
    poster: nosferatu,
    type: "film",
    rating: 5,
    tags: ["horror"],
  },
  {
    title: "The Brutalist",
    year: 2024,
    poster: brutalist,
    type: "film",
    rating: 5,
    tags: ["drama"],
  },
  {
    title: "Conclave",
    year: 2024,
    poster: conclave,
    type: "film",
    rating: 4,
    tags: ["thriller"],
  },
];