import { cls0 } from "@/components/templates/ux/cls"
import SidebarToggle from "./ux/SidebarToggle"
import Sidebar from "./ux/Sidebar"
import Content from "./ux/Content"

const AppWithSidebar = ({}) => {
  return (
    <>
      <div className={cls0}>
        {/*<!-- ========== MAIN CONTENT ========== -->*/}
        <SidebarToggle />

        <Sidebar />

        <Content />
        {/*<!-- ========== END MAIN CONTENT ========== -->*/}
      </div>
    </>
  )
}

export default AppWithSidebar
