import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchTasks } from '../actions'

jest.mock('../actions')

// fetchTasks.mockImplementation(() => () => {})

// test('page header includes BOR3D', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   const heading = screen.getAllByRole('heading')
//   expect(heading[0]).toHaveTextContent('Bor3d')
// })

// test('renders an <li> for each fruit', () => {
//   const fruits = ['orange', 'persimmons', 'kiwi fruit']
//   jest.spyOn(store, 'getState')
//   store.getState.mockImplementation(() => ({ fruits }))

//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   const li = screen.getAllByRole('listitem')
//   expect(li).toHaveLength(3)
// })

// test('dispatches fetchFruits action', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   expect(fetchFruits).toHaveBeenCalled()
// })
