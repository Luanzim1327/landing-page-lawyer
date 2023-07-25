import Image from "next/image"
import ImagePerson from "../../public/comentarios/cm-1.jpg"
// stars within container comentary
export default function Comentarios () {
    return (
        <section className="md:py-10 flex flex-col items-center md:w-3/4 md:mx-auto">
            <div className="py-5">
                <h2 className="font-bold text-3xl text-slate-800">Meus clientes</h2>
            </div>
            <div className="p-2 md:p-0 md:flex-row md:flex flex-col w-full md:justify-between">
                <ContainerComentary />
            </div>
        </section>
    )
}

function ContainerComentary () {
    let comments = [
        {
            name:"João",
            comentary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis reprehenderit saepe iste, placeat assumenda nulla eligendi quibusdam repellat.",
            img : "../../public/comentarios/cm-1.jpg"
        },
        {
            name:"Pedro",
            comentary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis reprehenderit saepe iste, placeat assumenda nulla eligendi quibusdam repellat.",
            img : "../../public/comentarios/cm-2.png"
        },
        {
            name:"Maria",
            comentary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis reprehenderit saepe iste, placeat assumenda nulla eligendi quibusdam repellat.",
            img : "../../public/comentarios/cm-3.jpg"
        }
    ]

    return comments.map((comment) => (
        <div className="bg-slate-600 px-5 my-3 md:my-0 md:w-64 shadow-lg shadow-slate-200/50">
            <div className="flex md:flex-row justify-between items-center py-2">
                <h4 className="text-slate-200 text-2xl">{comment.name}</h4>
                <div>
                    <Image src={ImagePerson} className="rounded-full" width={50} alt="foto" />
                </div>
            </div>
            <div className="py-2">
                <p className="text-slate-100 italic text-sm">"{comment.comentary}"</p>
            </div>
        </div>
    ))
}