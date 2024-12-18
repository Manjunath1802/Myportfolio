import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Skills from '../Components/Skills'
import About from '../Components/About'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import  './Page.css'

export default function Page() {
  return (
    <div className='container'>
       <Navbar />
       <main className="main">
        <Home />
        <Skills />
        <About/>
        <Project/>
        <Contact />
      </main>
    </div>
  )
}