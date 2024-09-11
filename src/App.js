
import './App.css';
import {useState} from "react";
import clsx from "clsx";


const App = () => {

  const [isDark,setIsDark] = useState(true);

  const clickHandler=()=> setIsDark(!isDark);
  
  return (

  <div className={clsx(" h-screen flex items-center justify-center", isDark ? "bg-slate-100":"bg-slate-300")}>
    <button className="border border-2 border-stone-400" onClick={clickHandler} >
    <div className={clsx("w-6 h-8",isDark? "bg-slate-100":"bg-slate-400")} ></div>
    <div className={clsx("w-6 h-8",isDark? "bg-slate-400":"bg-slate-100")} ></div>
    </button>
  </div>

    

  );
};

export default App;
