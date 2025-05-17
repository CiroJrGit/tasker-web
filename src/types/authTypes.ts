export interface User {
  sub?: string
  name?: string
  email?: string
}

export interface SignUpParams {
  name: string
  email: string
  password: string
}

export interface SignInParams {
  email: string
  password: string
}

export interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthContextType {
  user: User
  isLoadingAuth: boolean
  validateAuth: boolean
  isAuthenticated: boolean
  setUser: (user: User) => void
  setIsLoadingAuth: (loading: boolean) => void
  setValidateAuth: (validate: boolean) => void
  setIsAuthenticated: (isAuthenticated: boolean) => void
}
