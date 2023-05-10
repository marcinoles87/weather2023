
import './App.scss';
import React , {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState([])

  useEffect( () => {
    fetch("https://danepubliczne.imgw.pl/api/data/synop")
    .then( response => response.json())
    .then( data => setData(data))
  } , [])

  console.log(data)

  data.map( ({id_stacji,stacja , temperatura}) => {
    return <div>
       <h2 key={id_stacji}>Country Name :{stacja}</h2>
            <h1>{temperatura}</h1>
            <p> Today is : Sunny</p>
    </div>
          
  })
  
  return (
    <div className="App">
      <h1>Weather App</h1>
        <div className="weather-card">
            <input placeholder="find your countries..."></input>
            <h2>Country Name {}</h2>
            <h1> 20 C</h1>
            <p> Today is : Sunny</p>
        </div>
    </div>
  );
}

export default App;
