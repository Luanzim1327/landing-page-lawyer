import Image from "next/image"
import ImagePerson from "../../public/comentarios/cm-1.jpg"

export default function Comentarios () {
    return (
        <section className="flex flex-col items-center">
            <div className="py-5">
                <h2 className="font-bold text-3xl text-slate-800">Meus clientes</h2>
            </div>
            <div className="flex py-10">
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
        <div className="bg-slate-600 mx-5 px-5">
            <div className="flex justify-between items-center py-3">
                <h4 className="text-slate-200 py-2 text-2xl">{comment.name}</h4>
                <div>
                    <Image src={ImagePerson} className="rounded-full" width={60} height={100} alt="foto" />
                </div>
            </div>
            <div className="py-3">
                <p className="text-slate-100 italic text-sm">{comment.comentary}</p>
            </div>
        </div>
    ))
}