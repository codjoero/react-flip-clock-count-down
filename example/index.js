import React from 'react'
import { render } from 'react-dom'
// import Clock from 'react-flip-clock'
import Clock from '../lib/index.js'

const Index = () => {
  return (
    <div>
      <Clock
        endTime={1618237200000}
      />
    </div>
  )
}

render(
  <Index />,
  document.getElementById('app')
)
