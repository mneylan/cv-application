import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export const Title = (props) => {
  const { id, text, edit, editNow, change, state, finishedEditing } = props
  
  if (editNow == true) {
    return (
      <div className="schoolname-input-container">
        <input id={id} className="schoolname-input" type="text" autoFocus value={text} onChange={() => change(event, "title", "text")} onKeyDown={e => {
          if (e.key === "Enter" || e.key === "Escape") {
            finishedEditing(event, "title", "text")
          }
        }}></input>
        <FontAwesomeIcon icon={faCheckCircle} className="checkicon" onClick={() => finishedEditing(event, "title", "text", id)}/>
      </div>
    )
  }

  return (
      <h3 id={id} className="job-item" onClick={() => edit(event, "title")}>{text}</h3>
  )
}