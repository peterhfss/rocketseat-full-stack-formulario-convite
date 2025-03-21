import { ComponentProps, ReactNode,  } from "react";

interface ButtonProps extends ComponentProps<'button'>{
 children :ReactNode;
}

export function Button({children}: ButtonProps){
  return(
    <button className="w-[177px] h-12 py-1 px-5 bg-brand-dark flex gap-3 items-center rounded-lg text-base text-text-heading font-medium cursor-pointer hover:bg-brand-mid">
      {children}
      <p className="w-full">Gerar convite</p>
    </button>
  )
}