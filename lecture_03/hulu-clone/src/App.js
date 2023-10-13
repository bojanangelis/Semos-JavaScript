import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MoviePosterComponent from './Components/MoviePosterComponent';

function App() {
  const [data, setData] = useState([])
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  // }, [])
  // useEffect sekogas se povikuva ednash koga ke se otvori veb stranata 
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkwZjI3YzEwZDZhY2U4ZWRjMWY0MGU4NGY5OGI2MSIsInN1YiI6IjY1Mjk4MmQ2MWYzZTYwMDEzOTlkYWUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YFBu95bqgjrJH_R7Vv8-liKTthxv1Vi1XtbRjawwdn0'
      }
    };
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  }, [])

    // dependesy array na sekoj klik povtorno se renderira ovoj use effect.
  console.log('data--> ', data?.results)
  // const cars = ['Volvo', 'Ferrary', 'Audi', 'Peugeot']
  // console.log('count-->', count)
  return (
    <div className="App"> 
    {/* <button onClick={() => setCount(count + 1)}>Next Page</button> */}
    
      {/* {cars.map((car) => {
        return <h1>{car}</h1>
      })} */}
      {/* {cars.map((car) => (
        <h1>{car}</h1>
      ) )} */}

    {/* {data?.results?.map((movie) => (
      <div key={movie.id}>
        <h1>{movie.original_title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
      </div>
    ))} */}
    {data?.results?.map((movie) => (
      // <h2 key={movie.original_title}>{movie.title}</h2>
      <MoviePosterComponent
        key={movie.id}
        title={movie.original_title} 
        img={movie.poster_path} 
      />
      ))}

{/* Isto e samo koga odime so --> golemi zagradi {} 
    morame return (
      ime na komponentata
      <Komponenta /> ili
      <div>
      </div>
    )
*/}
{/* {data?.results?.map((movie) => {
        return(
          <MoviePosterComponent
          key={movie.id}
          title={movie.original_title} 
          img={movie.poster_path} 
          />
          )
      }
      )} */}


    </div>
  );
}

export default App;
