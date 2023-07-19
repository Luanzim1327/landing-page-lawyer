import Image from "next/image"
import FacebookIcon from "../../public/facebook.svg"
import TwitterIcon from "../../public/twitter.svg"
import LinkedinIcon from "../../public/linkedin.svg"

export default function Footer () {
    return (
        <footer className="flex flex-col bg-slate-100">
            <div className="flex flex-col px-2 bg-slate-300 pt-3">
                <ul className="flex flex-col space-y-2">
                    <li className="text-slate-800">Adress : <a className="text-slate-600" href="#">391 Elgin St. Celina, Delaware 10299</a></li>
                    <li className="text-slate-800">Phone : <a className="text-slate-600" href="#">+84 1102 2703</a></li>
                    <li className="text-slate-800">Email Business : <a className="text-slate-600" href="#">example1234@gmail.com</a></li>
                </ul>
                <div className="py-3">
                    <h5 className="text-sm font-bold py-2">SOCIAL</h5>
                    <div className="flex space-x-4">
                        <a href="#">
                            <Image src={FacebookIcon} alt="FacebookIcon"/>
                        </a>
                        <a href="#">
                            <Image src={TwitterIcon} alt="TwitterIcon"/>
                        </a>
                        <a href="#">
                            <Image src={LinkedinIcon} alt="LinkedinIcon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 p-3 font-semibold">
                <p className="text-slate-100 text-sm">
                All rights reserved for Luan Silva @ 2023
                </p>
            </div>
        </footer>

    )
}