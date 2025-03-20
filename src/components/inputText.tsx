import { ComponentProps } from "react";
import { CircleAlert } from "lucide-react";

interface InputProps extends ComponentProps<'input'>{
  error?: boolean;
  title:string;
  type:string;
}

export function InputText({title, error=false, placeholder, type}: InputProps){
  return(
    <div 
      data-error={error}
      className="w-full h-20 flex flex-col gap-3 group"
    >
      <label className="text-text-body text-sm">
        {title}
      </label>
      <input 
          type={type}
          placeholder={placeholder}
          className={`w-full h-12 input bg-input-base rounded-lg px-4 focus:text-text-heading focus:outline-1 focus:outline-brand-light border border-input-stroke placeholder-shown:text-input-placeholder outline-offset-0 group-data-[error=true]:outline-feedback group-data-[error=true]:outline-1 ${type === 'datetime-local' ? "uppercase  text-input-placeholder" : ""}`}
        />
        <div className="hidden group-required:w-full text-feedback group-required:flex gap-2 items-center h-4">
          <CircleAlert size={16} />
          <p className="text-xs">Campo obrigatório</p>
      </div>
    </div>
    
  )
}