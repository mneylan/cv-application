import { useState } from 'react'
export const Name = (props) => {
  const {declareEdit, change, submit} = props

  const [name, setName] = useState("Your Name")
  const [edit, setEdit] = useState(false)

  
  
  if (edit == true) {
    return (
      <div className="contact-input" onClick={(e) => { if (e.target == e.currentTarget) setEdit(submit(edit))}}>
        <input className="name-input" type="text" autoFocus value={name} onChange={() => setName(change(event))} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") { setEdit(submit(edit))}
        }}></input>
      </div>
    )
  }

  return (
    <div className="contact">
      <h1 className="contact-item name" onClick={ setEdit.bind(null, declareEdit(edit))}>{name}</h1>
    </div>
  )
}

