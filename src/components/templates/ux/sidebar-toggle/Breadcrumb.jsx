import { cls6, cls7, cls8, cls9 } from "@/components/templates/ux/cls"

const Breadcrumb = () => {
  return (
    <>
      {/*<!-- Breadcrumb -->*/}
      <ol aria-label="Breadcrumb" className={cls6}>
        <li className={cls7}>
          Application Layout
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls8}>
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {" "}
            </path>
          </svg>
        </li>
        <li aria-current="page" className={cls9}>
          Dashboard
        </li>
      </ol>
      {/*<!-- End Breadcrumb -->*/}
    </>
  )
}

export default Breadcrumb
