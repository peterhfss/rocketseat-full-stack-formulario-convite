import { ComponentProps } from "react";

interface ColorSelectionProps extends ComponentProps<'input'>{
  color: string;
  selectedColor: string;
  setSelectedColor: (color:string) => void
}

export function ColorSelecion({color, selectedColor, setSelectedColor}:ColorSelectionProps){

  return(
   <div className={`h-10 w-10 bg-shape-button rounded-full flex flex-col justify-center items-center hover:bg-shape-hover 
     ${selectedColor === color ? "border-brand-light border-2": "border-none"}`}
   >
    
    <label className="flex items-center cursor-pointer">
      <input 
        type="radio" 
        name="color"
        value={color}
        className="hidden"
        checked={selectedColor === color}
        onChange={() => setSelectedColor(color)}
      />
      <div 
        className={`w-7 h-7 rounded-full `} 
        style={{backgroundColor: color}}
        
      ></div>
    </label>
   </div>
  );
}