import PhotoCard from "../components/PhotoCard"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import CategoryBar from "../components/CategoryBar"

function App()
{
  return(
    <>
    <Navbar />
      <Header />
      {/* <div className="container mt-4">
        <PhotoCard />
      </div> */}

      <main className="container">
        <CategoryBar />
      </main>
    </>
  )
}

export default App