import React, { Component } from 'react'
import { Name } from './Name.js'
import { Email } from './Email.js'
import { Phone } from './Phone.js'
// import { TitleAndAdd } from './Headers.js'
import { Education } from './Education.js'
import { JobExperience } from './JobExperience.js'

class App extends Component {
  constructor(props) {
    super(props)
    //state and bind goes in here
    this.state = {
      name: {
        text: "Your Name",
        editing: false},
      email: {
        text: "your-email@gmail.com", 
        editing: false},
      phone: {
        text: "555-555-5555", 
        editing: false},
      
      edit: false
    }

    this.editClick = this.editClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.doneEditing = this.doneEditing.bind(this)
    this.checkFields = this.checkFields.bind(this)
  }
  
  handleChange(event, property, text) {
    let prop = {...this.state[property]}
    let currentState = prop
    currentState[text] = event.target.value
    this.setState({
      [property]: currentState
    })
    
  }

  editClick(event, property) {
    if (this.state.edit == true) return
    let prop = {...this.state[property]}
    
    let currentState = prop
    currentState["editing"] = true
    this.setState({
     [property]: currentState
    })

    this.setState({
      edit: true
    })
    
  }

  doneEditing(property) {
    let prop = {...this.state[property]}
    let currentState = prop
    currentState["editing"] = false
     
    if (currentState.text == "") {
      currentState["text"] = "Please fill out field"
    }

    this.setState({
      [property]: currentState
    })
    
    this.setState({
      edit: false
    })

  }

  checkFields(event) {
    if (this.state.edit == false) return
    if (event.target == event.currentTarget)
      this.setState({
        edit: false
      })
  }

  render() {
    const name = this.state.name.text
    const email = this.state.email.text
    const phone = this.state.phone.text
    const editing = this.state.edit
    
    return (
      <div className="cv-container">
        <Name name={name} edit={this.editClick} editing={editing} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state}/>
        <Email email={email} edit={this.editClick} editing={editing} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state} />
        <Phone phone={phone} edit={this.editClick} editing={editing} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state} /> 
        <Education />
        <JobExperience />
      </div>
    )
  } 
}

export default App

 