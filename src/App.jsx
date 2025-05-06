import './App.css'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contacts'

function App() {
 
  return (
    <>
      <div className="app">
      <header>
        <h1>Divyansh Singh</h1>
        <nav>
          <a href="#bio">Bio</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#skills">Socials</a>
        </nav>
      </header>
      <main>
        <Bio />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Divyansh</p>
      </footer>
    </div>
    </>
  )
}

export default App
