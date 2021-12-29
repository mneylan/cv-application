import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export const Schoolyears = (props) => {
  const { id, years, edit, editNow, change, state, finishedEditing } = props
  
  if (editNow == true) {
    return (
      <div className="schoolname-input-container">
        <input id={id} className="schoolname-input" type="text" autoFocus value={years} onChange={() => change(event, "duration", "years")} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing(event, "duration", "years")
          }
        }}></input>
        <FontAwesomeIcon icon={faCheckCircle} className="checkicon" onClick={() => finishedEditing(event, "duration", "years", id)}/>
      </div>
    )
  }

  return (
    <div>
      <h2 id={id} className="school-years" onClick={() => edit(event, "duration")}>{years}</h2>
    </div>
  )
}