import PhotoCard from "../components/PhotoCard"
import Navbar from "../components/Navbar"
import Header from "../components/Header"

function App()
{
  return(
    <>
    <Navbar />
      <Header />
      <div className="container mt-4">
        <PhotoCard />
      </div>
    </>
  )
}

export default App