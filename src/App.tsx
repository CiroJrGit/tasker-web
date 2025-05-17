import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

import AuthProvider from './contexts/authContext'
import PagesProvider from './contexts/pagesContext'
import ThemeProvider from './contexts/themeContext'

import './styles/global.css'

const App = () => {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <ThemeProvider>
          <PagesProvider>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </PagesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
