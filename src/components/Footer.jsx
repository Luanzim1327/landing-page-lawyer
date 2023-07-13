import Image from "next/image"
import FacebookIcon from "../../public/facebook.svg"

export default function Footer () {
    return (
        <footer className="flex flex-col bg-slate-300">
            <div className="flex justify-around items-start py-16">
                <ul className="flex flex-col space-y-5">
                    <li className="text-slate-800">Endereço : <a className="text-slate-600" href="#">391 Elgin St. Celina, Delaware 10299</a></li>
                    <li className="text-slate-800">Telefone : <a className="text-slate-600" href="#">+84 1102 2703</a></li>
                    <li className="text-slate-800">Email : <a className="text-slate-600" href="#">example1234@gmail.com</a></li>
                </ul>
                <div>
                    <h5 className="text-sm font-bold pb-4">SOCIAL:</h5>
                    <div className="flex space-x-5">
                        <Image src={FacebookIcon} alt="facebook"/>
                        <Image src={FacebookIcon} alt="facebook"/>
                        <Image src={FacebookIcon} alt="facebook"/>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 py-5 pl-10">
                <p className="text-slate-100 text-sm">
                    Todos os direitos reservados para Luan Silva @ 2023
                </p>
            </div>
        </footer>

    )
}