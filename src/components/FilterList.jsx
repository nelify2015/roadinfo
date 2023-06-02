import { useState, useRef, useEffect } from 'react'
import { ListGroup, Dropdown } from 'react-bootstrap'
import '../css/FilterList.css'
import anime from "animejs/lib/anime.es.js";

function FilterList({options, filter, setFilter}) {
  const filterItemsContainerRef = useRef(null)
  const animationRef = useRef(null)
  const [show, setShow] = useState(false)

  const items = options?.items.map((item, index) => {
    return <ListGroup.Item key={index} eventKey={item.value}>
      {item.text}
    </ListGroup.Item>
  })

  useEffect(() => {
    if (show && document.activeElement !== document.querySelector('.filter-container>.btn'))
      btnFilterClick(null)
  }, [document.activeElement])

  const filterClick = (e) => {
    setFilter(e)
    btnFilterClick()
  }

  const btnFilterClick = () => {
    if (!show) {      
      animationRef.current = anime({
        targets: filterItemsContainerRef.current,
        opacity: [0, 1]
      })
    } else {
      animationRef.current = anime({
        targets: filterItemsContainerRef.current,
        opacity: [1, 0]
      })
    }
    setShow(!show)
  }

  return (
    <>
      <div className="filter-container">
        <button className="btn btn-success btn-circle btn-md" onClick={btnFilterClick}>
          <i className="bi bi-funnel"></i>
        </button>
      </div>
      <div className="filter-items-container" ref={filterItemsContainerRef}>
        <ListGroup onSelect={filterClick}>
          {items}
        </ListGroup>
      </div>
    </>
  )
}

export default FilterList