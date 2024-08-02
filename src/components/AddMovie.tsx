import { ReactElement, useState } from 'react';
import '../css/AddMovie.css'

interface Movie {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface AddMovieProps {
  onAddMovie: (movie: Movie) => void;
}

function AddMovie({onAddMovie} : AddMovieProps): ReactElement {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(1);
  const [genre, setGenre] = useState('Drama');
  const [description, setDescription] = useState('');

  const handleAddMovie = () => {
    const newMovie: Movie = { title, rating, genre, description };
    console.log(newMovie);
    onAddMovie(newMovie);
    setTitle('');
    setRating(1);
    setGenre('Drama');
    setDescription('');
  };

  return (
    <div className='container'>
      <div>
        <label>Title: </label>
        <input className='input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      </div>
      <div>
        <label>Rating: </label>
        <input className='range'  type="range" min="0" max="5" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
        <span>{rating}</span>
      </div>
      <div>
        <label>Genre: </label>
        <select className='select' value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
        </select>
      </div>
      <div>
        <label>Description: </label>
        <textarea className='textarea' value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='btn'>
        <button className='button' onClick={handleAddMovie}>Add</button>
        <button className='button' onClick={() => { setTitle(''); setRating(1); setGenre('Drama'); setDescription(''); }}>Clear</button>
      </div>

    </div>
  );
};

export default AddMovie;
