import React from 'react'
import NumEl from './num-el'

export default class Hours extends React.Component {
  render () {
    const { hours } = this.props
    return (
      <div>
        <NumEl type="hours-pre" num={hours.pre} />
        <NumEl type="hours-last" num={hours.last} />
        <div className="semicolon">
          <span />
          <span />
        </div>
      </div>
    )
  }
}
