import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export const Company = (props) => {
  const { id, text, edit, editNow, change, state, finishedEditing } = props
  
  if (editNow == true) {
    return (
      <div className="schoolname-input-container">
        <input id={id} className="schoolname-input" type="text" autoFocus value={text} onChange={() => change(event, "company", "text")} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing(event, "company", "text")
          }
        }}></input>
        <FontAwesomeIcon icon={faCheckCircle} className="checkicon" onClick={() => finishedEditing(event, "company", "text", id)}/>
      </div>
    )
  }

  return (
      <h3 id={id} className="job-item" onClick={() => edit(event, "company")}>{text}</h3>
  )
}