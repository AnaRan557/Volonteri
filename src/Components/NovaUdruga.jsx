import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export default function NovaUdruga(props) {

  const [udrugaPodaci, postaviUdrugaPodatke] = useState({
   
    naziv: "",
    adresa: "",
    grad: "",
    
   
    
  });

  
 
  const saljiPodatke = event => {
 
    
    const zaSlanje = udrugaPodaci;
  
    axios.post('http://localhost:3001/udruge', zaSlanje)
      .then(rez => console.log(rez)) 
          axios
            .get("http://localhost:3001/udruge")
            .then(rez=>props.promjena(rez.data))

  };

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviUdrugaPodatke({ ...udrugaPodaci, [name]: value });

    console.log(udrugaPodaci);
  }

  return (
    <div className="bg-stone-200 m-5 p-5 shadow-md transition-all ease-in duration-500">

    <div className="flex flex-col items-end">
      <button onClick={()=>props.nova(false)} ><ClearRoundedIcon color="disabled" className=" hover:bg-stone-300" /></button>
    </div>

      <form className="w-full max-w-lg" >

      <div class="flex items-center border-b border-orange-700 py-2">
        <input type='text' placeholder="Naziv" name='naziv' value={udrugaPodaci.naziv} onChange={promjenaUlaza} required className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
      </div>
      
      <div className="flex items-center border-b border-orange-700 py-2">
        <input type='text' placeholder="Adresa" name='adresa' value={udrugaPodaci.adresa} onChange={promjenaUlaza} required className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
      </div>
      
      <div className="flex items-center border-b border-orange-700 py-2">
        <input type='text' placeholder="Grad" name='grad' value={udrugaPodaci.grad} onChange={promjenaUlaza} required className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
      </div>

      

      

      <div>
        <button onClick={saljiPodatke} className="shadow bg-orange-700 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5 object-center transform hover:scale-105 transition ease-in-out duration-300">Dodaj</button>
      </div>

      </form>



    </div>
  )
}
