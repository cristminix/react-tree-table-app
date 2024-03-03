import { TreeTable, TreeState } from "cp-react-tree-table"
import { useState } from "react"
import { cls28 } from "@/components/templates/ux/cls"
import "./tree-table/tree-table.css"
import MOCK_DATA from "./tree-table/MOCK_DATA"

const TreeTableDemo = () => {
  const [treeValue, setTreeValue] = useState(TreeState.create(MOCK_DATA))

  const handleOnChange = (newValue) => {
    setTreeValue(newValue)
  }

  const renderIndexCell = (row) => (
    <div style={{ paddingLeft: row.metadata.depth * 15 + "px" }} className={row.metadata.hasChildren ? "with-children" : "without-children"}>
      {row.metadata.hasChildren ? <button className="toggle-button" onClick={row.toggleChildren}></button> : ""}

      <span>{row.data.name}</span>
    </div>
  )

  const renderEmployeesCell = (row) => <span className="employees-cell">{row.data.employees}</span>

  const renderExpensesCell = (row) => <span className="expenses-cell">{row.data.expenses}</span>

  const renderEditableCell = (row) => (
    <input
      type="text"
      value={row.data.contact}
      onChange={(event) => {
        row.updateData({
          ...row.data,
          contact: event.target.value,
        })
      }}
    />
  )

  return (
    <div className={cls28}>
      <TreeTable value={treeValue} onChange={handleOnChange}>
        <TreeTable.Column basis="180px" grow="0" renderCell={renderIndexCell} renderHeaderCell={() => <span>Name</span>} />
        <TreeTable.Column renderCell={renderEditableCell} renderHeaderCell={() => <span>Contact person</span>} />
        <TreeTable.Column renderCell={renderEmployeesCell} renderHeaderCell={() => <span className="t-right">Employees</span>} />
        <TreeTable.Column renderCell={renderExpensesCell} renderHeaderCell={() => <span className="t-right">Expenses ($)</span>} />
      </TreeTable>
    </div>
  )
}

export default TreeTableDemo
