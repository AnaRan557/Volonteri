import {useContext} from 'react';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import AdminContext from './AdminContext';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoyaltyRoundedIcon from '@mui/icons-material/LoyaltyRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';

export default function Header() {


  const {admin,setAdmin} = useContext(AdminContext)
  


  function handleChange(){

    const admin1=admin
    setAdmin(!admin1);  

  }

  return (
    <div className="flex items-center justify-between  p-10  space-x-7 shadow-lg" style={{backgroundImage:`url("/hands.jpg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    
    <div className="flex flex-row space-x-7 text-lg text-red-700">
        <Link to='/' className= "hover:text-red-600 transform hover:scale-110 transition ease-in-out duration-500 uppercase"><HomeRoundedIcon/> Početna</Link>
        <Link to='/aktivnosti' className= "hover:text-red-600 transform hover:scale-110 transition ease-in-out duration-500 uppercase" ><LoyaltyRoundedIcon/> Aktivnosti</Link>
        <Link to='/volonteri' className= "hover:text-red-600 transform hover:scale-110 transition ease-in-out duration-500 uppercase"><PeopleAltIcon/> Volonteri</Link>
        <Link to='/udruge' className= "hover:text-red-600 transform hover:scale-110 transition ease-in-out duration-500 uppercase"><Diversity1RoundedIcon/> Udruge</Link>

    </div>

    <div><h1 className="text-3xl  text-orange-700"> <VolunteerActivismRoundedIcon/>Volonteri</h1>
    
   
    
    <FormControlLabel control={
      <Switch checked={admin}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color="success" />
            } 
              label="Admin" />



   

    </div>
    </div>
  )
}
