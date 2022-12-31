import {Component} from 'react'
import {v4 as idv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {array: [], titleIp: '', dateIp: '', isStared: false}

  submitFun = event => {
    event.preventDefault()
    const {array, titleIp, dateIp} = this.state
    const dateArray = dateIp.split('-')
    const formatteddate = format(
      new Date(dateArray[0], dateArray[1], dateArray[2]),
      'dd MMMM yyyy, EEEE',
    )
    this.setState({
      array: [
        ...array,
        {title: titleIp, isFav: false, date: formatteddate, id: idv4()},
      ],
      titleIp: '',
      dateIp: '',
    })
  }

  favorite = id => {
    const {array} = this.state
    this.setState({
      array: array.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isFav: !eachItem.isFav}
        }
        return eachItem
      }),
    })
  }

  starredFun = () => {
    this.setState(prevState => ({isStared: !prevState.isStared}))
  }

  titleCd = event => {
    this.setState({titleIp: event.target.value})
  }

  dateCd = event => {
    this.setState({dateIp: event.target.value})
  }

  render() {
    const {array, titleIp, dateIp, isStared} = this.state
    console.log(isStared)
    return (
      <div className="mainCon">
        <div className="AppointmentCon">
          <div className="appointmentwoCon">
            <div className="leftCon">
              <form className="formCon" onSubmit={this.submitFun}>
                <h1>Add Appointment</h1>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  onChange={this.titleCd}
                  value={titleIp}
                />
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  id="date"
                  onChange={this.dateCd}
                  value={dateIp}
                />
                <button type="submit">Add</button>
              </form>
            </div>
            <div className="rightCon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="hrline" />

          <div className="lowerCon">
            <div className="lowerFirstCon">
              <h1>Appointments</h1>
              <button type="button" className="btnn" onClick={this.starredFun}>
                Starred
              </button>
            </div>

            <ul className="lowerSecondCon">
              {isStared
                ? array
                    .filter(eachItem => eachItem.isFav)
                    .map(eachItem => (
                      <AppointmentItem
                        eachItem={eachItem}
                        key={eachItem.id}
                        favorite={this.favorite}
                      />
                    ))
                : array.map(eachItem => (
                    <AppointmentItem
                      eachItem={eachItem}
                      key={eachItem.id}
                      favorite={this.favorite}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
