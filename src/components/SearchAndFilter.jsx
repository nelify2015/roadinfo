import { useState, useRef, useEffect } from 'react'
import anime from "animejs/lib/anime.es.js";
import { Form, InputGroup, Dropdown } from 'react-bootstrap';


function SearchAndFilter({options, filter, setFilter, text, setText}) {

  const filterClick = (e) => {
    setFilter(e)
  }

  const items = options?.items.map((item, index) => {
    return <Dropdown.Item key={index} eventKey={item.value}>
      {item.text}
    </Dropdown.Item>
  })

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Dropdown onSelect={filterClick}>    
          <Dropdown.Toggle split className="btn-secondary" id="dropdown-split-basic" />
          <Dropdown.Menu>
            {items}
          </Dropdown.Menu>
        </Dropdown> 
      </InputGroup>  
    </>
  )
}

export default SearchAndFilter