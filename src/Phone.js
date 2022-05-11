import { useState } from 'react'
export const Phone = (props) => {
  const {declareEdit, change, submit} = props

  const [phone, setPhone] = useState("555-555-5555")
  const [edit, setEdit] = useState(false)

  if (edit == true) {
    
    return (
      <div className="contact-input" onClick={(e) => {  if (e.target == e.currentTarget) setEdit(submit(edit))}}>
        <input className="phone-input" type="text" autoFocus value={phone} onChange={() => setPhone(change(event))} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing("phone")
          }
        }} ></input>
        <hr></hr>
      </div>
    )
  }
  return (
    <div className="contact">
      <h1 className="contact-item phone" onClick={() => setEdit(declareEdit(edit))}>{phone}</h1>
      <hr></hr>
    </div>
  )
}