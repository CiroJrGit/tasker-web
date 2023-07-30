import * as Dialog from '@radix-ui/react-dialog';

import IconCheck from '../assets/icons/IconCheck';
import IconList from '../assets/icons/IconList';

const ModalNewPage = () => {
  return (
    <div className="mt-7">
      <div className="flex gap-3">
        <label className="flex items-center gap-2 px-2 py-1.5">
          <IconCheck width="18" height="18" />
          <span className="text-sm font-medium dark:text-gray-300 text-white-300">
            Lista de tarefas
          </span>
        </label>

        <label className="flex items-center gap-2 px-2 py-1.5">
          <IconList width="19" height="19" />
          <span className="text-sm font-medium dark:text-gray-300 text-white-300">
            Página de anotações
          </span>
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <Dialog.Close asChild>
          <button>Criar</button>
        </Dialog.Close>

        <Dialog.Close className="secondary">Voltar</Dialog.Close>
      </div>
    </div>
  );
};

export default ModalNewPage;
