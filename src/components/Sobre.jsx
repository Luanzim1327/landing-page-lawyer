import Image from "next/image"
import SobreImagem from "../../public/sobre.jpeg"

export default function Sobre () {
    return (
        <section className="max-w-screen-lg flex justify-center mx-auto rounded py-16">
            <div className="">
                <Image src={SobreImagem} width={600} height={400}/>
            </div>
            <div className="flex flex-col w-1/3 h-auto bg-slate-300 p-3 justify-center">
                <h2 className="text-slate-800 py-2 font-bold text-3xl">Quem é Paulo Jr ?</h2>
                <div className="text-slate-600">
                    <p className="py-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eaque accusantium consectetur, accusamus, quidem recusandae minima ab facere adipisci aliquam inventore voluptatem quae, rem quia magnam maiores illum repudiandae repellat.</p>
                    <p className="py-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ab blanditiis neque. Expedita voluptas consequuntur rem numquam in cumque reiciendis, error, doloremque facere voluptate cum, quaerat asperiores nobis dolorum architecto.</p>
                </div>
            </div>
        </section>
    )
}