// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="nxt-trendz-home-and-header-main-bg-container">
    <Header />
    <div className="nxt-trendz-home-main-outer-bg-container">
      <div className="nxt-trendz-home-main-bg-container">
        <h1 className="home-page-tag-line"> Clothes That Get YOU Noticed </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-page-title-image"
        />
        <p className="home-page-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="home-page-shop-now-button" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-page-title-image-lg"
      />
    </div>
  </div>
)

export default Home
