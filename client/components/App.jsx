import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'

function App() {
  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Bor3d of Directors</h1>
        <h3>Activity</h3>

        <button>Click for your fun activity:</button>
        <ul>
          {/* {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))} */}
        </ul>
      </div>
    </>
  )
}

export default App
