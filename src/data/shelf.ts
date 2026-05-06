import type { ImageMetadata } from "astro";
import mistborn from "@/assets/posters/mistborn-thefinalempire.jpg";
import theBookOfClarence from "@/assets/posters/thebookofclarence.jpg";

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
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    cover: mistborn,
    rating: 5,
    tags: ["fantasy"],
  },
  // {
  //   title: "",
  //   author: "",
  //   cover: ,
  //   rating: 5,
  //   tags: [""],
  // },
];

export const films: Film[] = [
  {
    title: "The Book of Clarence",
    year: 2024,
    poster: theBookOfClarence,
    type: "film",
    rating: 5,
    tags: ["drama"],
  },
  // {
  //   title: "",
  //   year: 2024,
  //   poster: ,
  //   type: "film",
  //   rating: 5,
  //   tags: [""],
  // },
];