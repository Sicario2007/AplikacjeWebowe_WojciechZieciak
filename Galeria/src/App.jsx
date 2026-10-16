import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import Footer from './components/Footer.jsx'
import photos from './data/photos.json'
import './App.css'

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