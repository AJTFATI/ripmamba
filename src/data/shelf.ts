import type { ImageMetadata } from "astro";
import mistborn from "@/assets/posters/mistborn-thefinalempire.jpg";
import wellofascension from "@/assets/posters/wellofascension.jpg";
import heroofages from "@/assets/posters/heroofages-mistborn3.jpg";
import alloyoflaw from "@/assets/posters/alloyoflaw-mistborn4.jpg";
import shadowsofself from "@/assets/posters/shadowsofself-mistborn5.jpg";
import bandsofmourning from "@/assets/posters/bandsofmourning-mistborn6.jpg";
import thelostmetal from "@/assets/posters/thelostmetal-mistborn7.jpg";
import yesteryear from "@/assets/posters/yesteryear.jpg";
import ringshout from "@/assets/posters/ringshout.jpg";
import carelesspeople from "@/assets/posters/carelesspeople.jpg";
import algospeak from "@/assets/posters/algospeak.jpg";
import menwhohatewomen from "@/assets/posters/menwhohatewomen.jpg";
import thebladeitself from "@/assets/posters/thebladeitself.jpg";
import beforetheyarehanged from "@/assets/posters/beforetheyarehanged.jpg";
import lastargumentofkings from "@/assets/posters/lastargumentofkings.jpg";  
import bestservedcold from "@/assets/posters/bestservedcold.jpg";
import theheroes from "@/assets/posters/theheroes.jpg";
import redcountry from "@/assets/posters/redcountry.jpg";
import thetroublewithpeace from "@/assets/posters/thetroublewithpeace.jpg"; 
import wisdomofcrowds from "@/assets/posters/wisdomofcrowds.jpg";
import skyward from "@/assets/posters/skyward.jpg";
import starsight from "@/assets/posters/starsight.jpg";
import cytonic from "@/assets/posters/cytonic.jpg";
import defiant from "@/assets/posters/defiant.jpg";
import warbreaker from "@/assets/posters/warbreaker.jpg";
import tenderistheflesh from "@/assets/posters/tenderistheflesh.jpg"; 
import thedevils from "@/assets/posters/thedevils.jpg"; 
import halfaking from "@/assets/posters/halfaking.jpg";
import halftheworld from "@/assets/posters/halftheworld.jpg";
import halfawar from "@/assets/posters/halfawar.jpg";
import theBookOfClarence from "@/assets/posters/thebookofclarence.jpg";
import atlanta from "@/assets/posters/atlanta.jpg";
import widowsbay from "@/assets/posters/widowsbay.jpg";
import awizardofearthsea from "@/assets/posters/awizardofearthsea.jpg";
import doppelganger from "@/assets/posters/doppleganger.jpg";

export type Book = {
  title: string;
  author: string;
  cover: ImageMetadata;
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
  postSlug?: string;
  blurb?: string;
  status?: "reading" | "finished";
};

export type Film = {
  title: string;
  year: number;
  poster: ImageMetadata;
  mediaType: "movie" | "show";
  status: "watching" | "watched" | "finished";
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
  postSlug?: string;
  blurb?: string;
};

export const books: Book[] = [
  {
    title: "The Final Empire",
    author: "Brandon Sanderson",
    cover: mistborn,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    cover: wellofascension,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Hero of Ages",
    author: "Brandon Sanderson",
    cover: heroofages,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Alloy of Law",
    author: "Brandon Sanderson",
    cover: alloyoflaw,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Shadows of Self",
    author: "Brandon Sanderson",
    cover: shadowsofself,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Bands of Mourning",
    author: "Brandon Sanderson",
    cover: bandsofmourning,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Lost Metal",
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
  {
    title: "Ring Shout",
    author: "P. Djèlí Clark",
    cover: ringshout,
    rating: 5,
    tags: ["horror"],
  },
  {
    title: "Careless People",
    author: "Sarah Wynn Williams",
    cover: carelesspeople,
    rating: 5,
    tags: ["technology"],
  },
  {
    title: "AlgoSpeak",
    author: "Adam Aleksic",
    cover: algospeak,
    rating: 5,
    tags: ["technology"],
  },
  {
    title: "Men Who Hate Women",
    author: "Laura Bates",
    cover: menwhohatewomen,
    rating: 5,
    tags: ["thriller"],
  },
  {
    title: "The Blade Itself",
    author: "Joe Abercrombie",
    cover: thebladeitself,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Before They Are Hanged",
    author: "Joe Abercrombie",
    cover: beforetheyarehanged,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Last Argument of Kings",
    author: "Joe Abercrombie",
    cover: lastargumentofkings,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Best Served Cold",
    author: "Joe Abercrombie",
    cover: bestservedcold,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Heroes",
    author: "Joe Abercrombie",
    cover: theheroes,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Red Country",
    author: "Joe Abercrombie",
    cover: redcountry,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Trouble with Peace",
    author: "Joe Abercrombie",
    cover: thetroublewithpeace,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Wisdom of Crowds",
    author: "Joe Abercrombie",
    cover: wisdomofcrowds,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Half a King",
    author: "Joe Abercrombie",
    cover: halfaking,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Half the World",
    author: "Joe Abercrombie",
    cover: halftheworld,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Half a War",
    author: "Joe Abercrombie",
    cover: halfawar,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "Skyward",
    author: "Brandon Sanderson",
    cover: skyward,
    rating: 5,
    tags: ["sci-fi"],
  },
  {
    title: "Starsight",
    author: "Brandon Sanderson",
    cover: starsight,
    rating: 5,
    tags: ["sci-fi"],
  },
  {
    title: "Cytonic",
    author: "Brandon Sanderson",
    cover: cytonic,
    rating: 5,
    tags: ["sci-fi"],
  },
  {
    title: "Defiant",
    author: "Brandon Sanderson",
    cover: defiant,
    rating: 5,
    tags: ["sci-fi"],
  },
  {
    title: "Warbreaker",
    author: "Brandon Sanderson",
    cover: warbreaker,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "The Tender is the Flesh",
    author: "Agustina Bazterrica",
    cover: tenderistheflesh,
    rating: 5,
    tags: ["horror"],
  },
  {
    title: "The Devils",
    author: "Joe Abercrombie",
    cover: thedevils,
    rating: 5,
    tags: ["fantasy"],
  },
  {
    title: "A Wizard of Earthsea",
    author: "Ursula K. Le Guin",
    cover: awizardofearthsea,
    rating: 5,
    blurb: "The first work I read from Ursula K. Le Guin was her short story Why Are Americans Afraid of Dragons? I am ready to read more of her work.",
    tags: ["fantasy"]
  },
  {
    title: "Doppelganger",
    author: "Naomi Klein",
    cover: doppelganger,
    rating: 5,
    blurb: "As someone with a common name.. wow. Very interesting to see how some lines aren't as blurred as we think.",
    tags: ["tech"]
  }
];

export const films: Film[] = [
  {
    title: "The Book of Clarence",
    year: 2024,
    poster: theBookOfClarence,
    mediaType: "movie",
    status: "finished",
    rating: 5,
    tags: ["drama"],
  },
  {
    title: "Atlanta",
    year: 2016,
    poster: atlanta,
    mediaType: "show",
    status: "watched",
    rating: 5,
    tags: ["comedy"],
  },
  {
    title: "Widow's Bay",
    year: 2026,
    poster: widowsbay,
    mediaType: "movie",
    status: "watched",
    rating: 5,
    tags: ["comedy", "horror"],
  },
  
];
