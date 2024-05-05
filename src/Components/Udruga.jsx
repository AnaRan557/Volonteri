import { useState, useContext } from 'react';
import axios from 'axios';
import AdminContext from './AdminContext';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import PotvrdaBrisanja from "./PotvrdaBrisanja";


export default function Udruga({rez,promjena}) {


    const {admin,setAdmin} = useContext(AdminContext)
    const[potvrda, postaviPotvrdu]=useState(false);
    const[brisi, postaviBrisanje]=useState(false);

    async function deleteItem(){
        axios
        await axios.delete(`http://localhost:3001/udruge/${rez.id}`);   
        promjena(stanje => stanje.filter(el => el.id != rez.id));
     }

  return (
    <>

       
            <tr>
                
                <td className="bg-stone-100 p-3 m-2 w-6/12">{rez.naziv}</td>
                    
                <td className="bg-stone-100 p-3 m-2 w-6/12">{rez.adresa}</td>
                    
                <td className="bg-stone-100 p-3 m-2 w-6/12">{rez.grad}</td>

                <td className="bg-stone-100 p-3 m-2 w-6/12">
                    
                    {admin && <button onClick={()=>postaviPotvrdu(true)} className="object-right-top transform hover:scale-125 transition ease-in-out duration-500"><ClearRoundedIcon color="error"/></button>}
                
                </td>

            </tr>   
            
      
        {potvrda && <PotvrdaBrisanja postaviBrisanje={postaviBrisanje} postaviPotvrdu={postaviPotvrdu} brisi={deleteItem}/> }

    </>
  )
}
