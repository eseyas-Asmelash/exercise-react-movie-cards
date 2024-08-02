import { ReactElement } from 'react';
import MovieCard from './MovieCard';

interface Movie {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface MovieListProps {
  movies: Movie[];
  onDeleteMovie: (index: number) => void;
}
function MovieList({movies, onDeleteMovie}: MovieListProps): ReactElement {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onDelete={() => onDeleteMovie(index)} />
      ))}
    </div>
  );
};

export default MovieList;
