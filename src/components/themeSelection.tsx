"use client"

import { ComponentProps } from "react";
import Image from "next/image";

interface ThemeSelectionProps extends ComponentProps<'input'>{
  src: string;
  name:string;
  selectedTheme: string;
  setSelectedTheme: (name:string) => void
}

export function ThemeSelecion({src, name, selectedTheme, setSelectedTheme}:ThemeSelectionProps){

  return(
   <div 
      onClick={()=> setSelectedTheme(name)}
      className={`w-[134px] h-[103px] flex flex-col gap-2 px-1 pb-2 pt-1 bg-shape-button border border-input-stroke rounded-lg hover:bg-shape-hover 
        hover:cursor-pointer  ${selectedTheme === name ? "outline-brand-light outline-2": " outline-0"}`}
    >
        <Image src={src} alt={name} width={126} height={64} />
        <label className="text-sm text-text-heading w-full text-center">
          <input 
            type="radio"
            name="name"
            checked={selectedTheme === name}
            readOnly
            className="hidden"
            onChange={()=> setSelectedTheme(name)}
          />
          {name}
        </label>
   </div>
  );
}