
import './App.scss';
import React , {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState([])
  let [city , setCity] = useState()
  const [prawda , setPrawda] = useState(false)
  let [temp , setTemp] = useState(0)
  
 
  
  

  
  useEffect( () => {
    fetch("https://danepubliczne.imgw.pl/api/data/synop")
    .then( response => response.json())
    .then( data => setData(data))

    console.log(data)
  } , [])

 
  const handleOnChange = (e) =>{
    setPrawda(false)
    e.preventDefault()
    const valueInput = e.target.value

    const newArr = [...data]

    console.log(newArr)
    

    const foundCity = newArr.filter( (item)=> item.stacja.includes(valueInput))
    
      setCity(foundCity)
      setTemp(0)
    
  }
  

    const handleClick = () => {

    
    setPrawda(true)
    setTemp(city[0].temperatura)
   }

   

  return (
    <div className="App">
      <h1>Weather App</h1>
        <div className="weather-card">


            <input placeholder="search your City..." onChange={handleOnChange}></input>
            <button onClick={handleClick}>Chosse City</button>


            {prawda ?  city.map( (item) => {

                  return(
                    <div key={item.stacja}>
                      <h1>{item.stacja}</h1>
                      <p>{item.data_pomiaru}</p>
                      <h2>temperatura wynosi :</h2>
                      <h1 className='temperature'>{item.temperatura} C</h1>
                      <h3>cisnienie: {item.cisnienie}</h3>
                      <h3>Godzina pomiaru : {item.godzina_pomiaru}</h3>
                    </div>

                  )}): "wpisz poprawna nazwe Miasta"}
                 {temp > 16 ? <div className='temp'><p>super pogoda</p> </div> : ""} 
                 {temp < 14  && temp > 8 ? <div className='temp'><p>ubierz sie ciepło</p> </div> : ""} 


                 <p>Avaiable City:</p>
                 <select>
          
          {data.map( (item,index) => {
            
      return(
          
          <option id="option" key={index} value={item.stacja}>{item.stacja}</option> 
        
      )
    })}
  
    
          </select>
                  
        
        </div>
        
        
      
    </div>

    
  );

  

}

export default App;
