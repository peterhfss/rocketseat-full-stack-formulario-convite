"use client"

import { InputText } from "@/components/inputText";

import Logo from "../assets/Logo.svg";

import Image from "next/image";
import { Calendar, Contact, PaintbrushVertical } from "lucide-react";
import { SegmentedControl } from "@/components/segmentedControl";
import { TextArea } from "@/components/textArea";
import { ColorSelecion } from "@/components/colorSelection";

import { colors, themeEvents } from "@/constants";

import { useState } from "react";
import { ThemeSelecion } from "@/components/themeSelection";
import { InputCheckBox } from "@/components/inputCheckBox";

export default function Home() {

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  return (
    <main className="max-w-7xl mx-auto p-5 bg-shape-background flex gap-5 rounded-[20px] min-h-[768px]">
      <div className="w-[400px] h-[728px] rounded-xl bg-[url(/background.png)] bg-no-repeat p-8">
        <div className="h-36 mx-auto max-w-[336px] flex flex-col gap-4">
          <Image src={Logo} alt="Picture of Logo" className="h-12 w-11"/>
          <span className="flex flex-col gap-1">
            <h1 className="text-accent-pink text-[40px] font-leckerli-one">Festivite</h1>
            <p>Crie um convite digital para o seu evento</p>
          </span>
        </div>
      </div>
      <div className="w-[820px] bg-shape-body rounded-xl py-20 flex flex-col items-center gap-10 h-[728px] overflow-auto">
        <h2 className="text-text-heading font-baloo-2 text-[28px] w-[560px] font-bold h-11">Crie seu convite</h2>
        <div className="h-full flex flex-col gap-12 w-[560px]">

            <section className="flex flex-col gap-6 h-full">
              <div className="flex gap-3">
                <Calendar strokeWidth={1.5} className="text-input-placeholder"/>
                <p className="text-text-heading text-lg leading-[20px] font-baloo-2 font-bold">Sobre o evento</p>
              </div>
              <form className="flex flex-col gap-4 h-[452px]">
                <InputText title="Título" placeholder="Nome do evento" />
                <span className="flex gap-4">
                  <InputText title="Início" placeholder="DD/MM/AAAA, --:--" />
                  <InputText title="Fim" placeholder="DD/MM/AAAA, --:--" />
                </span>
                <span className="flex gap-4">
                  <SegmentedControl  title="Tipo" onChange={(selected) => console.log("Selecionado:", selected)}/>
                  <InputText title="Local" placeholder="Link ou endereço" />
                </span>
                <TextArea title="Descrição" placeholder="Escreva sobre os detalhes do evento" />
              </form>
            </section>
          
            <section className="flex flex-col gap-6">
              <div className="flex gap-3">
                <PaintbrushVertical strokeWidth={1.5} className="text-input-placeholder"/>
                <p className="text-text-heading text-lg leading-[20px] font-baloo-2 font-bold">Personalização</p>
              </div>
              <form className="max-h-[570px] flex flex-col gap-7">
                <div className="w-full flex gap-4 flex-col">
                  <p>Cor principal</p>
                  <div className="flex justify-between">
                    {colors.map((color)=>(
                      <ColorSelecion key={color.name} color={color.value} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>Tema do evento</p>
                  <div className="grid grid-cols-4 grid-rows-3 gap-2">
                    {themeEvents.map((theme)=>( 
                      <ThemeSelecion key={theme.label} src={theme.value} name={theme.label} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}/>
                    ))}
                  </div>
                </div>
              </form>
            </section>
          
            <section className="flex flex-col">
              <div className="flex gap-3">
                <Contact strokeWidth={1.5} className="text-input-placeholder"/>
                <p className="text-text-heading text-lg leading-[20px] font-baloo-2 font-bold">Dados para contato</p>
              </div>
            </section>

            <footer className="">
                <InputCheckBox label="text"/>
            </footer>
        </div>
      </div>
    </main>
  );
}
