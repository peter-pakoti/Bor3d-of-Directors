import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowActivity from './Activity'

import Tasks from './Tasks'

function App() {
  return (
    <>
      <div className="app">
        <h3 className="activity">I'm Bor3d asf</h3>

        <ShowActivity />
        <Tasks />
      </div>
    </>
  )
}

export default App
