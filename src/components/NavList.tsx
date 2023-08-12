import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const NavList = () => {
  const lists = [
    {
      id: 1,
      title: 'Setup',
      theme: '#265EED',
      tasks: [
        { id: 1, name: 'Comprar uma placa de vídeo nova', done: false },
        { id: 2, name: 'Comprar monitor novo', done: false },
      ],
    },
    {
      id: 2,
      title: 'Academia',
      theme: '#8029EE',
      tasks: [
        { id: 1, name: 'Trocar série', done: false },
        { id: 2, name: 'Fazer o shape falar por mim', done: false },
      ],
    },

    {
      id: 3,
      title: 'Projeto UX',
      theme: '#29EE9B',
      tasks: [
        { id: 1, name: 'Criar wareframes da tela', done: false },
        { id: 2, name: 'Ajustar Design System do projeto', done: false },
      ],
    },
  ];

  const notes = [
    {
      id: 1,
      title: 'Tailwind CSS: Aproveitando as Vantagens do Framework',
      content: 'Lorem impsum',
      theme: '#8029EE',
    },
    {
      id: 2,
      title: 'TCC',
      content: 'Que tcc? HAAHAHAHAHAHAHA',
      theme: '#F4385A',
    },
  ];

  return (
    <nav className="space-y-8">
      <div className="flex flex-col gap-2">
        <span className="px-2.5 font-semibold text-2sm dark:text-gray-300 text-white-400">
          Listas
        </span>

        <div className="flex flex-col gap-0.5 px-px">
          {lists.map((list, index) => (
            <NavLink
              key={index}
              to={`/tasklist/${list.id}`}
              className="
                flex items-center gap-2.5 h-8 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/70 dark:active:bg-gray-800/80 active:bg-white-600/75
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
            >
              <span
                className={clsx(
                  'block w-2 h-2 rounded-sm group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
                  {
                    'bg-main-blue': list.theme === '#265EED',
                    'bg-main-purple': list.theme === '#8029EE',
                    'bg-main-pink': list.theme === '#EE29B7',
                    'bg-main-red': list.theme === '#F4385A',
                    'bg-main-yellow': list.theme === '#EE9329',
                    'bg-main-green': list.theme === '#29EE9B',
                  },
                )}
                aria-hidden="true"
              ></span>

              <span className="max-w-[172px] font-medium text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                {list.title}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="px-2.5 font-semibold text-2sm dark:text-gray-300 text-white-400">
          Notas
        </span>

        <div className="flex flex-col gap-0.5 px-px">
          {notes.map((note, index) => (
            <NavLink
              key={index}
              to={`/notes/${note.id}`}
              className="
                flex items-center gap-2.5 h-8 px-3 rounded-md dark:hover:bg-gray-700 hover:bg-white-700/70 dark:active:bg-gray-800/80 active:bg-white-600/75
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-300
              "
            >
              <span
                className={clsx(
                  'block w-2 h-2 rounded-sm group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
                  {
                    'bg-main-blue': note.theme === '#265EED',
                    'bg-main-purple': note.theme === '#8029EE',
                    'bg-main-pink': note.theme === '#EE29B7',
                    'bg-main-red': note.theme === '#F4385A',
                    'bg-main-yellow': note.theme === '#EE9329',
                    'bg-main-green': note.theme === '#29EE9B',
                  },
                )}
                aria-hidden="true"
              ></span>

              <span className="max-w-[172px] font-medium text-sm dark:text-gray-100 text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                {note.title}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavList;
