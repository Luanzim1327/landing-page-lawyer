"use client";

import Image from "next/image";
import AdvogadoFoto from "../../public/advogado.png"
import { useState } from "react";

export default function Header () {

    // const [stateImage , setStateImage] = useState("https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png");
    // const [menu , setMenu] = useState(0);

    let itemsList = ["Home" , "Services" , "About" , "Contact"];

    return (
        <header className="bg-slate-300">
            <nav className="md:flex md:justify-between items-center text-slate-800">
                <div className="flex justify-between items-center px-2">
                    <h2 className="font-bold text-2xl">Logo</h2>
                    <img className="md:hidden py-2" width={30} name="menu" src={"https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png"} alt="icon" />
                </div>
                <ul className="md:bg-transparent md:items-center flex flex-col text-center md:flex-row bg-slate-200">
                    <ListItem items={itemsList}/>
                </ul>
            </nav>
            <div className="
                flex flex-col
                justify-center 
                w-3/4
                mx-auto  
                py-5  
            ">
                <div className="flex justify-center">
                    <Image src={AdvogadoFoto} width={200} alt="advogado"/>
                </div>
                <div className="
                    flex flex-col 
                    justify-center
                  bg-slate-200
                    p-2
                    rounded
                  ">
                    <h2 className="py-2 text-xl font-bold text-slate-800">Lorem ipsum dolor</h2>
                    <p className="text-justify text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, numquam sunt explicabo adipisci voluptates amet.
                    </p>
                </div>
            </div>
        </header>
    )
}

function ListItem ({items}) {
    return items.map((item) => {
        let url = item.toLowerCase();
        if (url === "home") {
            url = "/"
        }

        return <li className="cursor-pointer pl-4 py-3 md:px-2 font-semibold hover:bg-slate-400" key={item}>{item}</li>
    })
}