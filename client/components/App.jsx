import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowActivity from './Activity'

import Tasks from './Tasks'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="title">Bor3d of Directors</h1>
        <h3 className="activity">Activity</h3>

        <ShowActivity />
        <Tasks />
      </div>
    </>
  )
}

export default App
