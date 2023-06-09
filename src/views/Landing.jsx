import { useState, useContext, useEffect, useRef } from 'react'
import '../css/Landing.css'
import axios from 'axios'
import XMLParser from 'react-xml-parser';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from "react-router-dom";
import { useInterval, usePrevious } from "../hooks/CustomHooks"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import InfoCard from '../components/InfoCard'
import FilterList from '../components/FilterList'
import SearchAndFilter from '../components/SearchAndFilter'

function Landing () {
  const { t, i18n } = useTranslation();
  const { state, dispatch } = useContext(AppContext)
  const [shownIndex, setShownIndex] = useState(-1)
  const [roadInfoList, setRoadInfoList] = useState([])
  const [roadInfoFilteredList, setRoadInfoFilteredList] = useState([])
  // const [loadCnt, setLoadCnt] = useState(0)
  const [filter, setFilter] = useState("")
  // const navigate = useNavigate()
  const refreshRate = 1000 * 60 * 2
  // const prevLoadCnt = usePrevious(loadCnt)

  useEffect(() => {
    const controller = new AbortController();
    console.log("Landing componentDidMounted")
    // if (loadCnt === 0) {
    //   setLoadCnt((prev) => prev + 1 )
      getRoadInfo({signal: controller.signal})
    // }

    return (() => {
      controller.abort()
    })
  }, [])

  useEffect(() => {
    console.log('useEffect', filter, roadInfoList.length)
    filterRoadInfo()
  }, [filter, roadInfoList.length])

  const filterRoadInfo = () => {
    let list = []
    if (filter === "")
      list = roadInfoList
    else if (filter === 'PIN') {
      list = roadInfoList.filter((item) => {
        const id = `${item.LOCATION_ID}_${item.DESTINATION_ID}`
        return state.info.pinned.includes(id)
      })
    }

    setRoadInfoFilteredList(list)
  }

  const getRoadInfo = (params = {}) => {
    axios.get('https://resource.data.one.gov.hk/td/jss/Journeytimev2.xml', params)
      .then((data) => {
        console.log('INFO_SET_ALL')
        const xml = new XMLParser().parseFromString(data.data)
        // console.log({xml})
        // convert it to json, first children is no. of records, second children is attributes of records
        const json = xml.children.reduce((a, c) => [
                        ...a, c.children.reduce((a, c) => ({
                          ...a, [c.name]: c.value
                        }), {})
                      ], [])

        setRoadInfoList(json)
        // dispatch({
        //   type: "INFO_SET_ALL",
        //   payload: { all: json }
        // })
      })
      .catch(function (error) {
        console.log(`Err: ${error}`)
      })
  }
  
  useInterval(() => {
    // Make the request here
    getRoadInfo()
  }, refreshRate);  

  const showData = () => {
    console.log(state)
  }

  // const items = state.info.all.map((item, index) => {
  const items = roadInfoFilteredList.map((item, index) => {
    const showPin = index === state.page.showPinIndex
    const pinned = state.info.pinned.includes(`${item.LOCATION_ID}_${item.DESTINATION_ID}`)
    return (
      <div className="py-1 col col-12 col-lg-6" key={index} >
        <InfoCard info={item} roadData={state.info.data} infoIndex={index} dispatch={dispatch} showPin={showPin} pinned={pinned} />
      </div>
    )
  });

  const options = {
    toggleLabel: "Title",
    items: [
      { text: "All", value: "" },
      { text: "Pinned", value: "PIN" },
    ]
  }

  return (
    <>
      {/* <FilterList options={options} filter={filter} setFilter={setFilter} /> */}
      
      {/* {filter} */}
      {/* {t("Welcome to React")} <br /> */}
      {/* <Button onClick={getRoadInfo} variant="primary">Road Info</Button>
      <Button onClick={showData} variant="secondary">Show</Button> */}
      {/* <br/>
      <div onClick={() => navigate("/list")}>List</div>
      <br/> */}
      {/* <Button onClick={changeName}>Baka</Button> */}
      {/* {cnt}
      <button onClick={() => add(1)}>+</button>
      <button onClick={() => add(-1)}>-</button> */}

      <div className="container-fluid">        
        <SearchAndFilter options={options} filter={filter} setFilter={setFilter} />
        <div className="row wrap">
          {items}
        </div>
      </div>
    </>
  )
}

export default Landing