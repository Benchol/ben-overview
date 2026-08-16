import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#070b13', color: '#dde4f0', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}
