"use client";

import { useState } from 'react';
import {Link} from 'react-scroll';

export default function Header () {
    
    const [menuResponsive , setMenuResponsive] = useState(false);

    function openMenu () {
        setMenuResponsive(true);
    }

    function closeMenu () {
        setMenuResponsive(false);
    }

    let itemsList = ["Home" , "Services" , "About" , "Contact"];

    return (
        <header className="z-10 md:sticky md:top-0 md:bg-slate-400/50">
            <nav className="relative md:flex md:justify-between text-slate-800">
                <div className="md:bg-transparent bg-slate-100 w-full md:w-auto fixed md:static top-0 z-10 flex justify-between items-center px-2">
                    <h2 className="font-bold text-2xl">Logo</h2>
                    <img onClick={() => openMenu()} className="md:hidden py-2" width={30} name="menu" src={"https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png"} alt="icon" />
                </div>
                <ul className={`${menuResponsive ? "block" : "hidden"} md:bg-transparent w-full md:w-auto bg-slate-400/80 fixed top-0 z-10 md:static md:items-center md:flex flex-col text-center md:flex-row`}>
                    <div onClick={() => closeMenu()} className='md:hidden m-3'>
                        <img width={30} src="https://img.icons8.com/?size=512&id=3062&format=png" alt="" />
                    </div>
                    <ListItem items={itemsList}/>
                </ul>
            </nav>
        </header>
        // Fix features menu responsive
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
            <li onClick={() => handleItemClick(item)} key={item} className='h-10'>
                {/* Chamar a funçãp dessa forma é ótimo para garantir que o evento só aconteça quando o elemento for clicado */}
                <Link className="bg-red-500 px-2 w-20 h-full    " to={item} smooth={true} spy={true}>
                    {item}
                </Link>
            </li>
            )
    })
}

//{`${containerFocus === item ? "active" : ""}`}