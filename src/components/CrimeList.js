import React ,{useState,useEffect} from 'react';
import Crimes from './Crimes'

function CrimeList() {
  const [crimes,setCrimes] =useState([])

 useEffect(() => {
    fetch("http://localhost:9292/crimes")
      .then((r) => r.json())
      .then((crimes) => setCrimes(crimes));
  }, []);
  console.log(crimes)

function handleDeleteCrime(deletedcrime) {
    const updatedCrimes = crimes.filter((crime) => crime.id !== deletedcrime.id);
    setCrimes(updatedCrimes);
  }
 
  
  return (
    <div className='crime_list'>
      {crimes.map((crime)=>(

      <Crimes key={crime.id} id ={crime.id} title ={crime.title} description ={crime.description} police_station={crime.police_station} updated_at ={crime.updated_at} deletedcrime={handleDeleteCrime}/>

      ))}
           
    </div>
  )
}

export default CrimeList