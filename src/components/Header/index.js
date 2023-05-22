// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="navContainer">
    <div className="imgContainer">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
    <ul className="headerItems">
      <li className="HeaderItem">Home</li>
      <li className="HeaderItem">Products</li>
      <li className="HeaderItem">Cart</li>
      <li>
        <button className="logOutBtn" type="button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
