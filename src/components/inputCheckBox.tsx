import { ComponentProps, ReactNode, useState } from "react";

interface InputCheckBoxProps extends ComponentProps<'input'>{
  children: ReactNode;
  text:string;
}

export function InputCheckBox({children, text}: InputCheckBoxProps){

  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheck = () =>{
    setIsChecked(!isChecked)
  }

  const palavrasParaEstilizar = ["Termos e Condições", "Política de Privacidade"];

  const regex = new RegExp(`(${palavrasParaEstilizar.join("|")})`, "gi");

  const textoFormatado = text.split(regex).map((parte, index) => {
    if (palavrasParaEstilizar.includes(parte)) {
      return (
        <span key={index} className="text-brand-light font-semibold">
          {parte}
        </span>
      );
    }
    return <span key={index}>{parte}</span>;
  });


  return(
    
    <label className="flex gap-3 items-center text-sm py-1">
      <input type="checkbox" className="hidden peer" checked={isChecked} onChange={handleCheck}/>
      <div  className={`w-5 h-5 border-[1px]  rounded-sm flex  justify-center cursor-pointer ${isChecked === false ? "border-input-stroke": "border-brand-light"}`}>
        <span className={`${isChecked === false ? "hidden": "text-brand-light block"}`}>
          {children}
        </span>
      </div>
      
      {textoFormatado}
    </label>
  )
}

