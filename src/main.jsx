import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContext } from './Component/context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext.Provider  value={{ user:"ankit" }}>
<App/>
    </AuthContext.Provider>
  </StrictMode>

)
