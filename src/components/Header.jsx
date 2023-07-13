import Link from "next/link";
import Image from "next/image";
import AdvogadoFoto from "../../public/advogado.png"

export default function Header () {

    let itemsList = ["Home" , "Services" , "About" , "Contact"]

    return (
        <header className="bg-slate-300">
            <nav className="flex justify-between h-20 p-4 items-center text-slate-800">
                <h2 className="font-bold text-2xl">Paulo Jr</h2>
                <ul className="font-semibold flex gap-6 list-none">
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

        return <li className="flex items-center" key={item}><Link className="h-full" href={`/${url}`}>{item}</Link></li>
    })
}