// import React from 'react'
// import Police from './Police';


// function PoliceList() {

// const [police_stations,setPolice_stations] =useState([])

//  useEffect(() => {
//     fetch("http://localhost:9292/police_stations")
//       .then((r) => r.json())
//       .then((police_stations) => setPolice_stations(police_stations));
//   }, []);
//   console.log(police_stations)
//   return (
    
//  <div>
//         {police_stations.map((polices)=>(

//       <Police key={polices.id}  name ={polices.name} area ={polices.area} />

//       ))}
           
//     </div>
//   )
// }

// export default PoliceList