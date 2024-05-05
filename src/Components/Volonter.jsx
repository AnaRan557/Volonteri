import { useState } from "react";
import axios from "axios";
import PotvrdaBrisanja from "./PotvrdaBrisanja";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import AdminContext from "./AdminContext";
import { Avatar } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


export default function Volonter({rez,promjena}) {

    const[potvrda, postaviPotvrdu]=useState(false);
    const[brisi, postaviBrisanje]=useState(false);

    const {admin,setAdmin} = useContext(AdminContext)
    
    async function deleteItem(){
        axios
        await axios.delete(`http://localhost:3001/volonteri/${rez.id}`);   
        promjena(stanje => stanje.filter(el => el.id != rez.id));
     }


     


  return (
    <div className="w-[300px] bg-gray-200/80 hover:bg-stone-100 hover:transition-all hover:scale-105 shadow-md m-5 p-5 rounded-sd ">

        <div className="flex flex-row justify-end">
                    
            {admin && <button onClick={()=>postaviPotvrdu(true)} className="object-right-top transform hover:scale-125 transition ease-in-out duration-500"><ClearRoundedIcon color="error"/></button>}
                
        </div>


        <div>
                
            <Avatar src="/broken-image.jpg" sx={{ width: 70, height: 70 }} /> 
       
        </div>


        <div>
            
            <table className="text-left mt-5">
                <tbody>
                    <tr>
                        <th>Ime: </th>
                        <td className="text-lg font-semibold text-orange-800">{rez.ime}</td>
                    
                    </tr>
                    <tr>
                        <th>Kontakt:</th>
                        <td>{rez.kontakt}</td>
                    
                    </tr>
                    <tr>
                        <th>Grad:</th>
                        <td>{rez.grad}</td>
                    
                    </tr>

                    <tr>
                        <th>Aktivnosti:</th>
                        <td>{rez.aktivnosti}</td>
                    
                    </tr>
                </tbody>
                
            </table>

            

        </div>

        {potvrda && <PotvrdaBrisanja postaviBrisanje={postaviBrisanje} postaviPotvrdu={postaviPotvrdu} brisi={deleteItem}/> }


    </div>
  )
}
