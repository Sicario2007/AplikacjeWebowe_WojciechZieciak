import PhotoCard from "../components/PhotoCard"
import Navbar from "../components/Navbar"

function App()
{
  return(
    <>
    <Navbar />
      <div className="container mt-4">
        <h1>Galeria zdjęć</h1>
        <PhotoCard />
      </div>
    </>
  )
}

export default App