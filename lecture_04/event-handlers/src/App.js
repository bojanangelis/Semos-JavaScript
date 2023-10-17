import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AlertButton from './Components/AlertButton';
import Movie from './Icons/movie.svg'
import UseEffectComponent from './Components/UseEffectComponent';

// homework.
// 1. create a component with form for signup.
// 2. useState for the signup variables
// 3. useEffect for checking if the singups are correct for example if the email and password are valid.
// 4. make it look good with css

// optional 
// ushte edna so razlicni inputi i alerts.
// mozi za kola ili za dota 2 :D


function App() {
  const [state, setState] = useState('')
  // console.log('state-->', state)

  
  // const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isTrue, setIsTrue] = useState(false)
  const [data, setData] = useState([])

  // console.log('boolean-->', isTrue)

  // znaci ako imame nekoja logika kade shto statov ni e potreben vo ovoj use effect go stavame vo dependensy array --> [email]
  console.log(data)


  useEffect(() => {
    console.log('called useefect in movies')
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
      // se povikuva samo ednash
  }, [])
  
  useEffect(()=>{
    //setup funkcija arrow tuka ja stavame logikata
  }, 
    // tuka setupirame dali sakame da ni se povika ednash incijalno koga userot ke vlezi na stranata ili povejke pati.
  [])



  useEffect(() => {   
    if(email.length > 10 && password.length > 10) alert('Email and password are valid')    
    // get movies
   //se povikuva sekogash koga ke se smeni email ili password.
  }, [email, password])

  
  // console.log('age', age)
  // const handleButtonClick = () => {
  //   alert('click')
  // }

  // const handleInput = (e) => {
    //   // e.preventDefault()
    //   console.log(e)
    // }

    const handleFormSubmit = (event) => {
      event.preventDefault()
      // console.log(event)
      alert('emial -->' + email + "password--> " +  password)
    }
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const novaFunkcija= () => {
    // console.log('nova funkcija pecati email i password', email, password)
  }
  
  // forma so funkcija handleFormSubmit kade shto pecati alert so vashite vrednosti
  // useState za da gi zapishete vashite vrednosti od input pole
  // 


  const handleClick = () => {
    setState('click')
  
  }


  // useEffect(() => {}, [])

  // console.log(state)
  return (
    <div className="App">
      
        <br />
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <input type='email' value={email} onChange={(e) => handleEmail(e)}  />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

          {/* <input type='password' onChange={(e) => handlePassword(e)}  /> */}

          <button>submit</button>
        </form>

        <button onClick={novaFunkcija}>Novo kopce</button>


        <br />
        
        <button style={{backgroundColor: isTrue? 'green' : 'red', border: 'none', padding: '4px'}} onClick={() => setIsTrue(!isTrue)}>IsTrue</button>
        <button onClick={handleClick}>Click this </button>

        <UseEffectComponent name={email} />
    </div>
  );
}

export default App;


 {/* <button onClick={function() {alert('click')}}>Click me</button>
      <button onClick={()=> {alert('click') }}>Click me</button>

      <AlertButton messege={'this is a movie button'}>
        Play movie
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
        </svg>
        <h3>h3 tag</h3>
      </AlertButton> */}

      {/* <input onChange={(event) => console.log(event.target.value)} /> */}