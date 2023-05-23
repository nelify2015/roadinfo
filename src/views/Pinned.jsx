import { useState, useContext } from 'react'
// import { MyContext } from '../contexts/AppContext';

function Pinned() {
  // const { cnt, setCnt } = useContext(MyContext)

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
