import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext'
import { auth } from '../services/firebase'
import { authService } from '../services/authService'

import { User, SignInParams, SignUpParams } from '../types/authTypes'
import cookies from 'js-cookie'
import decode from 'jwt-decode'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const useAuth = () => {
  const navigate = useNavigate()

  const {
    user,
    setUser,
    isLoadingAuth,
    setIsLoadingAuth,
    validateAuth,
    setValidateAuth,
    isAuthenticated,
    setIsAuthenticated,
  } = useAuthContext()

  const handleSessionCookie = (token: string) => {
    cookies.set('token', token, { expires: 30 })
    setIsAuthenticated(true)
  }

  const handleSignUp = async ({ name, email, password }: SignUpParams) => {
    setIsLoadingAuth(true)

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const response = await authService.createUser({
          id: userCredential.user.uid,
          name,
          email: userCredential.user.email,
        })

        const { token } = response

        setUser(decode(token))
        handleSessionCookie(token)
        setIsLoadingAuth(false)
        navigate('/welcome')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.log(errorCode)
        console.log(errorMessage)

        setIsLoadingAuth(false)
      })
  }

  const handleSignIn = async ({ email, password }: SignInParams) => {
    setIsLoadingAuth(true)
    setValidateAuth(false)

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const response = await authService.fetchUser(userCredential.user.uid)

        const { token } = response
        const { sub, name, email } = decode<User>(token)

        const newUser: User = {
          sub,
          name,
          email,
        }

        setUser(newUser)
        handleSessionCookie(token)
        setIsLoadingAuth(false)
        navigate('/welcome')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.log(errorCode)
        console.log(errorMessage)

        setValidateAuth(true)
        setIsLoadingAuth(false)
      })
  }

  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        cookies.remove('token')

        setUser({})
        setIsAuthenticated(false)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.log(errorCode)
        console.log(errorMessage)
      })
  }

  useEffect(() => {
    function loadCookie() {
      const token = cookies.get('token')

      if (token) {
        setUser(decode<User>(token))
      }
    }

    loadCookie()
  }, [])

  return {
    user,
    isLoadingAuth,
    validateAuth,
    setValidateAuth,
    isAuthenticated,
    handleSignIn,
    handleSignUp,
    handleSignOut,
    handleSessionCookie,
  }
}

export default useAuth
