import React from 'react'
import Seconds from './seconds'
import Minutes from './minutes'
import Hours from './hours'
import '@/index.scss'

export default class FilpClock extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hours: 0 }
  }

  $$ (str) {
    return document.querySelectorAll(str)
  }

  componentDidMount () {
    this.flip()

    const { endTime } = this.props
    this.getTimeRemaining(endTime)
  }

  flip () {
    setInterval(() => {
      this.secondsLastMove()
    }, 1000)
  }

  getTimeRemaining (endTime) {
    const total = endTime - Date.parse(new Date())
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24)

    this.setState({
      hours: this.truncNum(hrs)
    })
    return { hrs }
  }

  truncNum (num) {
    const strNum = num.toString()
    let pre = 0
    let last = 0
    if (strNum.length === 2) {
      pre = Number(strNum.charAt(0))
      last = Number(strNum.charAt(1))
    } else {
      last = Number(strNum.charAt(0))
    }
    return { pre, last }
  }

  hoursPredMove = (() => {
    return this.move('.hours-pre')
  })()

  hoursLastMove = (() => {
    return this.move('.hours-last', this.hoursPredMove)
  })()

  minutesPredMove = (() => {
    return this.move('.minutes-pre', this.hoursLastMove)
  })()

  minutesLastMove = (() => {
    return this.move('.minutes-last', this.minutesPredMove)
  })()

  secondsPredMove = (() => {
    return this.move('.seconds-pre', this.minutesLastMove)
  })()

  secondsLastMove = (() => {
    return this.move('.seconds-last', this.secondsPredMove)
  })()

  move (className, fn) {
    let num = 0
    let ele = null
    return () => {
      const element = ele || (ele = this.$$(`${className} > li`))

      this.clearFilpClock(className)
      element[num].className = 'flip-clock-before'

      if (num === element.length - 1) {
        element[0].className = 'flip-clock-active'
        num = 0
        fn && fn()
        return
      }

      element[num + 1].className = 'flip-clock-active'
      num = num + 1
    }
  }

  clearFilpClock (str) {
    this.$$(`${str} li`).forEach((item) => {
      item.className = ''
    })
  }

  render () {
    const { hours } = this.state

    return (
      <div className="flip-clock-wrapper">
        <Hours hours={hours}/>
        <Minutes />
        <Seconds />
      </div>
    )
  }
}
