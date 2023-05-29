import { useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap';

function FilterList({options, filter, setFilter}) {


  const items = options?.items.map((item, index) => {
    return <Dropdown.Item key={index} eventKey={item.value}>
      {item.text}
    </Dropdown.Item>
  })

  const filterClick = (e) => {
    setFilter(e)
  }

  return (
    <>
      <Dropdown onSelect={filterClick}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {/* <i className="bi bi-pin" /> */}
          {options.toggleLabel}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items}
        </Dropdown.Menu>        
      </Dropdown>
    </>
  )
}

export default FilterList