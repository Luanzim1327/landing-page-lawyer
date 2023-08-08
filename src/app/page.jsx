import Header from "@/components/Header"
import About from "@/components/About"
import Info from "@/components/Info"
import Footer from "@/components/Footer"
import ModalContactProvider from "@/components/Modal"
import RecommendedPosts from "@/components/RecommendedPosts"

export default function Home() {

  return (
    <div>
      <ModalContactProvider>
          <Header />
          <RecommendedPosts />
          <About />
          <Info />
          <Footer />
      </ModalContactProvider>
    </div>
  )
}
