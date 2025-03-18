import { ComponentProps } from "react";

interface InputCheckBoxProps extends ComponentProps<'input'>{
  label:string
}

export function InputCheckBox({label}: InputCheckBoxProps){
  return(
    
    <label>
      <input type="checkbox" className="hidden peer" />
      <div  className=""/>
    </label>
  )
}

