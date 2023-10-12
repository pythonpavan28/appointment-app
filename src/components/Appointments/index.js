// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItems from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: ''}

  onAddMethod = event => {
    event.preventDefault()
    const {title, date} = this.state
    const dated = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const newAppointment = {
      id: uuidv4(),
      title,
      date: dated,
      isActive: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeStarIcon = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isActive: !eachItem.isActive}
        }
        return eachItem
      }),
    }))
  }

  starredAppointments = () => {
    const {appointmentList} = this.state
    const filteredAppointments = appointmentList.filter(eachOne => {
      if (eachOne.isActive === true) {
        return eachOne
      }
      return eachOne
    })
    return filteredAppointments
  }

  render() {
    const {title, date} = this.state
    const filteredAppointments = this.starredAppointments()
    console.log(title, date)
    return (
      <div className="bg-container">
        <div className="form-container">
          <div className="container">
            <form className="form-card" onSubmit={this.onAddMethod}>
              <h1 className="heading">Add Appointment</h1>

              <label htmlFor="title" className="label-name">
                TITLE
              </label>
              <input
                type="text"
                value={title}
                placeholder="Title"
                id="title"
                className="input-element"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="date" className="label-name">
                DATE
              </label>
              <input
                type="date"
                id="date"
                value={date}
                placeholder="dd/mm/yyyy"
                className="input-element"
                onChange={this.onChangeDate}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="seperator" />
          <div className="appointment-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button
              type="button"
              className="starrted-button"
              onClick={this.starredAppointments}
            >
              Starred
            </button>
          </div>
          <ul className="list-items">
            {filteredAppointments.map(eachItem => (
              <AppointmentItems
                key={eachItem.id}
                list={eachItem}
                onChangeStarIcon={this.onChangeStarIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
