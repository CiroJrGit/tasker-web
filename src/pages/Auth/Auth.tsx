import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import clsx from 'clsx';

import FormSignIn from './components/FormSignIn';
import FormSignUp from './components/FormSignUp';
import LogoSVG from '../../assets/logo';
import { motion } from 'framer-motion';

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const [visibleIn, setVisibleIn] = useState(true);
  const [visibleUp, setVisibleUp] = useState(false);

  const [loadComponent, setLoadComponent] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const load = {
    from: { opacity: 0 },
    to: { opacity: 1, transition: { duration: 0.2 } },
  };

  const span = {
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1, transition: { duration: 0.45 } },
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/welcome');
    }

    setTimeout(() => {
      setLoadComponent(true);
    }, 150);
  }, [isAuthenticated, navigate]);

  function handleSignIn() {
    setSignIn(false);
    setSignUp(true);
    setVisibleUp(true);

    setTimeout(() => {
      setVisibleIn(false);
    }, 300);
  }

  function handleSignUp() {
    setSignIn(true);
    setSignUp(false);
    setVisibleIn(true);

    setTimeout(() => {
      setVisibleUp(false);
    }, 700);
  }

  return (
    <>
      {loadComponent && (
        <motion.div
          className={clsx(
            'relative flex flex-col items-center w-[600px] my-auto pt-20 rounded-lg dark:bg-gray-900 bg-white-900 drop-shadow-lg transition-all duration-600 ease-in-out overflow-hidden',
            {
              'min-h-[796px]': signIn,
              'min-h-[896px]': signUp,
            },
          )}
          variants={load}
          initial="from"
          animate="to"
        >
          <div className="flex flex-col gap-7 w-full px-[72px]">
            <div>
              {/* <img src={<LogoSVG />} alt="Logo" width={290} /> */}
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
            <div className="flex flex-col justify-end w-[600px] min-h-[472px] px-[72px]">
              <div className="flex flex-col gap-24">
                {visibleIn && (
                  <>
                    <FormSignIn />

                    <div className="flex justify-center">
                      <span className="pr-1 text-2sm dark:text-gray-200 text-gray-200">
                        Não tem uma conta?
                      </span>
                      <button
                        className="text-2sm font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2 focus:outline-none focus:underline"
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
            <div className="flex flex-col justify-center w-[600px] min-h-[583px] px-[88px]">
              <div className="flex flex-col gap-24">
                {visibleUp && (
                  <>
                    <FormSignUp />

                    <div className="flex justify-center">
                      <span className="pr-1 text-2sm dark:text-gray-200 text-gray-200">
                        Já possui uma conta?
                      </span>
                      <button
                        className="text-2sm font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2 focus:outline-none focus:underline"
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
  );
};

export default Auth;
