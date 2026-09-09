import { BrowserRouter, Routes, Route } from 'react-router-dom'

function HomePage() {
  return <div id="top" />
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-pf-bg relative overflow-x-clip">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
