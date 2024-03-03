import { cls13, cls14 } from "@/components/templates/ux/cls"
import AccordionMenuItem from "./AccordionMenuItem"
import menuData from "./menu.json"
import { useState } from "react"
const AccordionMenu = ({}) => {
  const [data, setData] = useState(menuData)
  return (
    <nav data-hs-accordion-always-open="" className={cls13}>
      <ul className={cls14}>
        {data.map((item, index) => {
          return (
            <AccordionMenuItem
              key={index}
              children={item.children}
              name={item.slug}
              index={index}
              hasChild={item.hasChild}
              title={item.title}
              path={item.path}
              icon={item.iconCls}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default AccordionMenu
