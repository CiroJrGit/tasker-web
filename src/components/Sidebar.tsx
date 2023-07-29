import NavList from './NavList';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <header className="flex flex-col gap-11 min-h-full px-4 pt-8">
      <Menu />

      <NavList />

      <div></div>
    </header>
  );
};

export default Sidebar;
