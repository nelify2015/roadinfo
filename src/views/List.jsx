import { useState, useContext } from 'react'
// import { MyContext } from '../contexts/AppContext';

function List() {
  // const { cnt, setCnt } = useContext(MyContext)

  const showData = () => {
    console.log('Show Data')
  }

  return (
    <>
      {/* {cnt} */}
      <button onClick={showData}>Show</button>
    </>
  )
}

export default List
