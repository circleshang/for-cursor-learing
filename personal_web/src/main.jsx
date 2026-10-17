import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* GitHub Pages 不支持 SPA 回退,所以使用 HashRouter(地址形如 /#/projects) */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
