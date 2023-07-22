"use client"

import { useState } from "react"

export default function Sobre () {

    const [divVisible , setDivVisible] = useState(false);

    function OpenDiv () {
        setDivVisible(true);
    }

    function CloseDiv () {
        setDivVisible(false);
    }

    return (
        <section id="About" className="md:w-3/4 md:mx-auto md:h-60 md:py-10">
                <InterfaceSobre divState={divVisible} OnClose={CloseDiv}/>
                <div className="bg-[url('https://i.pinimg.com/564x/5a/83/72/5a83723dfeb4308269f86b9755812a81.jpg')] md:w-full md:h-full bg-no-repeat bg-cover">
                    <div onClick={OpenDiv} className="cursor-pointer bg-slate-700/60 w-full h-full md:flex md:justify-center md:items-center">
                            <h2 className="md:text-3xl font-semibold text-slate-200">
                                Sobre mim
                            </h2>
                    </div>            
                </div>
        </section>
    )
}

function InterfaceSobre ({divState , OnClose}) {
    
    return(
        <div className={`${divState ? "flex" : "hidden"} justify-center items-center fixed z-10 top-0 left-0 h-full w-full bg-slate-400/50`}>
            <div className="w-1/3 bg-slate-400 relative">
                <div className="w-full text-right pr-1 absolute top-0 right-0">
                    <button onClick={OnClose} className="hover:text-white">Fechar</button>
                </div>
                <div>
                    <h2 className="py-2 pl-2 text-xl font-bold">Sobre mim</h2>
                    <p className="py-2 pl-2 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam. Delectus laboriosam iure, tempore consequuntur a porro voluptatum saepe eos. Neque, commodi nam! Earum, suscipit magnam dolorum quibusdam aut dicta!</p>
                </div>
            </div>
        </div>
    )
}
// Criar um modal para o sobre mim