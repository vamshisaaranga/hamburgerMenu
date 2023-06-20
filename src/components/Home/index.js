/* eslint-disable arrow-body-style */
// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homeImageContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
      </div>
    </div>
  )
}

export default Home
