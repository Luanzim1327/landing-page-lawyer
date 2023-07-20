export default function Contact () {
    return(
        <section className="container mx-auto flex flex-col items-center py-5">
            <div className="py-3 md:text-2xl text-xl font-semibold text-slate-800">
                <h2>O que eu posso fazer por você ?</h2>
            </div>
            <form action="https://formsubmit.co/contatoluanmas@gmail.com" method="POST">
                <div className= "w-full">
                    <label htmlFor="name">Name <span className="text-red-500">*</span></label>
                    <input type="text" className="shadow-lg shadow-slate-300/50 outline-none block w-full py-2 pl-2 mb-4" placeholder="Seu nome" name="name" id="name" required/>

                    <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input type="email"className="block w-full py-2 pl-2 mb-4 shadow-lg shadow-slate-300/50 outline-none"  name="email" placeholder="Seu melhor email" required/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="subject">Assunto <span className="text-red-500">*</span></label>
                    <input className="block w-full py-2 pl-2 mb-4 shadow-lg shadow-slate-300/50 outline-none" type="text" placeholder="Assunto" name="subject" id="subject" required/>
                    <label htmlFor="message">Mensagem <span className="text-red-500">*</span></label>
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10" 
                        placeholder="Mensagem" 
                        required
                        className="block pl-2 pt-1 mb-4 shadow-lg shadow-slate-300/50 outline-none"
                    />
                </div>

                
                <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem , entraremos em contato o mais rapido possível" />
                <div className="flex justify-center">
                    <button className="bg-slate-700 font-bold text-slate-100 w-full py-3" type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}