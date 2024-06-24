import Hero from "./components/Hero"
import Higlights from "./components/Higlights"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Higlights />
    </main>
  )
}

export default App
