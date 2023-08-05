"use client"

import { useState } from "react"
import Modal from "react-modal";

export default function Sobre () {

    const [isNewAboutModal , setIsNewAboutModal] = useState(false);

    function handleOpenNewAboutModal () {
        setIsNewAboutModal(true);
    }

    function handleCloseNewAboutModal () {
        setIsNewAboutModal(false);
    }

    return (
        <section id="About" className="md:w-3/4 md:mx-auto md:h-60 md:py-10 h-56">
                <div className="bg-[url('https://i.pinimg.com/564x/5a/83/72/5a83723dfeb4308269f86b9755812a81.jpg')] md:w-full h-full bg-no-repeat bg-cover">
                    <div onClick={handleOpenNewAboutModal} className="cursor-pointer bg-slate-700/60 w-full h-full flex justify-center items-center">
                            <h2 className="text-3xl font-semibold text-slate-200">
                                Sobre mim
                            </h2>
                    </div>            
                </div>
                <Modal isOpen={isNewAboutModal} onRequestClose={handleCloseNewAboutModal}>
                    <h2>Teste Modal</h2>
                </Modal>    
        </section>
    )
}