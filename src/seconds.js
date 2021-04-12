import React from 'react'
import NumEl from './num-el'

export default class Seconds extends React.Component {
  render () {
    return (
      <div>
        <NumEl type="seconds-pre" num="5" />
        <NumEl type="seconds-last" num="9" />
      </div>
    )
  }
}
