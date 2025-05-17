import { useState, createContext, useContext } from 'react'
import { User, AuthProviderProps, AuthContextType } from '../types/authTypes'
import cookies from 'js-cookie'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({})
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(false)
  const [validateAuth, setValidateAuth] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.get('token'))

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingAuth,
        validateAuth,
        isAuthenticated,
        setUser,
        setIsLoadingAuth,
        setValidateAuth,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

export default AuthProvider
