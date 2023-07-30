import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

import * as Dialog from '@radix-ui/react-dialog';
import ModalWrap from '../../components/ModalWrap';
import ModalNewPage from '../../components/ModalNewPage';

import IconList from '../../assets/icons/IconList';
import IconCheck from '../../assets/icons/IconCheck';

const Welcome = () => {
  const { user } = useContext(AuthContext);
  const firstName = user.name?.trim().split(' ');

  return (
    <div className="flex flex-col gap-16 w-11/12">
      <div className="flex flex-col gap-5 px-3">
        <h1 className="text-4xl font-semibold dark:text-gray-400 text-white-400">
          Bem-vindo, {firstName ? firstName[0] : 'Usuário'}
        </h1>

        <p className="text-lg font-normal dark:text-gray-400 text-white-400">
          Comece adicionando uma lista de tarefas ou uma página de anotações.
        </p>
      </div>

      <div className="flex flex-col gap-3 px-4">
        <Dialog.Root>
          <Dialog.Trigger
            className="
              flex items-center gap-2 p-1.5 rounded-md text-start dark:text-gray-400 text-white-400 dark:hover:text-gray-100 hover:text-gray-300 
              dark:hover:bg-gray-800/70 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
            type="button"
          >
            <div className="flex justify-center items-center w-6">
              <IconCheck width="21" height="21" />
            </div>
            <span className="pt-px font-medium duration-10">
              Lista de tarefas
            </span>
          </Dialog.Trigger>

          <ModalWrap title="Nova página de lista">
            <ModalNewPage />
          </ModalWrap>
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger
            className="
              flex items-center gap-2 p-1.5 rounded-md text-start dark:text-gray-400 text-white-400 dark:hover:text-gray-100 hover:text-gray-300
              dark:hover:bg-gray-800/70 hover:bg-white-800/60 dark:active:bg-gray-800/40 active:bg-white-600/60
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
            "
            type="button"
          >
            <div className="flex justify-center items-center w-6">
              <IconList width="23" height="23" />
            </div>
            <span className="pt-px font-medium duration-10">
              Página de anotações
            </span>
          </Dialog.Trigger>

          <ModalWrap title="Nova página de anotações">
            <ModalNewPage />
          </ModalWrap>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default Welcome;
