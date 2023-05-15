import MovieCard from "../components/MovieCard/MovieCard";

export interface IParamsGetMovies {
  searchText: string;
  categoryMovies: string;
  currentPage: number;
}

type CategoriesTyper = "all" | "movie" | "series";

export interface IMovie {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: [
    {
      Source: string;
      Value: string;
    }
  ];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

export interface IState {
  movies: IMovieShort[] | [];
  loading: boolean;
  error: boolean;
  searchText: string;
  categoryMovies: CategoriesTyper;
  singleMovie: IMovie;
  totalResults: number;
  currentPage: number;
}

export interface IMovieShort {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
