import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import uniqid from "uniqid"
import { Title } from './Title.js'
import { Company } from './Company.js'
import { Joblength } from './Joblength.js'
import { Jobdescription } from './Jobdescription.js'


export class JobExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      job: {
        title: {
          text: "Job Title", 
          editing: false},
        company: {
          text: "Company Name", 
          editing: false},
        duration: {
         text: "Time at company", 
         editing: false},
        description: {
          text: "Describe your job",
          editing: false
        },
        id: uniqid()
      },
      jobList: [],
      
    }
    this.addJob = this.addJob.bind(this)
    this.editClick = this.editClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.doneEditing = this.doneEditing.bind(this)
  }

  addJob(event) {
    
    this.setState({
      jobList: this.state.jobList.concat(this.state.job),
      job: {
        title: {
          text: "Job Title", 
          editing: false},
        company: {
          text: "Company Name", 
          editing: false},
        duration: {
         text: "Time at Company", 
         editing: false},
        description: {
          text: "Describe your job",
          editing: false
        },
        id: uniqid()
      }
    })
    
  }

  handleChange(event, property1, property2) {
    let itemToEdit = event.target.id
    
    let jobs = [...this.state.jobList].map(job => {
      if (job.id == itemToEdit) {
        job[property1][property2] = event.target.value
      }
      
      return job
    })

    this.setState({
      educationList: jobs
    })
  
  }

  editClick(event, property, property2) {
    let itemToEdit = event.target.id
    
    let jobs = [...this.state.jobList].map(job => {
      if (job.id == itemToEdit) {
        
        job[property]['editing'] = true
      }
      
      return job
    })

    this.setState({
      educationList: jobs
    })
  
  }

  doneEditing(event, property1, property2, id) {
    
    let itemToEdit = event.target.id
    
    let jobs = [...this.state.educationList].map(job => {
      if (job.id == itemToEdit || job.id == id) {
        
        job[property1]['editing'] = false
      }

      if (job[property1][property2] == "") {
        job[property1][property2] = "Please fill out field"
      }
      
      return job
    })

    this.setState({
      educationList: jobs
    })
    

  }

  render() {
    const jobs = this.state.jobList
    return (
      <div>
        <hr className='job-hr'></hr>
        <div className='section-title-container'>
        <h2 className='section-title'>Job Experience</h2>
        <span className='add-container' onClick={() => this.addJob(event)}>
            <FontAwesomeIcon icon={faPlus} className='plusicon' />
            <span>Add</span>
        </span>
        </div>
        
          {jobs.map(job => {
            return (
          <div key={job.id}>    
            <div className='job-row'>
              <Title id={job.id} text={job.title.text} editNow={job.title.editing} edit={this.editClick} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state} />
              <Company id={job.id} text={job.company.text} editNow={job.company.editing} edit={this.editClick} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state}/>
              <Joblength id={job.id} text={job.duration.text} editNow={job.duration.editing} edit={this.editClick} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state}/>
            </div>

            <div className="job-description-container">
              <Jobdescription id={job.id} text={job.description.text} editNow={job.description.editing} edit={this.editClick} change={this.handleChange} finishedEditing={this.doneEditing} state={this.state}/>
            </div>
          </div>
            )
          })}
        
      </div>
    )
  }
}

