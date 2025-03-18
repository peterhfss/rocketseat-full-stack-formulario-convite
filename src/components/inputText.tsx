import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'>{
  error?: boolean
}

export function InputText({title, error=false, placeholder, ...props}: InputProps){
  return(
    <div 
      data-error={error}
      className="w-full h-20 flex flex-col gap-3 group"
    >
      <label className="text-text-body text-sm">
        {title}
      </label>
      <input 
          type="text" 
          placeholder={placeholder}
          className="w-full h-12 bg-input-base rounded-lg px-4 text-text-heading focus:outline-1 focus:outline-brand-light border border-input-stroke placeholder-shown:text-input-placeholder outline-offset-0 group-data-[error=true]:outline-feedback group-data-[error=true]:outline-1"
        />
    </div>
    
  )
}