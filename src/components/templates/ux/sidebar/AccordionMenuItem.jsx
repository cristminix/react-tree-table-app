import { cls17, cls18, cls19, cls20, cls22, cls24, cls25 } from "@/components/templates/ux/cls"

const AccordionMenuItem = ({ children, name, index, hasChild, title, path, icon }) => {
  const activeMenuCls = (path) => {}
  const accordionOpen = (path) => {}
  return (
    <>
      {Array.isArray(children) && children.length > 0 ? (
        <>
          <li id={`${name}-accordion`} className={`${cls17} `} key={name} path={path.replace(/^\//, "")}>
            <button type="button" className={`${cls18} ${activeMenuCls(path)}`}>
              <i className={icon}></i>
              {title}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cls19}
              >
                {" "}
                <path d="m18 15-6-6-6 6"> </path>{" "}
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cls20}
              >
                {" "}
                <path d="m6 9 6 6 6-6"> </path>{" "}
              </svg>
            </button>
            <div id={`${name}-accordion-sub`} data-hs-accordion-always-open={accordionOpen(path)} className={`${cls25} ${activeMenuCls(path)}`}>
              <ul className={cls22}>
                {children.map((subItem, tindex) => {
                  const key = `${name}-${tindex}`
                  if (subItem.hidden) {
                    return null
                  }
                  return (
                    <AccordionMenuItem
                      key={key}
                      children={subItem.children}
                      name={key}
                      index={index}
                      hasChild={subItem.hasChild}
                      title={subItem.title}
                      path={subItem.path}
                      icon={subItem.iconCls}
                    />
                  )
                })}
              </ul>
            </div>
          </li>
        </>
      ) : (
        <>
          <li key={name}>
            <a href={`#${path}`} className={cls24}>
              <i className={icon}></i>
              {title}
            </a>{" "}
          </li>
        </>
      )}
    </>
  )
}

export default AccordionMenuItem
