import About from "@/components/About"
import Info from "@/components/Info"
import ModalContactProvider from "@/components/Modal"
import RecommendedPosts from "@/components/RecommendedPosts"

export default function Home() {

  return (
    <div>
      <ModalContactProvider>
          <RecommendedPosts />
          <About />
          <Info />
      </ModalContactProvider>
    </div>
  )
}
