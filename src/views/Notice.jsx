import { useEffect } from 'react'
import axios from 'axios'

import NoticeItem from '../components/NoticeItem'

function Notice() {
  useEffect(() => {
    const controller = new AbortController();
    console.log("Notice")
    getNotices({signal: controller.signal})
    return (() => {
      controller.abort()
    })
  }, [])


  const getNotices = (params = {}) => {
    console.log('getNotices')
    axios.get('https://static.data.gov.hk/td/traffic-snapshot-images/code/Traffic_Camera_Locations_En.xml', params)
      .then((data) => {        
        console.log({data})
      })
      .catch(function (error) {
        console.log(`Err: ${error}`)
      })
  }

  return (
    <>
      <NoticeItem />
    </>
  )
}

export default Notice