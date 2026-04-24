import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ServicosPage from './pages/Servicos.jsx'
import SobrePage from './pages/Sobre.jsx'
import ContatoPage from './pages/Contato.jsx'
import MetodologiaPage from './pages/Metodologia.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/metodologia" element={<MetodologiaPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
