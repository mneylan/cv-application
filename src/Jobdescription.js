import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export const Jobdescription = (props) => {
  const { id, text, edit, editNow, change, state, finishedEditing } = props
  
  if (editNow == true) {
    return (
      <div>
        <textarea id={id} className="job-text-area"  autoFocus value={text} onChange={() => change(event, "description", "text")} onKeyDown={e => {
          if (e.key === "Escape") {
            finishedEditing(event, "description", "text")
          }
        }}></textarea>
        <FontAwesomeIcon icon={faCheckCircle} className="checkicon-job-description" onClick={() => finishedEditing(event, "description", "text", id)}/>
      </div>
    )
  }

  return (
      <p id={id} className="job-description" onClick={() => edit(event, "description")}>{text}</p>
  )
}