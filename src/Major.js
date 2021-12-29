import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export const Major = (props) => {
  const { id, major, edit, editNow, change, state, finishedEditing } = props
  
  if (editNow == true) {
    return (
      <div className="schoolname-input-container">
        <input id={id} className="schoolname-input" type="text" autoFocus value={major} onChange={() => change(event, "study", "major")} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing(event, "study", "major")
          }
        }}></input>
        <FontAwesomeIcon icon={faCheckCircle} className="checkicon" onClick={() => finishedEditing(event, "study", "major", id)}/>
      </div>
    )
  }

  return (
    <div>
      <h1 id={id} className="school-name" onClick={() => edit(event, "study")}>{major}</h1>
    </div>
  )
}