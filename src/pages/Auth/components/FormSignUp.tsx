import { useState, FormEvent } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { motion } from 'framer-motion'

import * as Form from '@radix-ui/react-form'
import Button from '@/components/Button'

import IconSpinner from '@/assets/icons/IconSpinner'

const FormSignUp = () => {
  const { isLoadingAuth, handleSignUp } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const err = {
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleSignUp({ name, email, password })
  }

  return (
    <>
      <Form.Root onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="flex flex-col gap-7">
          <Form.Field name="name">
            <div className="flex flex-col gap-2">
              <Form.Label className="flex justify-between w-full">
                <span className="dark:text-gray-200 text-sm font-medium">Nome</span>

                <Form.Message className="text-xs dark:text-red-500 text-red-700" match="valueMissing">
                  <motion.span className="inline-block" variants={err} initial="from" animate="to">
                    Por favor insira um nome
                  </motion.span>
                </Form.Message>
              </Form.Label>

              <Form.Control asChild>
                <input
                  className="
                    w-full h-10.5 px-5 rounded-md text-sm dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-800
                    validate focus:outline-none focus:ring-1 dark:focus:ring-gray-500 focus:ring-gray-100 focus:ring-offset-2
                    dark:focus:ring-offset-gray-900 focus:ring-offset-white-900
                  "
                  type="text"
                  placeholder="Insira um nome"
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                  required
                />
              </Form.Control>
            </div>
          </Form.Field>

          <Form.Field name="email">
            <div className="flex flex-col gap-2">
              <Form.Label className="flex justify-between w-full">
                <span className="dark:text-gray-200 text-sm font-medium">E-mail</span>

                <Form.Message className="text-xs dark:text-red-500 text-red-700" match="valueMissing">
                  <motion.span className="inline-block" variants={err} initial="from" animate="to">
                    Por favor insira um e-mail
                  </motion.span>
                </Form.Message>
                <Form.Message className="text-xs dark:text-red-500 text-red-700" match="typeMismatch">
                  <motion.span className="inline-block" variants={err} initial="from" animate="to">
                    Insira um e-mail válido
                  </motion.span>
                </Form.Message>
              </Form.Label>

              <Form.Control asChild>
                <input
                  className="
                    w-full h-10.5 px-5 rounded-md text-sm dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-800
                    validate focus:outline-none focus:ring-1 dark:focus:ring-gray-500 focus:ring-gray-100 focus:ring-offset-2
                    dark:focus:ring-offset-gray-900 focus:ring-offset-white-900
                  "
                  type="email"
                  placeholder="Insira um e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                />
              </Form.Control>
            </div>
          </Form.Field>

          <Form.Field name="password">
            <div className="flex flex-col gap-2 mb-8">
              <Form.Label className="flex justify-between w-full">
                <span className="dark:text-gray-200 text-sm font-medium">Senha</span>

                <Form.Message className="text-xs dark:text-red-500 text-red-700" match="valueMissing">
                  <motion.span className="inline-block" variants={err} initial="from" animate="to">
                    Por favor insira uma senha
                  </motion.span>
                </Form.Message>
                <Form.Message className="text-xs dark:text-red-500 text-red-700" match="patternMismatch">
                  <motion.span className="inline-block" variants={err} initial="from" animate="to">
                    Mínimo de 8 caracteres e ao menos uma letra
                  </motion.span>
                </Form.Message>
              </Form.Label>

              <Form.Control asChild>
                <input
                  className="
                    w-full h-10.5 px-5 rounded-md text-sm dark:placeholder:text-gray-300 placeholder:text-white-300 dark:bg-gray-700 bg-white-800
                    validate focus:outline-none focus:ring-1 dark:focus:ring-gray-500 focus:ring-gray-100 focus:ring-offset-2
                    dark:focus:ring-offset-gray-900 focus:ring-offset-white-900
                  "
                  type="password"
                  placeholder="Insira uma senha"
                  pattern="^(?=.*[a-zA-Z]).{8,}$"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                />
              </Form.Control>
            </div>
          </Form.Field>
        </div>

        <Form.Submit asChild>
          <Button
            variant="primary"
            size="lg"
            label={isLoadingAuth ? <IconSpinner width="32" height="32" /> : 'Criar conta'}
          />
        </Form.Submit>
      </Form.Root>
    </>
  )
}

export default FormSignUp
