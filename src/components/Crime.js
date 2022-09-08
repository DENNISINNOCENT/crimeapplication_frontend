import React  from 'react'
function Crimes({id,crime,title,description,updated_at,deletedCrime,police_Station}) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/crimes/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => deletedCrime(crime));
  }

  
  return (
   <div className='crime'>
    <div className='crime_header'>
    < h1> CRIME:  {title}</h1>
    </div>
    <span>{description}</span>
    <div className='crime_footer'>
    <span>Reported: {police_Station}</span>
    <span>Time :{updated_at}</span>
     <button onClick={handleDeleteClick} style={{paddingLeft:"20px"}}>Delete</button>
      

    </div>

   </div>
  );
}
   


export default Crimes