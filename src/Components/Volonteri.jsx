import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NoviVolonter from './NoviVolonter';
import Volonter from './Volonter';
import AdminContext from './AdminContext';

import Radio from '@mui/material/Radio';

import FormControl from '@mui/material/FormControl';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {motion} from "framer-motion";




export default function Volonteri() {

const [volonteri, postaviVolontere] = useState([]);
const [novi, postaviNovi]=useState(false);
const {admin,setAdmin} = useContext(AdminContext)

const [grad, postaviGrad]=useState("");
 
  useEffect(() => {
    axios
      .get("http://localhost:3001/volonteri/")
      .then(res => postaviVolontere(res.data));
  }, []);
 

  function dodajNovi(event){
    
    event.preventDefault();
    
    const novinovi=novi;
    postaviNovi(!novinovi)
  } 



  return (
    
    
  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99}} className="grid grid-cols-4  h-svh">


      
    <div className="bg-stone-300 w-[800px] flex flex-col col-span-1">

        <div className="text-2xl text-orange-700 font-light m-5">
          Volonteri
        </div>

        <div className="w-[45%]">
            {admin && <p> <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99}}  className="shadow bg-orange-700 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5 object-center transform hover:scale-105 transition ease-in-out duration-300" onClick={dodajNovi}>+ Dodaj novog</motion.button></p>}

            {(novi && admin) && <NoviVolonter promjena={postaviVolontere} novi={postaviNovi}/>}
        </div>

        <div className="bg-stone-100 m-5 p-3 text-orange-800 font-semibold w-[40%]">
          
          <div className="mb-10 ">Filteri</div>

          <div className="mb-5 w-[80%]">
            <FormControl fullWidth>
              <InputLabel id="filter-gradovi">Grad</InputLabel>
                <Select
                    labelId="filter-gradovi"
                    id="filter-gradovi"
                    value={grad}
                    label="Grad"
                    onChange={e=>postaviGrad(e.target.value)}
                >
                    <MenuItem value="">Svi</MenuItem>
                    <MenuItem value="Split">Split</MenuItem>
                    <MenuItem value="Zagreb">Zagreb</MenuItem>
                    <MenuItem value="Rijeka">Rijeka</MenuItem>
                    <MenuItem value="Osijek">Osijek</MenuItem>
                    <MenuItem value="Dubrovnik">Dubrovnik</MenuItem>
                    
                </Select>
            </FormControl>

          </div>


            

        </div>

      </div>
      
      
      <div className=" grid grid-cols-3 items-start min-w-0 p-10 justify-between col-span-3" style={{backgroundImage:`url("/people-5.png")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

        
      {grad==="" ? (volonteri.map(r => (
            <Volonter key={r.id} rez={r} promjena={postaviVolontere}/>
          ))) :
      
      (volonteri.filter(vol=>vol.grad===grad).map(r => (
            <Volonter key={r.id} rez={r} promjena={postaviVolontere}/>
          )))

        }
    </div>
        

    </motion.div>
  )
}
