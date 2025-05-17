import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext'

const PrivateRoute = ({ children, redirectTo }: any) => {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute
