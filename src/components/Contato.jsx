export default function Contact () {
    return(
        <section className="container mx-auto flex flex-col items-center py-5 ">
            <div className="py-3 text-xl font-semibold text-slate-800">
                <h2>O que eu posso fazer por você ?</h2>
            </div>
            <form action="https://formsubmit.co/contatoluanmas@gmail.com" method="POST" className="space-y-3">
                <div className= "w-full">
                    
                    <input type="text" className="md:w-1/3 block w-full my-3 py-2 pl-2" placeholder="Seu nome" name="name" id="name" required/>
                    <input type="email"className="md:w-2/3 block w-full my-3 py-2 pl-2"  name="email" placeholder="Seu melhor email" required/>
                </div>

                <div className="flex flex-col space-y-2">
                    <input className="block w-full py-2 pl-2" type="text" placeholder="Assunto" name="subject" id="subject" required/>
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10" 
                        placeholder="Mensagem" 
                        required
                        className="block pl-2"
                    />
                </div>

                
                <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem , entraremos em contato o mais rapido possível" />
                <div className="py-3 flex justify-center bg-slate-700 font-bold text-slate-100">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}