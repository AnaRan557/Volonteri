import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Pocetna from "./Components/Pocetna";
import Aktivnosti from "./Components/Aktivnosti";
import Volonteri from "./Components/Volonteri";
import Udruge from "./Components/Udruge";
import VolonteriFullPage from "./Components/VolonteriFullPage";
import NoviVolonter from "./Components/NoviVolonter";

const router = createBrowserRouter([

  {
    element:<VolonteriFullPage/>,
    children: [

      {
        path:"/",
        element:<Pocetna/>,
      },
    
      {
        path: "/aktivnosti",
        element:<Aktivnosti/>,
      },

      {
        path:"/volonteri",
        element: <Volonteri/>,
        
      },

      {
        path:"/udruge",
        element: <Udruge/>,
      },
    ],
  },

  
      
  ]);


export default function App() {
  return (
  <>

   <RouterProvider router={router}/>

    

</>
  )
}
