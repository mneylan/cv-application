import { useState } from 'react'
export const Email = (props) => {
  const {declareEdit, change, submit} = props

  const [email, setEmail] = useState("youremail@email.com")
  const [edit, setEdit] = useState(false)

  if (edit == true) {
    return (
      <div className="contact-input" onClick={(e) => {  if (e.target == e.currentTarget) setEdit(submit(edit))}}>
        <input className="email-input" type="text" autoFocus value={email} onChange={() => setEmail(change(event))} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            setEdit(submit(edit))
          }
        }} ></input>
      </div>
    )
  }
  return (
    <div className="contact">
      <h1 className="contact-item email" onClick={() => setEdit(declareEdit(edit))}>{email}</h1>
    </div>
  )
}