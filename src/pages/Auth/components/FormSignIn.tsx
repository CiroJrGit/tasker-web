import { useState, useContext, useEffect, FormEvent } from 'react';
import { AuthContext } from '../../../contexts/authContext';

import * as Form from '@radix-ui/react-form';
import Button from '../../../components/Button';
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
      <Form.Root onSubmit={handleSubmit} className="flex flex-col gap-7">
        {validateAuth && (
          <motion.span
            className="py-2 text-center rounded-md dark:bg-red-500/10 dark:text-red-500 bg-red-600/10 text-red-700"
            variants={load}
            initial="from"
            animate="to"
          >
            E-mail ou senha incorretos. Tente novamente.
          </motion.span>
        )}

        <Form.Field name="email">
          <div className="flex flex-col gap-2">
            <Form.Label className="flex justify-between w-full">
              <span className="dark:text-gray-200 text-sm font-medium">
                E-mail
              </span>

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
                  Por favor insira seu e-mail
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
                  Insira um e-mail válido
                </motion.span>
              </Form.Message>
            </Form.Label>

            <Form.Control asChild>
              <input
                className="
                  w-full px-5 py-3 rounded-md dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-800
                  validate focus:outline-none focus:ring-1.5 dark:focus:ring-gray-500 focus:ring-gray-100 focus:ring-offset-2
                  dark:focus:ring-offset-gray-900 focus:ring-offset-white-900
                "
                type="email"
                placeholder="Insira seu e-email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Field name="password">
          <div className="relative flex flex-col items-start gap-2 mb-8">
            <Form.Label className="flex justify-between w-full">
              <span className="dark:text-gray-200 text-sm font-medium">
                Senha
              </span>

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
                  Por favor insira sua senha
                </motion.span>
              </Form.Message>
            </Form.Label>

            <Form.Control asChild>
              <input
                className="
                  w-full px-5 py-3 rounded-md dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-800
                  validate focus:outline-none focus:ring-1.5 dark:focus:ring-gray-500 focus:ring-gray-100 focus:ring-offset-2
                  dark:focus:ring-offset-gray-900 focus:ring-offset-white-900
                "
                type="password"
                placeholder="Insira sua senha"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Submit asChild>
          <Button
            variant="primary"
            size="lg"
            label={
              loadingAuth ? <IconSpinner width="24" height="24" /> : 'Entrar'
            }
          />
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default FormSignIn;
