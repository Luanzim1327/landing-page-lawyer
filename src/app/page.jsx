import Header from "@/components/Header"
import AreaAtuacao from "@/components/AreaAtuacao";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import Comentarios from "@/components/Comentarios";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Header />
      <AreaAtuacao />
      <Sobre />
      <Comentarios />
      <Contato />
      <Footer />
    </div>
  )
}
