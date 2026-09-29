import PhotoCard from "../components/PhotoCard"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import CategoryBar from "../components/CategoryBar"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import AddPhotoModal from "../components/AddPhotoModal"
import FiltersOffcanvas from "../components/FiltersOffCanvas"

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

      <Footer />
      <AddPhotoModal />
      <FiltersOffcanvas />
    </>
  )
}

export default App