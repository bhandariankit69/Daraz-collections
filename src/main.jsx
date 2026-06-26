import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContext } from './Component/context.js';
import { ThemeProvider } from './Themecontext/Theme.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext.Provider  value={{ user:"ankit" }}>
       <ThemeProvider >
        <App/>
       </ThemeProvider>
    </AuthContext.Provider>
  </StrictMode>

)
