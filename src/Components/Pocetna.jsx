import {motion} from "framer-motion";

function Pocetna() {
  return (
    
    
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className=" grid grid-cols-4 h-svh">


        <div className="bg-stone-300 col-span-1">
            <h1 className="text-3xl m-5">Dobrodošli!</h1>

            <p className="m-5 text-xl font-thin" >
              Ova aplikacija je nastala kao završni projekt Junior Dev React tečaja.<br/>
              Nažalost, nije dovršena zbog jako malo vremena kojeg sam uspjela odvojiti s obzirom na obaveze.<br/>
              Korištene su tehnologije i koncepti upoznati tijekom tečaja.<br/><br/>
              Hvala predavaču i organizatorima!<br/>
            </p>

            <p className="m-5 text-xl font-thin">
              Ana Rančić 
            </p>

          </div>


          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.99}} className="col-span-3 flex flex-col justify-between">

            <div>
              <img src="/people.png"/>
            </div>
      
          </motion.div>

      


    </motion.div>
  )
}
export default Pocetna;
