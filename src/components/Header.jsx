"use client";

import Image from "next/image";
import AdvogadoFoto from "../../public/advogado.png"
import { useState } from "react";

export default function Header () {

    const [stateImage , setStateImage] = useState("https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png");
    const [menu , setMenu] = useState(0);

    let itemsList = ["Home" , "Services" , "About" , "Contact"];

    return (
        <header className="bg-slate-300">
            <nav className="flex-col text-slate-800">
                <div className="flex justify-between p-3">
                    <h2 className="font-bold text-2xl">Logo</h2>
                    <img width={30} name="menu" src={stateImage} alt="icon" />
                </div>
                <ul className="flex flex-col bg-slate-200">
                    <ListItem items={itemsList}/>
                </ul>
            </nav>
            <div className="flex pt-10 justify-evenly ">
                <div className="flex flex-col justify-center max-w-md max-h-72 bg-slate-200 space-y-4 p-5">
                    <h2 className="text-3xl font-bold text-slate-800">Lorem ipsum dolor</h2>
                    <p className="text-justify text-slate-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, numquam sunt explicabo adipisci voluptates amet. Nostrum ducimus deserunt cum, saepe reiciendis quis autem suscipit cupiditate facere sapiente possimus quia molestiae
                    </p>
                </div>
                <div>
                    <Image src={AdvogadoFoto} height={400} width={400} alt="advogado"/>
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

        return <li className="pl-4 py-3 hover:bg-slate-400" key={item}>{item}</li>
    })
}

function showMenu () {

}