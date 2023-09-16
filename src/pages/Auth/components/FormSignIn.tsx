import { useState, useContext, useEffect, FormEvent } from 'react';
import { AuthContext } from '../../../contexts/authContext';

import * as Form from '@radix-ui/react-form';
import Button from '../../../components/Button';
import IconEmail from '../../../assets/icons/IconEmail';
import IconLock from '../../../assets/icons/IconLock';
import IconSpinner from '../../../assets/icons/IconSpinner';

import { motion } from 'framer-motion';

const FormSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleSignIn, loadingAuth, validateAuth, setValidateAuth } =
    useContext(AuthContext);

  const err = {
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  };

  const load = {
    from: { opacity: 0 },
    to: { opacity: 1, transition: { duration: 0.15 } },
  };

  useEffect(() => {
    setValidateAuth(false);
  }, [setValidateAuth]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleSignIn({ email, password });
  }

  return (
    <>
      {validateAuth && (
        <motion.span
          className="py-2 text-center rounded-sm dark:bg-red-500/10 dark:text-red-500 bg-red-600/10 text-red-700"
          variants={load}
          initial="from"
          animate="to"
        >
          Email ou senha incorretos. Tente novamente.
        </motion.span>
      )}

      <Form.Root onSubmit={handleSubmit} className="flex flex-col gap-7">
        <Form.Field name="email">
          <div className="flex justify-end mb-1">
            <Form.Message
              className="text-sm dark:text-red-500 text-red-700"
              match="valueMissing"
            >
              <motion.span
                className="inline-block"
                variants={err}
                initial="from"
                animate="to"
              >
                Por favor digite um e-mail
              </motion.span>
            </Form.Message>
            <Form.Message
              className="text-sm dark:text-red-500 text-red-700"
              match="typeMismatch"
            >
              <motion.span
                className="inline-block"
                variants={err}
                initial="from"
                animate="to"
              >
                Por favor digite um e-mail válido
              </motion.span>
            </Form.Message>
          </div>
          <div className="relative flex items-center">
            <Form.Control asChild>
              <input
                className="
                  w-full px-6 py-4.5 rounded-lg text-lg dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-800
                  validate focus:outline-none focus:ring-2 dark:focus:ring-gray-500 focus:ring-gray-100 focus:ring-offset-2
                  dark:focus:ring-offset-gray-900 focus:ring-offset-white-900
                "
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Control>
            <Form.Label className="absolute right-6">
              <IconEmail width="27" height="29" />
            </Form.Label>
          </div>
        </Form.Field>
        <Form.Field name="password">
          <div className="flex justify-end mb-1">
            <Form.Message
              className="text-sm dark:text-red-500 text-red-700"
              match="valueMissing"
            >
              <motion.span
                className="inline-block"
                variants={err}
                initial="from"
                animate="to"
              >
                Por favor digite sua senha
              </motion.span>
            </Form.Message>
          </div>
          <div className="relative flex items-center mb-6">
            <Form.Control asChild>
              <input
                className="
                  w-full px-6 py-4.5 rounded-lg text-lg dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-800
                  validate focus:outline-none focus:ring-2 dark:focus:ring-gray-500 focus:ring-gray-100 focus:ring-offset-2
                  dark:focus:ring-offset-gray-900 focus:ring-offset-white-900
                "
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Control>
            <Form.Label className="absolute right-6">
              <IconLock width="27" height="27" />
            </Form.Label>
          </div>
        </Form.Field>
        <Form.Submit className="mt-4" asChild>
          <Button
            variant="primary"
            size="lg"
            label={
              loadingAuth ? <IconSpinner width="32" height="32" /> : 'Entrar'
            }
          />
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default FormSignIn;
