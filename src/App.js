import { Feed } from "./components/Feed";
import Header from "./components/Header";




function App() {

  return (
    <div className=" bg-slate-100 h-full">

      <div className="fixed top-0 w-full z-10">

        <Header />

      </div>

      <div className="pt-20">

        <Feed />
      
      </div>










    </div>


  );
}

export default App;
