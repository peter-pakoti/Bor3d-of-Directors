import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowActivity from './Activity'

<<<<<<< HEAD
import Tasks from './Tasks'

function App() {
  return (
    <>
      <div className="app">
        <Tasks />
=======
// import { fetchFruits } from '../actions'

function App() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <div className="app">
        <h1>Bor3d of Directors</h1>
        <h3>Activity</h3>

        <ShowActivity />

        <ul>
          {/* {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))} */}
        </ul>
>>>>>>> d055ee25c0cf52f09ba76339c54cb80549a6bf23
      </div>
    </>
  )
}

export default App
