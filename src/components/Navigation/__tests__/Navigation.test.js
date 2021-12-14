import React from 'react'
import Navigation from '../Navigation'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('Navigation component', () => {
  it('should display a navbar', () => {
    render(<Navigation />, { wrapper: MemoryRouter })
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
