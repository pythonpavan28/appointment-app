// Write your code here
import './index.css'

const AppointmentItems = props => {
  const {list, onChangeStarIcon} = props
  const {id, title, date, isActive} = list
  const onClickStarIcon = () => {
    onChangeStarIcon(id)
  }
  const starIcon = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-item">
      <div>
        <p className="title">{title}</p>
        <p className="date">{date}</p>
      </div>
      <button
        type="button"
        className="star-image"
        onClick={onClickStarIcon}
        data-testid="star"
      >
        <img src={starIcon} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItems
