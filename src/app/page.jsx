import Header from "@/components/Header"
import AreaAtuacao from "@/components/AreaAtuacao";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import Comentarios from "@/components/Comentarios";
import Contato from "@/components/Contato";
import Carrosel from "@/components/Carrosel";

export default function Home() {
  return (
    <div>
      <div id="Home" className="bg-slate-100 md:w-4/5 md:mx-auto">
        <Header />
        <Carrosel />
        <AreaAtuacao />
        <Sobre />
        <Comentarios />
        <Contato />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
