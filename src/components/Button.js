import React from "react";

export default function Button(props){
  return (
      <div className={`button-click rounded-3xl bg-yellow-300 p-1 cursor-pointer select-none w-[90%] flex items-center justify-center ${props.textSize}`}>
        <a href={"/"}>{props.text}</a>
      </div>
  );
}