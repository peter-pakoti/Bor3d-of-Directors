import React from 'react'
import Tasks from './Tasks'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useSelector } from 'react-redux'

jest.mock('react-redux')

describe('<Tasks />', () => {
  // it('renders heading', () => {
  //   render(<Tasks />)
  //   const heading = screen.getByRole('heading')
  //   expect(heading).toHaveTextContent('How')
  // })
  it('list all tasks from state', () => {
    useSelector.mockReturnValue(['is', 'this', 'working'])
    render(<Tasks />)
    const listitems = screen.getAllByRole('listitem')
    expect(listitems).toHaveLength(3)
  })
})
