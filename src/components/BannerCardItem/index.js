import './index.css'

const UserProfile = props => {
  const {UserDetails} = props
  const {id, headerText, description, className} = UserDetails
  return (
    <li className="bannerCardsList">
      <div className={className}>
        <p>{headerText}</p>
        <p>{description}</p>
        <button>Show More</button>
      </div>
    </li>
  )
}
export default UserProfile
