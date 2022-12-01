import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from '../Note'

test('renders content', () => {
  const note = {
    id: '',
    content: 'Component testing is done with react-testing-library',
    date: '',
    important: true
  }
  const mockHandler = jest.fn()

  const { container } = render(<Note note={note} toggleImportance={mockHandler} />)

  screen.debug()
  const div = container.querySelector('.note')
  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
  // const element = screen.getByText('Component testing is done with react-testing-library')
  // expect(element).toBeDefined()
})

test('clicking the button calls event handler once', async () => {
  const note = {
    id: '',
    content: 'Component testing is done with react-testing-library',
    date: '',
    important: true
  }

  const mockHandler = jest.fn()

  render(
    <Note note={note} toggleImportance={mockHandler}/>
  )

  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('does not render this', () => {
  const note = {
    id: '',
    date: '',
    content: 'This is a reminder',
    important: true
  }

  const mockHandler = jest.fn()

  render(<Note note = {note} toggleImportance={mockHandler}/>)

  const element = screen.queryByText('do not want this thing to be rendered')
  expect(element).toBeNull()
})
