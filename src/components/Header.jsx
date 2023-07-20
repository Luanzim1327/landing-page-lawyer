"use client";

import Image from "next/image";
import AdvogadoFoto from "../../public/advogado.png"
import { useState } from "react";

export default function Header () {

    // const [stateImage , setStateImage] = useState("https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png");
    // const [menu , setMenu] = useState(0);

    let itemsList = ["Home" , "Services" , "About" , "Contact"];
    // bg-slate-300
    // bg-[url('https://i.pinimg.com/564x/83/12/bc/8312bc853dbf3af9e366cd7646b98a33.jpg')]
    return (
        <header className="relative bg-slate-300">
            <nav className="md:flex md:justify-between items-center text-slate-800">
                <div className="bg-transparent flex justify-between items-center px-2">
                    <h2 className="font-bold text-2xl">Logo</h2>
                    <img className="md:hidden py-2" width={30} name="menu" src={"https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png"} alt="icon" />
                </div>
                <ul className=" md:bg-transparent md:items-center flex flex-col text-center md:flex-row bg-slate-200">
                    <ListItem items={itemsList}/>
                </ul>
            </nav>
            <div className="
                flex flex-col
                md:flex md:flex-row
                justify-center 
                w-3/4
                mx-auto  
                py-5  
                md:py-0
            ">
                <div className=" flex justify-center">
                    <Image className="md:hidden" src={AdvogadoFoto} width={200} alt="advogado"/>
                </div>
                <div className="
                    flex flex-col 
                    justify-center
                    md:justify-start
                    md:my-3
                  bg-slate-200
                    p-2
                    rounded
                    
                  ">
                    <h2 className="py-2 text-xl md:text-3xl font-bold text-slate-800">Lorem ipsum dolor</h2>
                    <p className="text-justify text-sm md:text-xs text-slate-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, numquam sunt explicabo adipisci voluptates amet expedita!
                    </p>
                    <p className="text-justify text-sm md:text-xs text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit, ipsa sed in minima nulla necessitatibus eius natus laboriosam deserunt temporibus accusantium sapiente totam tempora quod earum ad recusandae</p>
                
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