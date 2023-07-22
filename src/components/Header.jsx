"use client";

import Image from "next/image";
import AdvogadoFoto from "../../public/advogado.png"
import {Link} from 'react-scroll';

export default function Header () {

    let itemsList = ["Home" , "Services" , "About" , "Contact"];
    return (
        <header className="md:sticky md:top-0 md:bg-slate-200/50">
            <nav className="md:flex md:justify-between items-center text-slate-800">
                <div className="bg-transparent flex justify-between items-center px-2">
                    <h2 className="font-bold text-2xl">Logo</h2>
                    <img className="md:hidden py-2" width={30} name="menu" src={"https://cdn.icon-icons.com/icons2/934/PNG/512/menu-button_icon-icons.com_72989.png"} alt="icon" />
                </div>
                <ul className=" bg-transparent md:items-center flex flex-col text-center md:flex-row">
                    <ListItem items={itemsList}/>
                </ul>
            </nav>
            <div className="
                flex flex-col
                md:hidden
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

        return (
            <li className="cursor-pointer pl-4 py-3 md:px-1 md:w-20 font-semibold hover:bg-slate-400" key={item}>
                <Link to={item} activeClass="active" smooth={true} spy={true}>
                    {item}
                </Link>
                {console.log(item)}
            </li>
            )
    })
}