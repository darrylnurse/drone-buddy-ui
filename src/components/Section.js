import React from "react";
import Button from "./Button";

export default function Section(props){
  return (
    <div className={"section bg-gray-300 border-b-2"}>
      <div className={"h-full grid grid-cols-2 items-center gap-x-3 p-3 justify-evenly"}>
        <div className={`order-1 bg-gray-400 h-full flex items-center justify-center`}><Button text={props.title} textSize={"text-md"}/></div>
        <div className={`order-[${props.order}] h-full flex items-center justify-center overflow-hidden`}><img className={"h-full w-full"} src={props.image} alt={"drone"}/></div>
      </div>
    </div>
  );
}