import { Name } from './Name.js'
import { Email } from './Email.js'
import { Phone } from './Phone.js'
const App = () => {
  
  const handleEdit = (item) => {
    return item = true
    
  }

  const handleChange = (event) => {
    let value = event.target.value

    return value
  }

  const handleSubmit = (item) => {
    return item = false
  }

  return (
    <div className="cv-container">
      <Name declareEdit={handleEdit} change={handleChange} submit={handleSubmit} />
      <Email declareEdit={handleEdit} change={handleChange} submit={handleSubmit} />
      <Phone declareEdit={handleEdit} change={handleChange} submit={handleSubmit}/>
      
    </div>
  )
}

export default App

 