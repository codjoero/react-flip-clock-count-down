import React from 'react'
import NumEl from './num-el'

export default class Minutes extends React.Component {
  render () {
    return (
      <div>
        <NumEl type="minutes-pre" num="5" />
        <NumEl type="minutes-last" num="9" />
        <div className="semicolon">
          <span />
          <span />
        </div>
      </div>
    )
  }
}
