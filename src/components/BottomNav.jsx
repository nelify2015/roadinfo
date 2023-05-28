import '../css/BottomNav.css'
// import { Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate()

  const items = [
    { text: "Home", icon: "bi-house", link: "/"},
    { text: "Pinned", icon: "bi-pin", link: "/pinned"},
    { text: "Notice", icon: "bi-card-text", link: "/notice"},
    { text: "Setting", icon: "bi-gear", link: "/setting"}
  ]

  const navItems = items.map(({text, icon, link}) => {
    return (
      <div className="bottomNavBarItem text-center my-auto p-2" key={text} onClick={() => navigate(link)}>
        <div className="d-flex flex-column justify-content-center m-2">
          <div><i className={"bi " + icon + " fw-bold"}></i></div>
          <div>{text}</div>
        </div>
      </div>
    )
  }) 

  return (
    <div className="bottomNavBar fixed-bottom">
      <div className="d-flex flex-inline justify-content-around">
        {navItems}
      </div>      
    </div>
  )
}

export default BottomNav