import './PotvrdaBrisanja.css'

function PotvrdaBrisanja (props)  {

    function handleClickYes(){
        props.brisi()
        props.postaviPotvrdu(false)
    }

    function handleClickNo(){
        
        props.postaviPotvrdu(false)
    }

  return (

<>

     <div className="brisanje" >
        
            <h4 >Želite izbrisati?</h4>
            
            
            <div className="flex items-center" >
                
                <button className="shadow bg-orange-700 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5 object-center transform hover:scale-105 transition ease-in-out duration-300" onClick={handleClickYes}>
                    Da
                </button>
          
          
                <button className="shadow bg-orange-700 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-5 object-center transform hover:scale-105 transition ease-in-out duration-300" onClick={handleClickNo}>
                    Ne
                </button>
            </div>
        
    </div>

</>
  )
  
}export default PotvrdaBrisanja


