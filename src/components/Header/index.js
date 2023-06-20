// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navContainer">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="website logo"
            />
          </Link>
          <div>
            <Popup
              modal
              trigger={
                <button
                  type="button"
                  className="hamburgerButton"
                  data-testid="hamburgerIconButton"
                >
                  <GiHamburgerMenu className="giMenu" />
                </button>
              }
              className="pupup-content"
            >
              {close => (
                <div className="popup-container">
                  <div className="closeButtonContainer">
                    <button
                      type="button"
                      className="hamburgerButton"
                      data-testid="closeButton"
                    >
                      <IoMdClose
                        onClick={() => close()}
                        className="closeIcon"
                      />
                    </button>
                  </div>
                  <ul className="homeIconsContainer">
                    <li>
                      <Link to="/" className="link" onClick={() => close()}>
                        <div className="popupAlignment">
                          <AiFillHome className="react-icon" />
                          <h1 className="popupHome">Home</h1>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="link"
                        onClick={() => close()}
                      >
                        <div className="popupAlignment">
                          <BsInfoCircleFill />
                          <h1 className="popupHome">About</h1>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </Popup>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header
