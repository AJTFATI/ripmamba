import type { ImageMetadata } from "astro";
import mistborn from "@/assets/posters/mistborn-thefinalempire.jpg";
import theBookOfClarence from "@/assets/posters/thebookofclarence.jpg";
import wellofascension from "@/assets/posters/wellofascension.jpg";
import heroofages from "@/assets/posters/heroofages-mistborn3.jpg";

export type Book = {
  title: string;
  author: string;
  cover: ImageMetadata;
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
  postSlug?: string;
};

export type Film = {
  title: string;
  year: number;
  poster: ImageMetadata;
  type: "film" | "show";
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
  postSlug?: string;
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
    title: "Mistborn: The Well of Ascension",
    author: "Brandon Sanderson",
    cover: wellofascension,
    rating: 5,
    tags: ["fantasy"],
  }