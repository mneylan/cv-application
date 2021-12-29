export const Phone = (props) => {
  const {phone, edit, change, finishedEditing, state } = props

  if (state.phone.editing == true) {
    
    return (
      <div className="contact-input" onClick={(e) => {  if (e.target == e.currentTarget) finishedEditing("phone")}}>
        <input className="phone-input" type="text" autoFocus value={phone} onChange={() => change(event, "phone", "text")} onKeyDown={e => {
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
      <h1 className="contact-item phone" onClick={() => edit(event, "phone")}>{phone}</h1>
      <hr></hr>
    </div>
  )
}