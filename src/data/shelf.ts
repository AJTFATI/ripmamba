export type Book = {
  title: string;
  author: string;
  olid: string; // Open Library ID — find at openlibrary.org
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
};

export type Film = {
  title: string;
  year: number;
  poster: string; // paste the poster URL from omdbapi.com
  type: "film" | "show";
  rating: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
};

export const books: Book[] = [
  // Replace with your actual reads. Find the OLID by searching openlibrary.org,
  // then grab the ID from the URL: /works/OL45804W → olid is "OL45804W"
  {
    title: "The Road",
    author: "Cormac McCarthy",
    olid: "OL7353617M",
    rating: 5,
    tags: ["fiction"],
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    olid: "OL7957872M",
    rating: 5,
    tags: ["sci-fi"],
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    olid: "OL24347578M",
    rating: 5,
    tags: ["philosophy"],
  },
];

export const films: Film[] = [
  // Replace with your actual watches. Get poster URLs free from:
  // https://www.omdbapi.com/?t=MOVIE+TITLE&apikey=YOUR_KEY
  // Free tier: 1,000 requests/day. Grab the "Poster" field from the response.
  {
    title: "Nosferatu",
    year: 2024,
    poster:
      "https://image.tmdb.org/t/p/w200/5qGIxdEO841C0tdY8vKuYvCBsbb.jpg","
    type: "film",
    rating: 5,
    tags: ["horror"],
  },
  {
    title: "The Brutalist",
    year: 2024,
    poster:
      "https://image.tmdb.org/t/p/w200/czIQldhFcMOKkyB5F0K8RW6WZMT.jpg",
    type: "film",
    rating: 5,
    tags: ["drama"],
  },
  {
    title: "Conclave",
    year: 2024,
    poster:
      "https://image.tmdb.org/t/p/w200/czIQldhFcMOKkyB5F0K8RW6WZMT.jpg",
    type: "film",
    rating: 4,
    tags: ["thriller"],
  },
];
