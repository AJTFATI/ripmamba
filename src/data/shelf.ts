import type { ImageMetadata } from "astro";
import mistborn from "@/assets/posters/mistborn-thefinalempire.jpg";
import theBookOfClarence from "@/assets/posters/thebookofclarence.jpg";
import wellofascension from "@/assets/posters/wellofascension.jpg";
import heroofages-mistborn3 from "@assets/posters/wellofascension.jpg"

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
    title: "Mistborn",
    author: "Brandon Sanderson",
    cover: mistborn,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    cover: wellofascension, // ✅ fixed
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Hero Of Ages",
    author: "Brandon Sanderson",
    cover: "heroofages-mistborn3",
    rating: 5,
    tags: ["fantasy"],
  },
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
];