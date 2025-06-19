// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="header-bg-container">
      <div className="website-logo-and-nav-logout-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout-image"
        />
      </div>
      <div className="nav-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-icons-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-icons-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-icons-image"
        />
      </div>
    </div>
    <div className="header-bg-large-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-image"
      />
      <div className="list-container">
        <ul className="header-large-screen-options-container">
          <li className="nav-large-options"> Home </li>
          <li className="nav-large-options"> Products </li>
          <li className="nav-large-options"> Cart </li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  </>
)

export default Header
