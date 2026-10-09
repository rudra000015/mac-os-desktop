import "./navbar.scss"
import DateTime from './DateTime'
function Navbar() {
  return (

      <nav className="mac-navbar">
        <div className="left">
            <div className="apple-icon">
                <img src="/apple-wifi-icons/apple.svg" alt="Apple" />
            </div>
            <div className="nav-items app-name">
               <p> Rudra Chaudhary</p>
            </div>
              <div className="nav-items">
               <p> File</p>
            </div>
                 <div className="nav-items">
               <p> Window</p>
            </div>
                 <div className="nav-items">
               <p> Terminal</p>
            </div>
        </div>
        <div className="right">
          <img src="/apple-wifi-icons/wifi.svg" alt="Wi-Fi" />
          <DateTime />
        </div>
      </nav>
    
  )
}

export default Navbar
