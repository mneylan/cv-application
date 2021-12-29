export const Name = (props) => {
  const { name, edit, change, state, finishedEditing } = props
  
  if (state.name.editing == true) {
    return (
      <div className="contact-input" onClick={(e) => {  if (e.target == e.currentTarget) finishedEditing("name")}}>
        <input className="name-input" type="text" autoFocus value={name} onChange={() => change(event, "name", "text")} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing("name")
          }
        }} ></input>
      </div>
    )
  }

  return (
    <div className="contact">
      <h1 className="contact-item name" onClick={() => edit(event, "name")}>{name}</h1>
    </div>
  )
}