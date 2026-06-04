import Header from './components/Header'
import Home from './components/Home'
import Servicios from './components/Servicios'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0F172A] text-[#F8FAFC] font-sans antialiased">
      <Header />
      <main>
        <Home />
        <Servicios />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
