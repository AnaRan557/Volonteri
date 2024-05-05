import { useState } from "react";
import axios from "axios";
import PotvrdaBrisanja from "./PotvrdaBrisanja";
import { useContext } from "react";
import AdminContext from "./AdminContext";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {motion} from "framer-motion";


export default function Aktivnost({rez,promjena}) {

    const[potvrda, postaviPotvrdu]=useState(false);
    const[brisi, postaviBrisanje]=useState(false);

    const {admin,setAdmin} = useContext(AdminContext)
    
    async function deleteItem(){
        axios
        await axios.delete(`http://localhost:3001/aktivnosti/${rez.id}`);   
        promjena(stanje => stanje.filter(el => el.id != rez.id));
     }


     


  return (
    <div className="w-[300px] bg-gray-200/80 hover:bg-stone-100 hover:transition-all hover:scale-105 shadow-md m-5 p-5 rounded-sd flex flex-col justify-center items-center ">

        <div className="flex flex-row justify-end">
                    
            {admin && <button onClick={()=>postaviPotvrdu(true)} className="object-right-top transform hover:scale-125 transition ease-in-out duration-500"><ClearRoundedIcon color="error"/></button>}
                
        </div>


        <div>
                
            <img src="/people-6.png" /> 
       
        </div>


        <div className="text-3xl text-orange-700 text-center font-thin">
            
            {rez.naziv}

            

        </div>

        <div>
            <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99}}  className="shadow bg-orange-700 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5 object-center transform hover:scale-105 transition ease-in-out duration-300" onClick={()=>alert("Under construction!")}>Prijavi se</motion.button>
        </div>

        {potvrda && <PotvrdaBrisanja postaviBrisanje={postaviBrisanje} postaviPotvrdu={postaviPotvrdu} brisi={deleteItem}/> }


    </div>
  )
}

