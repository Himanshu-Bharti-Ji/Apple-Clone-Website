import Hero from "./components/Hero"
import Higlights from "./components/Higlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Higlights />
      <Model />
    </main>
  )
}

export default App
