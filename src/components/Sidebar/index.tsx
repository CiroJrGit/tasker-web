import Menu from '../Menu'
import MenuButton from '../MenuButton'
import NavList from '../NavList'
import NewPageModal from '../Modal/NewPageModal'

import IconPlusRounded from '@/assets/icons/IconPlusRounded'

const Sidebar = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-11 w-full min-h-full px-3 py-6">
      <Menu />

      <NavList />

      <MenuButton icon={<IconPlusRounded width="17" height="17" />} label="Nova página" triggerType="dialog">
        <NewPageModal />
      </MenuButton>
    </div>
  )
}

export default Sidebar
