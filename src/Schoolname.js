import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export const Schoolname = (props) => {
  const { id, name, edit, editNow, change, state, finishedEditing } = props
  
  if (editNow == true) {
    return (
      <div className="schoolname-input-container">
        <input id={id} className="schoolname-input" type="text" autoFocus value={name} onChange={() => change(event, "background", "name")} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing(event, "background", "name")
          }
        }}></input>
        <FontAwesomeIcon icon={faCheckCircle} className="checkicon" onClick={() => finishedEditing(event, "background", "name", id)}/>
      </div>
    )
  }

  return (
    <div>
      <h1 id={id} className="school-name" onClick={() => edit(event, "background")}>{name}</h1>
    </div>
  )
}