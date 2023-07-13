import Header from "@/components/Header"
import AreaAtuacao from "@/components/AreaAtuacao";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Header />
      <AreaAtuacao />
      <Sobre />
      <Footer />

    </div>
  )
}
