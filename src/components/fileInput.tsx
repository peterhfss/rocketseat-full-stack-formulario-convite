import { CircleAlert } from "lucide-react";
import { ComponentProps, ReactNode, useState } from "react";

interface FileInputProps extends ComponentProps<'input'>{
  title: string;
  children: ReactNode;
  error?: boolean
}

export function FileInput({title , children , error=false}:FileInputProps){

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const fileInput = e.target;

    if(fileInput.files && fileInput.files.length > 0){
      setSelectedFile(fileInput.files[0]);
    }
  }
  
  return(
    <div 
      data-error={error}
      className="w-[365px] h-20 flex flex-col gap-1 group"
    > 
      <h2 className="text-text-body text-sm">{title}</h2>
      <div className="flex gap-3 w-full h-12 items-center">
        <label htmlFor="file" className="bg-shape-button h-10 rounded-lg font-bold flex gap-2 px-3 py-1 w-[120px] text-sm items-center cursor-pointer">
          <span className="text-brand-light">
            {children}
          </span>
          Selecionar
        </label>
        <input 
          type="file" 
          id="file" 
          accept="image/png , image/jpeg" 
          className="hidden"
          onChange={handleFileChange}
        />
        <span className={selectedFile === null ? "text-input-placeholder" : "text-text-body"}>{selectedFile === null ? 'Nenhum arquivo selecionado': selectedFile.name}</span>
      </div>
      <div className="hidden group-data-[error=true]:w-full text-feedback group-data-[error=true]:flex gap-2 items-center h-4">
        <CircleAlert size={16} />
        <p className="text-xs">Error message</p>
      </div>
    </div> 
  );
}
