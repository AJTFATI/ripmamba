import type { ImageMetadata } from "astro";
import mistborn from "@/assets/posters/mistborn-thefinalempire.jpg";
import theBookOfClarence from "@/assets/posters/thebookofclarence.jpg";
import wellofascension from "@/assets/posters/wellofascension.jpg";
import heroofages from "@/assets/posters/heroofages-mistborn3.jpg";
import alloyoflaw from "@/assets/posters/alloyoflaw-mistborn4.jpg";
import shadowsofself from "@/assets/posters/shadowsofself-mistborn5.jpg";
import bandsofmourning from "@/assets/posters/bandsofmourning-mistborn6.jpg";
import thelostmetal from "@/assets/posters/thelostmetal-mistborn7.jpg";
import yesteryear from "@/assets/posters/yesteryear.jpg";
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
  },
  {
    title: "Mistborn: The Hero of Ages",
    author: "Brandon Sanderson",
    cover: heroofages,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Mistborn: The Alloy of Law",
    author: "Brandon Sanderson",
    cover: alloyoflaw,
    rating: 5,
    tags: ["fantasy"],
  },
  {
  title: "Mistborn: Shadows of Self",
  author: "Brandon Sanderson",
  cover: shadowsofself,
  rating: 5,
  tags: ["fantasy"],
},
{
  title: "Mistborn: The Bands of Mourning",
  author: "Brandon Sanderson",
  cover: bandsofmourning,
  rating: 5,
  tags: ["fantasy"],
},
{
  title: "Mistborn: The Lost Metal",
  author: "Brandon Sanderson",
  cover: thelostmetal,
  rating: 5,
  tags: ["fantasy"],
},
{
  title: "Yesteryear",
  author: "Cairo Claire Burke",
  cover: yesteryear,
  rating: 5,
  tags: ["fiction"],
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