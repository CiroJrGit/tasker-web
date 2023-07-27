import NavItems from './NavItems';
import NavMenu from './NavMenu';

const Sidebar = () => {
  return (
    <header className="flex flex-col gap-11 min-h-full px-5 pt-8">
      <NavMenu />

      <NavItems />

      <div>New page</div>
    </header>
  );
};

export default Sidebar;
