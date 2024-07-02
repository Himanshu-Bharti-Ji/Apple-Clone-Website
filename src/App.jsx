import Features from "./components/Features"
import Hero from "./components/Hero"
import Higlights from "./components/Higlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

import * as Sentry from "@sentry/react"

const App = () => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Higlights />
      <Model />
      <Features />
    </main>
  )
}

export default Sentry.withProfiler(App);
