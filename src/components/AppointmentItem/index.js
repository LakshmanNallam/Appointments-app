import './index.css'

const AppointmentItem = prop => {
  const {eachItem, favorite} = prop
  const {title, isFav, date, id} = eachItem
  console.log(id)

  const favcall = () => {
    favorite(id)
  }

  return (
    <li className="listCON">
      <div className="ItmeFirstCon">
        <p>{title}</p>
        <button type="button" onClick={favcall} testid="star">
          {isFav ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
              testid="star"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              alt="star"
            />
          )}
        </button>
      </div>
      <p className="paraa">{`Date:${date}`}</p>
    </li>
  )
}

export default AppointmentItem
