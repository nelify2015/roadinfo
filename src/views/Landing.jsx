import { useState, useContext } from 'react'
// import '../css/Landing.css'
import axios from 'axios'
import XMLParser from 'react-xml-parser';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import InfoCard from '../components/InfoCard'

function Landing () {
  const { state, dispatch } = useContext(AppContext)
  const navigate = useNavigate()

  const getRoadInfo = () => {
    axios.get('https://resource.data.one.gov.hk/td/jss/Journeytimev2.xml')
      .then((data) => {
        console.log('Get Data')
        const xml = new XMLParser().parseFromString(data.data)
        // console.log({xml})
        // convert it to json, first children is no. of records, second children is attributes of records
        const json = xml.children.reduce((a, c) => [
                        ...a, c.children.reduce((a, c) => ({
                          ...a, [c.name]: c.value
                        }), {})
                      ], [])

        dispatch({
          payload: {
            all: json
          }
        })
      })
  }

  const showData = () => {
    console.log(state)
  }

  const items = state.info.all.map((item) =>
    <InfoCard info={item} key={item.LOCATION_ID + item.DESTINATION_ID}/>
  );

  // const add = (val) => {
  //   console.log('calling add')
  //   setCnt(pre => pre + val)
  // }    

  return (
    <>
      <div className="container-fluid">
        {items}
      </div>
      {/* <InfoCard info={state.info.all[0]}/> */}

      {/* <Button onClick={getRoadInfo} variant="primary">Road Info</Button>
      <Button onClick={showData} variant="secondary">Show</Button> */}
      {/* <br/>
      <div onClick={() => navigate("/list")}>List</div>
      <br/> */}
      {/* <Button onClick={changeName}>Baka</Button> */}
      {/* {cnt}
      <button onClick={() => add(1)}>+</button>
      <button onClick={() => add(-1)}>-</button> */}
    </>
  )
}

export default Landing