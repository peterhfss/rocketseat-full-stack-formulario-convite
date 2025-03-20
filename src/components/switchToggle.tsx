import { ComponentProps, useState } from "react";

interface SwitchToggleProps extends ComponentProps<'input'>{
  title: string
}

export function SwitchToggle({title}:SwitchToggleProps){

  const [isChecked, setIsChecked ] = useState(false);

  const handleToggle = () =>{
    setIsChecked(!isChecked)
  }
  return(
    <div className="h-20 w-44 flex flex-col gap-3 ">
      <h2 className="text-text-body text-sm">{title}</h2>
      <div className="flex gap-3 items-center">
        <label className={`w-16 h-8  border-1 border-input-stroke relative rounded-full ${isChecked === true ? ' bg-brand-light' : 'bg-input-base'}`} >
          <input type="checkbox" className={`opacity-0 w-0 h-0`} checked={isChecked} onChange={handleToggle}/>
          <span 
            className={`w-6 h-6 rounded-full  cursor-pointer slider ${isChecked === true ? 'translate-x-8 bg-text-heading' : 'bg-input-stroke'}`}></span> 
        </label>
        
        <p className="text-sm transition">{`${isChecked === true ? 'Claro' : 'Escuro'}`}</p>
      </div>
    </div> 
  )
}