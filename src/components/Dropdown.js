import React,{useState} from "react";
import Button from "./Button";

export default function Dropdown(){

  const[drop, setDrop] = useState(false);

  const clickDrop = () => setDrop(!drop);


  return (
     <div className={"bg-gray-500 border-b-2"}>
       <div className={`grid grid-cols-3 gap-x-3 p-3 pb-0 text-center ${drop ? 'open' : 'close'} overflow-hidden`}>
         <div><Button text={"Profile"} textSize={"text-sm"}/></div>
         <div><Button text={"Payment"} textSize={"text-sm"}/></div>
         <div><Button text={"History"} textSize={"text-sm"}/></div>
       </div>
       <div
           onClick={clickDrop}
           className={"text-center select-none cursor-pointer"}><div className={drop ? '' : 'rotate-180'}>^</div></div>
     </div>
  );
}