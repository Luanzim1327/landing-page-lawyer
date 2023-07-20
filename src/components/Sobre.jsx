import Image from "next/image"
import SobreImagem from "../../public/sobre.jpeg"

export default function Sobre () {
    return (
        <section className="flex justify-center items-center py-5 w-3/4 mx-auto">
            <div className="md:flex rounded-md overflow-hidde">
                {/* Procurar uma imagem na vertical */}
                <div className="w-full">
                    <Image src={SobreImagem} alt="profile"/>
                </div>
                <div className="bg-slate-300 px-2">
                    <h2 className="py-3 text-slate-800 font-bold text-xl md:text-3xl">Quem é Nome ?</h2>
                    <div className="text-slate-600 pb-2">
                        <p className="text-sm md:text-base md:text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eaque accusantium consectetur, accusamus, quidem recusandae minima ab facere adipisci aliquam inventore voluptatem quae, rem quia magnam maiores illum repudiandae repellat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}