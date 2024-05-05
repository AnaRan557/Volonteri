import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NovaAktivnost from './NovaAktivnost';
import Aktivnost from './Aktivnost';
import AdminContext from './AdminContext';
import {motion} from "framer-motion";



export default function Aktivnosti() {

const [aktivnosti, postaviAktivnosti] = useState([]);
const [nova, postaviNovu]=useState(false);
const {admin,setAdmin} = useContext(AdminContext)


 
  useEffect(() => {
    axios
      .get("http://localhost:3001/aktivnosti/")
      .then(res => postaviAktivnosti(res.data));
  }, []);
 

  function dodajNovu(event){
    
    event.preventDefault();
    
    const novaa=nova;
    postaviNovu(!novaa)
  } 


  return(

    < motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99}} className="grid grid-cols-4 h-svh">



    <div className="bg-stone-200 col-span-1">
      <div className="text-2xl text-orange-700 font-light m-5">
          Aktivnosti
        </div>

        <div className="w-[80%]">
            {admin && <p> <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99}}  className="shadow bg-orange-700 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5 object-center transform hover:scale-105 transition ease-in-out duration-300" onClick={dodajNovu}>+ Dodaj novu</motion.button></p>}

            {(nova && admin) && <NovaAktivnost promjena={postaviAktivnosti} nova={postaviNovu}/>}
           
        </div>

    </div>


    <div className="col-span-3 grid grid-cols-3 items-start min-w-0 p-10 justify-between" style={{backgroundImage:`url("/people-3.png")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

    {aktivnosti.map(r => (
            <Aktivnost key={r.id} rez={r} promjena={postaviAktivnosti}/>
          ))}


    </div>


    </motion.div>


  )



}