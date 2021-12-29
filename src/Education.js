import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import uniqid from "uniqid"
import { Schoolname } from './Schoolname.js'
import { Major } from './Major.js'
import { Schoolyears } from './Schoolyears.js'

export class Education extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      school: {
        background: {
          name: "School Name", 
          editing: false},
        study: {
          major: "Major", 
          editing: false},
        duration: {
         years: "Years Attended", 
         editing: false},
        
        id: uniqid()
      },
      educationList: [],
      edit: false
    }
    this.addSchool = this.addSchool.bind(this)
    this.editClick = this.editClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.doneEditing = this.doneEditing.bind(this)
    this.checkFields = this.checkFields.bind(this)
  }


  addSchool(event) {
    
    this.setState({
      educationList: this.state.educationList.concat(this.state.school),
      school: {
        background: {
          name: "School Name", 
          editing: false},
        study: {
          major: "Major", 
          editing: false},
        duration: {
         years: "Years Attended", 
         editing: false},
        id: uniqid()
      }
    })
    
  }
  
  handleChange(event, property1, property2) {
    let itemToEdit = event.target.id
    
    let schools = [...this.state.educationList].map(school => {
      if (school.id == itemToEdit) {
        school[property1][property2] = event.target.value
      }
      
      return school
    })

    this.setState({
      educationList: schools,
      edit: true
    })
  
  }

  editClick(event, property, property2) {
    let itemToEdit = event.target.id
    
    let schools = [...this.state.educationList].map(school => {
      if (school.id == itemToEdit) {
        
        school[property]['editing'] = true
      }
      
      return school
    })

    this.setState({
      educationList: schools,
      edit: true
    })
  
  }

  doneEditing(event, property1, property2, id) {
    
    let itemToEdit = event.target.id
    
    let schools = [...this.state.educationList].map(school => {
      if (school.id == itemToEdit || school.id == id) {
        
        school[property1]['editing'] = false
      }

      if (school[property1][property2] == "") {
        school[property1][property2] = "Please fill out field"
      }
      
      return school
    })

    this.setState({
      educationList: schools,
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
    const schools = this.state.educationList
    
    const name = this.state.school.background.name
    const editing = this.state.edit
    const id = this.state.school.id

    return (
     <div> 
      <div className='section-title-container'>
      <h2 className='section-title'>Education</h2>
      <span>
        <span className='add-container' onClick={() => this.addSchool(event)}>
          <FontAwesomeIcon icon={faPlus} className="plusicon" />
          <span>Add</span>
        </span>
      </span>
      </div>
      <div>
        {schools.map(school => {
          
          return (
          <div key={school.id}>
            <div className="education-row">
              <Schoolname id={school.id} name={school.background.name} editNow={school.background.editing} edit={this.editClick} editing={editing} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state}/>
              <Major id={school.id} major={school.study.major} editNow={school.study.editing} edit={this.editClick} editing={editing} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state}/>
              
            </div>
            <div className='year-row'>
              <Schoolyears id={school.id} years={school.duration.years} editNow={school.duration.editing} edit={this.editClick} editing={editing} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state} />
            </div>
          </div> 
          )
        })}
      </div>
    </div>  
    )
  }
  
}


