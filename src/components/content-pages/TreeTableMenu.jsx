import { TreeTable, TreeState } from "cp-react-tree-table"
import { useEffect, useState } from "react"
import { cls28 } from "@/components/templates/ux/cls"
import "./tree-table/tree-table.css"
import menus from "@/components/templates/ux/sidebar/menu.json"

import MenuModel from "@/global/models/MenuModel"
const mMenu = MenuModel.getInstance()

const btnCls =
  "py-2 px-2 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-xs font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"

const createTreeData = (menuData) => {
  const treeData = []
  const height = 50
  menuData.forEach((item) => {
    const { title, path, iconCls, parent, hidden } = item
    const data = {
      title,
      path,
      iconCls,
      parent,
      hidden,
    }
    const treeItem = {
      data,
      height,
    }
    if (Array.isArray(item.children)) {
      treeItem.children = createTreeData(item.children)
    }
    treeData.push(treeItem)
  })
  return treeData
}

const TreeTableMenu = () => {
  const treeData = createTreeData(menus)
  const [treeValue, setTreeValue] = useState(TreeState.create(treeData))

  const insertMenuFromJson = async () => {
    console.log(`Insert or update menu from JSON file`)
    console.log(menus)
    await mMenu.import(menus)
  }

  useEffect(()=>{
    if(!mMenu.hasReadyCallbacks()){
      mMenu.onReady(()=>{
        if(mMenu.connected){
          insertMenuFromJson()
        }
      })
    }
  },[])

  const deleteMenu = (row) => {
    if (confirm(`Are you sure to delete this menu "${row.data.title}"?`)) {
      console.log(row)
    }
    console.log(row)
  }
  const importMenu = async () => {}
  const exportMenu = async () => {}
  const moveUp = (row) => {
    console.log(row)
  }
  const moveDown = (row) => {
    console.log(row)
  }
  const addMenuForm = (row) => {
    console.log(row)
  }
  const editMenuForm = (row) => {
    console.log(row)
  }
  const handleOnChange = (newValue) => {
    setTreeValue(newValue)
  }

  const renderIndexCell = (row) => {
    console.log(row)
    return (
      <div style={{ paddingLeft: row.metadata.depth * 15 + "px" }} className={row.metadata.hasChildren ? "with-children" : "without-children"}>
        {row.metadata.hasChildren ? (
          <button className="font-normal p-2" onClick={row.toggleChildren}>
            <i className={`fa fa-${row.$state.isExpanded ? "minus" : "plus"}`} />
          </button>
        ) : (
          ""
        )}

        <span>{row.data.title}</span>
      </div>
    )
  }

  const renderPathProp = (row) => <span className="path-cell font-mono">{row.data.path}</span>
  const renderIconClsProp = (row) => {
    return (
      <div className="iconCls-cell px-4" title={row.data.iconCls}>
        <i className={row.data.iconCls} />
      </div>
    )
  }
  const renderHiddenProp = (row) => <div className="hidden-cell px-4">{row.data.hidden ? "Yes" : "No"}</div>
  const renderActionProp = (row) => {
    return (
      <>
        <div class="flex flex-col sm:inline-flex sm:flex-row rounded-sm shadow-sm">
          <button className={btnCls} title="Edit" onClick={(e) => moveUp(row)}>
            <i className="fa fa-chevron-up" />
          </button>
          <button className={btnCls} title="Edit" onClick={(e) => moveDown(row)}>
            <i className="fa fa-chevron-down" />
          </button>
          {row.data.parent === -1 && (
            <button className={btnCls} title="Add Child" onClick={(e) => addMenuForm(row)}>
              <i className="fa fa-plus" />
            </button>
          )}
          <button className={btnCls} title="Edit" onClick={(e) => editMenuForm(row)}>
            <i className="fa fa-edit" />
          </button>
          {!row.metadata.hasChildren && (
            <button className={btnCls} title="Delete ?" onClick={(e) => deleteMenu(row)}>
              <i className="fa fa-trash" />
            </button>
          )}
        </div>
      </>
    )
  }

  return (
    <div className={cls28}>
      <span></span>
      <div className="border rounded-xl shadow-sm   dark:bg-slate-800 dark:border-gray-700 bg-white dark:bg-slate-900 ">
        <div class="flex gap-2 justify-between items-center px-4 py-4 mb-2">
          <div className="flex gap-2">
            <button className={btnCls} title="Import Menu from JSON file" onClick={(e) => importMenu()}>
              <i className="fa fa-upload" /> Import JSON
            </button>
            <button className={btnCls} title="Export Menu" onClick={(e) => exportMenu()}>
              <i className="fa fa-download" /> Export JSON
            </button>
          </div>
          <button className={btnCls} title="Create New Menu" onClick={(e) => addMenuForm()}>
            <i className="fa fa-plus" />
          </button>
        </div>
        <TreeTable value={treeValue} onChange={handleOnChange} height={400}>
          <TreeTable.Column basis="208px" grow="0" renderCell={renderIndexCell} renderHeaderCell={() => <span>Title</span>} />
          <TreeTable.Column basis="140px" grow="1" renderCell={renderPathProp} renderHeaderCell={() => <span>Path</span>} />
          <TreeTable.Column basis="80px" grow="0" renderCell={renderIconClsProp} renderHeaderCell={() => <span>Icon</span>} />
          <TreeTable.Column basis="80px" grow="1" renderCell={renderHiddenProp} renderHeaderCell={() => <span>Hidden</span>} />
          <TreeTable.Column renderCell={renderActionProp} renderHeaderCell={() => <span>Action</span>} />
        </TreeTable>
      </div>
    </div>
  )
}

export default TreeTableMenu
