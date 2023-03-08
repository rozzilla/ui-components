import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const WorkspaceStaticIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  let icon = <></>

  switch (size) {
    case 'small':
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={2} y={2} width={4} height={5.03497} rx={1} stroke='none' />
          <rect x={8} y={2} width={6} height={5.03497} rx={1} stroke='none' />
          <rect x={14} y={14} width={4} height={5.03496} rx={1} transform='rotate(-180 14 14)' stroke='none' />
          <rect x={8} y={14} width={6} height={5.03497} rx={1} transform='rotate(-180 8 14)' stroke='none' />
        </svg>
      )
      break
    case 'normal':
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={3} y={3} width={6} height={7.55245} rx={1} stroke='none' strokeWidth={1.5} />
          <rect x={12} y={3} width={9} height={7.55245} rx={1} stroke='none' strokeWidth={1.5} />
          <rect x={21} y={21} width={6} height={7.55245} rx={1} transform='rotate(-180 21 21)' stroke='none' strokeWidth={1.5} />
          <rect x={12} y={21} width={9} height={7.55245} rx={1} transform='rotate(-180 12 21)' stroke='none' strokeWidth={1.5} />
        </svg>
      )
      break
    case 'large':
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={5} y={5} width={10} height={12.5874} rx={1} stroke='none' strokeWidth={2} />
          <rect x={20} y={5} width={15} height={12.5874} rx={1} stroke='none' strokeWidth={2} />
          <rect x={35} y={35} width={10} height={12.5874} rx={1} transform='rotate(-180 35 35)' stroke='none' strokeWidth={2} />
          <rect x={20} y={35} width={15} height={12.5874} rx={1} transform='rotate(-180 20 35)' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

WorkspaceStaticIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

WorkspaceStaticIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'normal'
}

export default WorkspaceStaticIcon
