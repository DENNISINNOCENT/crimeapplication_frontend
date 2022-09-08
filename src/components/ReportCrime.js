import React, { useState } from 'react'


function ReportCrime() {
  const [crimeData,setCrime ]=useState({
    id:"",
    title:"",
    area:"",
    police_station_id:"",
    description:"",
  })
function handleChange(event){
    const name =event.target.name
    const value =event.target.value
    
    setCrime({
        ...crimeData,[name]:value
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    // const crimeData ={
    //   title:title,
    //   area:area,
    //   description:description
    // };
    fetch("http://localhost:9292/crimes",{
      method:"POST",
      headers: {
        "content-Type":"application/json"
      },
      body:JSON.stringify(crimeData),
    })
    .then((resp) =>resp.json())
    .then((newCrime) =>setCrime(newCrime))
  }
  console.log(crimeData)
  return (
    <div>
        <form className='NewCrime'onSubmit={handleSubmit}>
            <label>CRIME _TYPE_TITLE</label>
            <input type="text" name='title' value={crimeData.title} onChange={handleChange}/>
           
           
            <label>Location Area of the Crime</label>
            <input type="text" name='area'value={crimeData.area} onChange={handleChange}/>
            <label>Reporting Police Station</label>
            <select name ="police_station_id" value={crimeData.police_station_id} onChange ={handleChange}>
              <option>1</option>
              <option>2</option>

            </select>
            
            <textarea type="text" name='description'value={crimeData.description} onChange={handleChange} placeholder="Description of the crime" rows="4"></textarea>
             <button type="submit">Add Crime</button>
        </form>
    </div>
  )
}

export default ReportCrime