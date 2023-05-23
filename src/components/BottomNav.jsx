import '../css/BottomNav.css'
import { Button } from 'react-bootstrap';
// import { BsHouse, BsPin } from "react-icons/bs";

function elem() {
  const items = [
    { text: "Home", icon: "bi-house", link: ""},
    { text: "Pinned", icon: "bi-pin", link: ""},
    { text: "Notice", icon: "bi-card-text", link: ""},
    { text: "Setting", icon: "bi-sliders", link: ""}
  ]

  const navItems = items.map(({text, icon, link}) => {
    return (
      <div className="bottomNavBarItem text-center my-auto" key={text}>
        <div className="d-flex flex-column justify-content-center m-2">
          <div><i className={"bi " + icon}></i></div>
          <div>{text}</div>
        </div>
      </div>      
    )
  }) 

  return (
    <div className="bottomNavBar fixed-bottom mb-2">
      <div className="d-flex flex-inline justify-content-evenly">
        {navItems}
      </div>      
    </div>
  )
}

export default elem