import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="header">Calculations</h1>
        <input
          className="e-input"
          type="text"
          placeholder="Enter your Input here"
        />
        {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        /> */}
      </div>

      {/* <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="dresses to be noticed"
        className="home-desktop-img"
      /> */}
    </div>
  </>
)

export default Home
