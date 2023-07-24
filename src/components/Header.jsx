"use client";

import { useState } from 'react';
import {Link} from 'react-scroll';

export default function Header () {

    let itemsList = ["Home" , "Services" , "About" , "Contact"];
    return (
        <header className="md:sticky md:top-0 md:bg-slate-400/50">
            <nav className="md:flex md:justify-between items-center text-slate-800">
                <div className="bg-transparent flex justify-between items-center px-2">
                    <h2 className="font-bold text-2xl">Logo</h2>
                    <img className="md:hidden py-2" width={30} name="menu" src={"https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png"} alt="icon" />
                </div>
                <ul className="bg-transparent md:items-center flex flex-col text-center md:flex-row">
                    <ListItem items={itemsList}/>
                </ul>
            </nav>
        </header>
    )
}

function ListItem ({items}) {

    const [containerFocus , setContainerFocus] = useState("");

    function handleItemClick (item) {
        setContainerFocus(item)
    }

    return items.map((item) => {
        let url = item.toLowerCase();
        if (url === "home") {
            url = "/"
        }

        return (
            <li onClick={() => handleItemClick(item)} className={`cursor-pointer pl-4 py-3 md:px-1 md:w-20 font-semibold ${containerFocus === item ? "active" : ""}`} key={item}>
                {/* Chamar a funçãp dessa forma é ótimo para garantir que o evento só aconteça quando o elemento for clicado */}
                <Link to={item} smooth={true} spy={true}>
                    {item}
                </Link>
            </li>
            )
    })
}

// 