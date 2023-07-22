import Header from "@/components/Header"
import AreaAtuacao from "@/components/AreaAtuacao";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import Comentarios from "@/components/Comentarios";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <div id="Home" className="bg-slate-100 md:w-4/5 md:mx-auto">
      <Header />
      <AreaAtuacao />
      <Sobre />
      <Comentarios />
      <Contato />
      <Footer />
    </div>
  )
}
