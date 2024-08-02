import { ReactElement } from 'react';
import '../css/Moviecard.css'

interface MovieCardProps {
  movie: {
    title: string;
    rating: number;
    genre: string;
    description: string;
  };
  onDelete: () => void;
}

function MovieCard({movie, onDelete} : MovieCardProps): ReactElement {
  return (
    <div className='card' onClick={onDelete}>
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
