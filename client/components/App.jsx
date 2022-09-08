import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Tasks from './Tasks'

function App() {
  return (
    <>
      <div className="app">
        <Tasks />
      </div>
    </>
  )
}

export default App
