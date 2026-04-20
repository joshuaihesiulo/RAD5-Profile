import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <Header/>

    <div className="px-10">
    <ProfileCard/>
    <Skills/>
    </div>
    
    <Footer/>
  </div>
  )
}

export default App
