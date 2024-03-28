'use strict'
import PropTypes from 'prop-types'
import styles from './TooltipOnOverflow.module.css'
import { useState } from 'react'
import { DIRECTIONS, DIRECTION_LEFT, DIRECTION_BOTTOM, DIRECTION_TOP, DIRECTION_RIGHT } from './constants'

const TooltipOnOverflow = ({
  direction,
  content,
  delay,
  children,
  tooltipClassName,
  offset,
  position
}) => {
  let timeout
  const [active, setActive] = useState(true)
  let componentClassName = tooltipClassName || styles.tooltipTipBaseClass
  componentClassName += ` ${styles.tooltipTip} ` + styles[`${position}`] + ' ' + styles[`${direction}`]
  const absoluteStyle = {}

  switch (direction) {
    case DIRECTION_BOTTOM:
      absoluteStyle.bottom = `calc(${offset}px * -1)`
      break
    case DIRECTION_RIGHT:
      absoluteStyle.left = `calc(100% + ${offset}px)`
      break
    case DIRECTION_LEFT:
      absoluteStyle.right = `calc(100% + ${offset}px)`
      break
    default:
      absoluteStyle.top = `calc(${offset}px * -1)`
      break
  }

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }
  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >

      {children}
      {active && (
        <div className={componentClassName} style={{ ...absoluteStyle }}>
          {content}
        </div>
      )}
    </div>
  )
}

TooltipOnOverflow.propTypes = {
  /**
   * direction
   */
  direction: PropTypes.oneOf(DIRECTIONS),
  /**
   * content
   */
  content: PropTypes.node,
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * tooltipClassName
   */
  tooltipClassName: PropTypes.string,
  /**
   * delay
   */
  delay: PropTypes.number,
  /**
   * offset
   */
  offset: PropTypes.number,
  /**
   * position
   */
  position: PropTypes.string
}

TooltipOnOverflow.defaultProps = {
  direction: DIRECTION_TOP,
  tooltipClassName: '',
  delay: 0,
  children: null,
  content: null,
  offset: 0,
  position: 'start'
}

export default TooltipOnOverflow
