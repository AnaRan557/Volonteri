import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import {useState, createContext} from 'react';
import AdminContext from './AdminContext';
import {motion} from "framer-motion";



export default function VolonteriFullPage() {

  const [admin, setAdmin]=useState(false);


  return (
    
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className="min-h-screen flex flex-col justify-between">

    <AdminContext.Provider value={{admin, setAdmin}}>

          <Header className=""></Header>

          <main className=" bg-zinc-200  flex-1">
        
            <Outlet/>
        
          </main>

          <Footer>Footer</Footer>

    </AdminContext.Provider>

    </motion.div>
  )
}
