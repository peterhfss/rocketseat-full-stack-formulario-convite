"use client"

import { Building2, Icon, Video } from "lucide-react";
import { useState } from "react";


interface SegmentedControlProps{
  onChange: (selected:string) => void;
  title:string;
  defaultValue?: string;
}

export function SegmentedControl({onChange, title, defaultValue} : SegmentedControlProps){

  const options = [
    {label:"Presencial", icon:Building2},
    {label:"Online", icon:Video} 
  ];

  const [selected, setSelected] = useState(defaultValue || options[0].label);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange(option);
  };

  return(
    <div className="w-full h-20 flex flex-col gap-3 space-y-2 ">
      {title}

      <div className="w-full bg-input-base h-12 rounded-lg border-input-stroke border-1 py-1 gap-1 flex justify-center">
      {options.map(({label,icon:Icon}) => (
        <label key={label} className="cursor-pointer p-1 w-full flex items-center justify-center">
          <input
            type="radio"
            name="segmented-control"
            value={label}
            checked={selected === label}
            onChange={() => handleSelect(label)}
            className="hidden"
          />
          <span className={`px-4 py-1.5 rounded-[5px] focus:outline-none w-full flex justify-center items-center gap-2 transition-all duration-300
            ${selected === label ? "bg-shape-button text-text-heading font-semibold" : "text-text-body"}`}
          >
            <Icon size={16} className={selected === label ? "text-brand-light": "text-text-body"}/> 
            {label}
          </span>
          
        </label>
      ))}
    </div>
    </div>
  );
}

/*
interface SegmentedControlProps extends ComponentProps<'button'>{}

export function SegmentedControl({title, ...props}: SegmentedControlProps){
  const [tipo, setTipo] = useState("presencial");

  return(
    <div className="w-full h-20 flex flex-col gap-3 space-y-2 ">
      {title}
    
      <div className="w-full bg-input-base h-12 rounded-lg border-input-stroke border-1 p-1 gap-1 flex relative justify-center">
        <div
          className={`absolute top-1 left-1 h-9  rounded-lg w-[129px] bg-shape-button transition-all duration-300 ${
            tipo === "online" ? "translate-x-full" : ""
          }`}
        />
        <button 
          className="relative flex items-center p-1 gap-2 text-sm w-full z-10 justify-center transition-colors rounded-[5px]"
          onClick={()=>{setTipo("presencial")}}
        >
            <Building2  size={16}/>
            Presencial
        </button>
        <button 
          className="relative flex items-center p-1 gap-2 text-sm w-full z-10 justify-center transition-colors rounded-[5px]"
          onClick={()=>{setTipo("online")}}
        >
            <Video  size={16}/>
            Online
        </button>
      </div>
   </div>
  )
}
*/