export default function Contact () {
    return(
        <section className="container mx-auto flex flex-col items-center py-5 ">
            <div className="py-3 text-3xl font-semibold text-slate-800">
                <h2>O que eu posso fazer por você ?</h2>
            </div>
            <form action="https://formsubmit.co/contatoluanmas@gmail.com" method="POST" className="space-y-3">
                <div className="flex justify-between">
                    
                    <input type="text" className="w-1/3" placeholder="Seu nome" name="name" id="name" required/>
                    <input type="email"className="w-2/3"  name="email" placeholder="Seu melhor email" required/>
                </div>

                <div className="flex flex-col space-y-2">
                    <input className="block" type="text" placeholder="Assunto" name="subject" id="subject" required/>
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10" 
                        placeholder="Mensagem" 
                        required
                        className="block"
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