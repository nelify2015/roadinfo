import axios from 'axios'
import XMLParser from 'react-xml-parser';
import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext';

import InfoCard from '../components/InfoCard'

function Pinned() {
  const { state, dispatch } = useContext(AppContext)
  const [pinnedList, setPinnedList] = useState([])
  const [pinned, setPinned] = useState([])
  const [roadInfoList, setRoadInfoList] = useState([])
  // const [loadCnt, setLoadCnt] = useState(0)  

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
      })
      .catch(function (error) {
        console.log(`Err: ${error}`)
      })
  }  

  useEffect(() => {
    // console.log({pinned}, 'start')
    setPinned(state.info.pinned)
    setPinnedList(roadInfoList.filter((item, i) => pinned.includes(`${item.LOCATION_ID}_${item.DESTINATION_ID}`)))
    // console.log({pinned}, 'end')
  }, [pinned.length, roadInfoList])
  
  const items = pinnedList.map((item, index) => {
    const id = `${item.LOCATION_ID}_${item.DESTINATION_ID}`
    const showPin = index === state.page.showPinIndex
    const isPinned = state.info.pinned.includes(id)
    return (
      <div className="py-1" key={index} >
        <InfoCard info={item} roadData={state.info.data} infoIndex={index} dispatch={dispatch} showPin={showPin} pinned={isPinned} />
      </div>
    )
  });

  return (
    <>      
      <div className="container-fluid">
        this is pinned {roadInfoList.length}
        {items}        
      </div>
    </>
  )
}

export default Pinned
