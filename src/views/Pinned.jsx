import { useState, useContext } from 'react'
import { AppContext } from '../contexts/AppContext';

function Pinned() {
  const { state, dispatch } = useContext(AppContext)

  const showData = () => {
    console.log('Show Data')
  }

  return (
    <>      
      <div>This is pinned page</div>
      {/* {cnt} */}
      {/* <button onClick={showData}>Show</button> */}
    </>
  )
}

export default Pinned
