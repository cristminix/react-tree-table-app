import { cls10 } from "@/components/templates/ux/cls"
import Brand from "./sidebar/Brand"
import AccordionMenu from "./sidebar/AccordionMenu"

const Sidebar = () => {
  return (
    <>
      {/*<!-- Sidebar -->*/}
      <div id="application-sidebar" className={cls10}>
        <Brand />
        <AccordionMenu />
      </div>
      {/*<!-- End Sidebar -->*/}
    </>
  )
}

export default Sidebar
