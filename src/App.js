import { useEffect } from "react";
import { Feed } from "./components/Feed";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import { supabase } from './api/cliente'



function App() {

  // const navigate = useNavigate()

  // // Verifica si hay un usuario logueado cuando entras a la pagina
  // useEffect(() => {

  //   const getsession = async () => {
  //     const { data } = await supabase.auth.getSession()
  //     if (!data.session) {
  //       navigate('/login')
  //     }else{
        
  //     }
  //   }
  //   getsession()

  // }, [navigate])

 


  return (

    <div className=" bg-slate-100 dark:bg-black h-full">

      <div className="fixed top-0 w-full z-10">

        <Header />
      

      </div>

      <div className="pt-12 sm:pt-20">

        <Feed />

      </div>

    </div>


  );
}

export default App;
