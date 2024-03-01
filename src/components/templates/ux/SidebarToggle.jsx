import { cls1, cls2 } from "@/components/templates/ux/cls"
import NavigationToggle from "./sidebar-toggle/NavigationToggle"
import Breadcrumb from "./sidebar-toggle/Breadcrumb"

const SidebarToggle = () => {
  return (
    <>
      {/*<!-- Sidebar Toggle -->*/}
      <div className={cls1}>
        <div className={cls2}>
          <NavigationToggle />
          <Breadcrumb />
        </div>
      </div>
      {/*<!-- End Sidebar Toggle -->*/}
    </>
  )
}

export default SidebarToggle
