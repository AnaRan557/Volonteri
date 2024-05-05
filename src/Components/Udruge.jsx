import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AdminContext from './AdminContext';
import Udruga from './Udruga';
import NovaUdruga from './NovaUdruga';
import {easeOut, motion} from "framer-motion";

export default function Udruge() {


const [udruge, postaviUdruge] = useState([]);
const [nova, postaviNovu]=useState(false);
const {admin,setAdmin} = useContext(AdminContext)
 
  useEffect(() => {
    axios
      .get("http://localhost:3001/udruge/")
      .then(res => postaviUdruge(res.data));
  }, []);
 

  function dodajNovu(event){
    
    event.preventDefault();
    
    const novanova=nova;
    postaviNovu(!novanova)

    
  } 

  return (

    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99}} className="grid grid-cols-4 h-screen">

        <div className="bg-stone-300 col-span-1">

        <div className="text-2xl text-orange-700 font-light m-5">
          Udruge
        </div>
        <div>
        <div>
        { admin &&  <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99, ease:"easeOut"}} className="shadow bg-orange-700 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5 object-center transform hover:scale-105 transition ease-in-out duration-300" onClick={dodajNovu}>+ Dodaj novu</motion.button>}

        {(nova && admin) && <NovaUdruga promjena={postaviUdruge} nova={postaviNovu}/>}
        </div>
        </div>

        </div>

        <div className="flex flex-row justify-center items-start col-span-3">
        <table className="shadow-lg border-2 w-6/12 text-center mt-10">
          <thead>
            <tr className="w-6/12 h-12">
          
                <th className=" bg-stone-300">Naziv</th>
                <th className="bg-stone-300">Adresa</th>
                <th className=" bg-stone-300 p-3">Grad</th>
                {admin && <th className=" bg-stone-300 p-3">Izbriši</th>}
          
            </tr>

          </thead>

        <tbody>
        {udruge.map(r => (
            <Udruga key={r.id} rez={r} promjena={postaviUdruge}/>
          ))}

        </tbody>
        </table>
        </div>


    </motion.div>
  )
}
