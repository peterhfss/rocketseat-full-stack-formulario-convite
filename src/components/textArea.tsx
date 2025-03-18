import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<'textarea'>{
  error?: boolean
}

export function TextArea({title, error=false, placeholder, ...props}: TextAreaProps){
  return(
    <div 
      data-error={error}
      className="w-full h-20 flex flex-col gap-3 group"
    >
      <label className="text-text-body text-sm">
        {title}
      </label>
      <textarea
          placeholder={placeholder}
          className="w-full min-h-[136px] bg-input-base rounded-lg p-4 border-1 focus:outline-1 focus:outline-brand-light border-input-stroke text-text-heading placeholder-shown:text-input-placeholder group-data-[error=true]:outline-feedback group-data-[error=true]:outline-1"
        />
    </div>
    
  )
}