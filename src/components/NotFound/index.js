// Write your code here
import './index.css'

const NotFound = () => (
  <div className="notFoundImageContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="notFoundImage"
    />
    <h1 className="notFoundHead">Lost Your Way?</h1>
    <p className="notFoundDescription">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
