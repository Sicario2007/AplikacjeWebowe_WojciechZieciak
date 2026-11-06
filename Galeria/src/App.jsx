import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App()
{
  const [zdjecia, setZdjecia] = useState([]) 
  const [isLoading, setIsLoading] = useState(true) 
  const [error, setError] = useState(null) 
  const [aktywnaKategoria, setAktywnaKategoria] = useState('wszystkie') 
 
  useEffect(() => { 
    async function pobierzZdjecia() { 
      try { 
        const odpowiedz = await fetch('/photos.json') 
        if (!odpowiedz.ok) throw new Error('Błąd serwera: ' + odpowiedz.status) 
        const dane = await odpowiedz.json() 
        setZdjecia(dane) 
      } catch (err) { 
        setError(err.message) 
      } finally { 
        setIsLoading(false) 
      } 
    } 
 
    pobierzZdjecia() 
  }, []) 
  
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

    function przelaczUlubione(id) {
      setZdjecia(
        zdjecia.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z))
      )
    }

     if (isLoading) { 
    return ( 
      <div className="text-center mt-5"> 
        <div className="spinner-border text-primary" role="status" /> 
        <p className="mt-2 text-muted">Ładowanie galerii...</p> 
      </div> 
    ) 
  } 
 
  if (error) { 
    return ( 
      <div className="alert alert-danger m-4"> 
        Nie udało się pobrać danych: {error} 
      </div> 
    ) 
  } 
 
  if (zdjecia.length === 0) { 
    return <div className="alert alert-secondary m-4">Katalog jest na razie pusty.</div> 
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
        

        <Gallery zdjecia={widoczne} onUsun={usunZdjecie} onPrzelacz={przelaczUlubione}/>
      </main>

      <Footer />
      <AddPhotoModal onDodaj={dodajZdjecie} />
      <FiltersOffcanvas aktywna={aktywnaKategoria} onWybierz={setAktywnaKategoria} />
    </>
  )
}

export default App