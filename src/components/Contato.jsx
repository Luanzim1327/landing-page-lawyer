"use client"

import { useState } from "react"

export default function Contact () {
    const [displayForm , setDisplayForm] = useState(false);

    function openForm () {
        setDisplayForm(true);
    }

    function closeForm () {
        setDisplayForm(false);
    }

    return(
        <section id="Contact" className="container w-3/4 py-14">                
                    <div className="relative bg-[url('https://i.pinimg.com/564x/6b/1b/d2/6b1bd2b750f92767288e326610668b1c.jpg')] bg-no-repeat bg-cover h-96">  
                        <div onClick={openForm} className="cursor-pointer absolute w-full h-full flex justify-center bg-slate-800/50">
                            <button className="text-slate-200 text-3xl font-semibold">Contato</button>
                        </div>
                    </div>
                    <FormContact stateForm={displayForm} onClose={closeForm}/>
        </section>
    )
}

    function FormContact ({stateForm , onClose}) {

        return (
        <section  className={`${stateForm ? "flex" : "hidden"} z-10 fixed top-0 left-0 w-full h-full bg-slate-500/80 flex-col justify-center items-center`}>
            <div className="w-full text-right pr-5">
                <button onClick={onClose}>Fechar</button>
            </div>
            <form action="https://formsubmit.co/contatoluanmas@gmail.com" method="POST" className="w-1/2 space-y-6">
                        <div className="md:py-3 md:text-3xl font-semibold text-slate-100">
                            <h2>O que eu posso fazer por você ?</h2>
                        </div>

                        <div className= "w-full">
                            <label htmlFor="name">Name <span className="text-red-500">*</span></label>
                            <input type="text" className="shadow-lg shadow-slate-300/10 outline-none block w-full py-2 pl-2" placeholder="Seu nome" name="name" id="name" required/>
                        </div>

                        <div className= "w-full">
                            <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                            <input type="email"className="block w-full py-2 pl-2 shadow-lg shadow-slate-300/10 outline-none"  name="email" placeholder="Seu melhor email" required/>
                        </div>

                        <div>
                            <label htmlFor="subject">Assunto <span className="text-red-500">*</span></label>
                            <input className="block w-full py-2 pl-2 shadow-lg shadow-slate-300/10 outline-none" type="text" placeholder="Assunto" name="subject" id="subject" required/>
                        </div>

                        <div className="w-full">
                            <label htmlFor="message">Mensagem <span className="text-red-500">*</span></label>
                            <textarea 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="5" 
                                placeholder="Mensagem" 
                                required
                                className="block shadow-lg shadow-slate-300/10 outline-none w-full py-2 pl-2"
                            />
                        </div>

                        
                        <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem , entraremos em contato o mais rapido possível" />
                        <div className="flex justify-center">
                            <button className="bg-slate-700 font-bold text-slate-100 w-full py-2" type="submit">Enviar</button>
                        </div>
            </form>
        </section>
        )
    }
