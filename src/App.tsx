/* export function App() {
  return (
    <>
      <h1>This is the App component</h1>
    </>
  );
}
 */
import React, { useState } from 'react';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

interface Movie {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleAddMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  const handleDeleteMovie = (index: number) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
    </div>
  );
};

export default App;
