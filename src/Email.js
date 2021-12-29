export const Email = (props) => {
  const {email, edit, change, finishedEditing, state } = props

  if (state.email.editing == true) {
    return (
      <div className="contact-input" onClick={(e) => {  if (e.target == e.currentTarget) finishedEditing("email")}}>
        <input className="email-input" type="text" autoFocus value={email} onChange={() => change(event, "email", "text")} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing("email")
          }
        }} ></input>
      </div>
    )
  }
  return (
    <div className="contact">
      <h1 className="contact-item email" onClick={() => edit(event, "email")}>{email}</h1>
    </div>
  )
}