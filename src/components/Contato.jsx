export default function Contact () {
    return(
        <section className="container md:mx-auto flex flex-col py-5 md:w-3/4">
            <div className="flex bg-slate-200">
                <div className="md:w-1/2 md:h-full">
                    <img src="https://i.pinimg.com/564x/d4/dc/1e/d4dc1e7de1a26cda10d186e66252c788.jpg" alt="lawyer-photo"/>
                </div>

                <form action="https://formsubmit.co/contatoluanmas@gmail.com" method="POST" className="md:flex md:flex-col md:mx-auto md:justify-center md:space-y-5">
                    <div className="md:py-3 md:text-lg font-semibold text-slate-800">
                        <h2>O que eu posso fazer por você ?</h2>
                    </div>

                    <div className= "w-full">
                        <label htmlFor="name">Name <span className="text-red-500">*</span></label>
                        <input type="text" className="shadow-lg shadow-slate-300/50 outline-none block w-full py-2 pl-2" placeholder="Seu nome" name="name" id="name" required/>
                    </div>

                    <div className= "w-full">
                        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <input type="email"className="block w-full py-2 pl-2 shadow-lg shadow-slate-300/50 outline-none"  name="email" placeholder="Seu melhor email" required/>
                    </div>

                    <div>
                        <label htmlFor="subject">Assunto <span className="text-red-500">*</span></label>
                        <input className="block w-full py-2 pl-2 shadow-lg shadow-slate-300/50 outline-none" type="text" placeholder="Assunto" name="subject" id="subject" required/>
                    </div>

                    <div>
                        <label htmlFor="message">Mensagem <span className="text-red-500">*</span></label>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="5" 
                            placeholder="Mensagem" 
                            required
                            className="block shadow-lg shadow-slate-300/50 outline-none"
                        />
                    </div>

                    
                    <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem , entraremos em contato o mais rapido possível" />
                    <div className="flex justify-center">
                        <button className="bg-slate-700 font-bold text-slate-100 w-full py-2" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}