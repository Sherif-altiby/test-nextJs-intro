import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {

  it('should have Templates text', () => {
    render(<Page />)
 
    const heading = screen.getByText('Templates')
 
    expect(heading).toBeInTheDocument()
  })

  it('should have Documentation text', () => {
    render(<Page />)
 
    const heading = screen.getByText('Documentation')
 
    expect(heading).toBeInTheDocument()
  })


})