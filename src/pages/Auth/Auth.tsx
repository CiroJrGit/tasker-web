import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import { motion } from 'framer-motion'
import FormSignIn from './components/FormSignIn'
import FormSignUp from './components/FormSignUp'
import LogoSVG from '../../assets/logo'
import clsx from 'clsx'

const Auth = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const [signIn, setSignIn] = useState(true)
  const [signUp, setSignUp] = useState(false)
  const [visibleIn, setVisibleIn] = useState(true)
  const [visibleOut, setVisibleOut] = useState(false)
  const [loadComponent, setLoadComponent] = useState(false)

  const load = {
    from: { opacity: 0 },
    to: { opacity: 1, transition: { duration: 0.2 } },
  }

  const span = {
    from: { opacity: 0 },
    to: { opacity: 1, transition: { duration: 0.5 } },
  }

  const handleSignIn = () => {
    setSignIn(false)
    setSignUp(true)
    setVisibleOut(true)

    setTimeout(() => {
      setVisibleIn(false)
    }, 300)
  }

  const handleSignUp = () => {
    setSignIn(true)
    setSignUp(false)
    setVisibleIn(true)

    setTimeout(() => {
      setVisibleOut(false)
    }, 700)
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/welcome')
    }

    setTimeout(() => {
      setLoadComponent(true)
    }, 500)
  }, [isAuthenticated, navigate])

  return (
    <>
      {loadComponent && (
        <motion.div
          className={clsx(
            'relative flex flex-col items-center w-[560px] my-auto pt-18 rounded-lg dark:bg-gray-900 bg-white-900 drop-shadow-lg transition-all duration-600 ease-in-out overflow-hidden',
            {
              'min-h-[762px]': signIn,
              'min-h-[862px]': signUp,
            },
          )}
          variants={load}
          initial="from"
          animate="to"
        >
          <div className="flex flex-col gap-6 w-full px-[58px]">
            <div>
              <LogoSVG />
            </div>

            {signIn && (
              <motion.div variants={span} initial="from" animate="to">
                <span className="px-0.5 text-xl dark:text-gray-100">
                  Faça login na sua conta do Tasker
                </span>
              </motion.div>
            )}

            {signUp && (
              <motion.div variants={span} initial="from" animate="to">
                <span className="px-0.5 text-xl dark:text-gray-100">
                  Crie uma nova conta no Tasker
                </span>
              </motion.div>
            )}
          </div>

          <div
            className={clsx(
              'absolute bottom-0 flex items-center transition-all duration-600 ease-in-out',
              {
                'translate-x-1/4 py-8': signIn,
                '-translate-x-1/4 py-16': signUp,
              },
            )}
          >
            {/* SignIn */}
            <div className="flex flex-col justify-end w-[560px] min-h-[432px] px-[58px]">
              <div className="flex flex-col gap-20">
                {visibleIn && (
                  <>
                    <FormSignIn />

                    <div className="flex justify-center">
                      <span className="pr-1 text-sm dark:text-gray-200 text-gray-200">
                        Não tem uma conta?
                      </span>
                      <button
                        className="text-sm font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2 focus:outline-none focus:underline"
                        onClick={handleSignIn}
                      >
                        Cadastre-se.
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* SignUp */}
            <div className="flex flex-col justify-center w-[560px] min-h-[572px] px-[58px]">
              <div className="flex flex-col gap-24">
                {visibleOut && (
                  <>
                    <FormSignUp />

                    <div className="flex justify-center">
                      <span className="pr-1 text-sm dark:text-gray-200 text-gray-200">
                        Já possui uma conta?
                      </span>
                      <button
                        className="text-sm font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2 focus:outline-none focus:underline"
                        onClick={handleSignUp}
                      >
                        Entre.
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Auth
