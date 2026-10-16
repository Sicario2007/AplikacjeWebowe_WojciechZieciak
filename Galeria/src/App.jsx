import { useState } from "react"
import PhotoCard from "../components/PhotoCard"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import CategoryBar from "../components/CategoryBar"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import AddPhotoModal from "../components/AddPhotoModal"
import FiltersOffcanvas from "../components/FiltersOffCanvas"
import photos from "../data/photos.json"
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'

function App()
{
  const [zdjecia, setZdjecia] = useState(photos);
  const [aktywnaKategoria, setAktywnaKategoria] = useState('wszystkie')
  
  const widoczne =
    aktywnaKategoria === 'wszystkie'
    ? zdjecia
    : zdjecia.filter(z => z.category === aktywnaKategoria)

    function usunZdjecie(id) {
      setZdjecia(zdjecia.filter(z => z.id !== id))
    }

    function dodajZdjecie(nowe) {
      const noweId = Math.max(...zdjecia.map(z => z.id)) + 1
      setZdjecia([...zdjecia, { ...nowe, id: noweId, favorite: false }])
    }
  return(
    <>
    <Navbar />
      <Header />

      <main className="container">
        <CategoryBar aktywna={aktywnaKategoria} onWybierz={setAktywnaKategoria} />

        <p className="text-body-secondary">
          Wyświetlono {widoczne.length} z {zdjecia.length} zdjęć
        </p>

        {widoczne.length === 0 && (
          <div className="alert alert-warning">
            Nie znaleziono zdjęć w tej kategorii.
          </div>
        )}

        <Gallery zdjecia={widoczne} onUsun={usunZdjecie}/>
      </main>

      <Footer />
      <AddPhotoModal onDodaj={dodajZdjecie} />
      <FiltersOffcanvas aktywna={aktywnaKategoria} onWybierz={setAktywnaKategoria} />
    </>
  )
}

export default App