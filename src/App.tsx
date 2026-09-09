import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import { BackgroundDecor } from './sections/BackgroundDecor'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'

function HomePage() {
  return (
    <>
      <BackgroundDecor />
      <Header />
      <div id="top" />
      <Hero />

      <main className="relative z-1 mx-auto max-w-325 px-10">
        <About />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <div className="bg-pf-bg relative overflow-x-clip">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
