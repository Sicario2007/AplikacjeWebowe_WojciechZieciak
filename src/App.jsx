import PhotoCard from "../components/PhotoCard"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import CategoryBar from "../components/CategoryBar"
import Gallery from "../components/Gallery"

function App()
{
  return(
    <>
    <Navbar />
      <Header />

      <main className="container">
        <CategoryBar />
        <Gallery />
      </main>
    </>
  )
}

export default App