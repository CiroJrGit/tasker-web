import Menu from '../Menu'
import MenuItem from '../Button/MenuItem'
import PageList from '../PageList'
import NewPageModal from '../Modal/NewPageModal'

import IconPlusRounded from '@/assets/icons/IconPlusRounded'

const Sidebar = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-11 w-full min-h-full px-3 py-6">
      <Menu />

      <PageList />

      <MenuItem
        as="dialog-trigger"
        variant="menu"
        icon={<IconPlusRounded width="17" height="17" color="dark:text-gray-100 text-gray-300" />}
        label="Nova página"
        size="lg"
        weight="medium"
      >
        <NewPageModal />
      </MenuItem>
    </div>
  )
}

export default Sidebar
