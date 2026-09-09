import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeProvider'

function HomePage() {
  return <div id="top" />
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="bg-pf-bg relative overflow-x-clip">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
