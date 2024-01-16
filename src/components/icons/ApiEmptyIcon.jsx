import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, MEDIUM, EXTRA_LARGE, MAIN_DARK_BLUE } from '../constants'

const ApiEmptyIcon = ({ color, size, disabled, inactive }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  const filledClassName = styles[`filled-${color}`]
  let icon = <></>

  switch (size) {
    case EXTRA_LARGE:
      icon = (
        <svg
          width={80}
          height={80}
          viewBox='0 0 80 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path
            d='M38.2726 3.83337V5.48055C38.2726 5.79404 38.4831 6.07727 38.8003 6.18727L41.0653 6.98199C41.3737 7.08923 41.7235 7.01498 41.9488 6.78949L43.0369 5.70604C43.3571 5.38705 43.9026 5.3843 44.2257 5.70329L46.8525 8.28268C47.146 8.57142 47.1489 9.01965 46.8613 9.31114L45.462 10.7356C45.2397 10.9611 45.1863 11.2883 45.3256 11.5633L46.2743 13.4607C46.4077 13.7275 46.6983 13.9007 47.0155 13.9007H48.4682C48.9189 13.9007 49.2835 14.2389 49.2835 14.6569V17.8413C49.2835 18.2593 48.9189 18.5975 48.4682 18.5975H46.9414C46.5886 18.5975 46.2743 18.8092 46.1646 19.12L45.3938 21.3116C45.3019 21.5701 45.3671 21.8534 45.5658 22.0541L46.8198 23.3383C47.1252 23.6518 47.0956 24.1385 46.7517 24.4163L43.8611 26.7619C43.529 27.0314 43.025 27.0067 42.7256 26.7069L41.7176 25.7005C41.4982 25.4805 41.1573 25.4007 40.8519 25.4997L38.7469 26.1817C38.4179 26.2889 38.1985 26.5749 38.1985 26.8967V28.3953C38.1985 28.8133 37.8338 29.1516 37.3832 29.1516H33.5409C33.0903 29.1516 32.7256 28.8133 32.7256 28.3953V26.8967C32.7256 26.5749 32.5062 26.2889 32.1772 26.1817L30.0722 25.4997C29.7668 25.4007 29.4259 25.4777 29.2065 25.7005L28.1985 26.7069C27.8991 27.0067 27.3951 27.0314 27.063 26.7619L24.1724 24.4163C23.8285 24.1385 23.7989 23.6518 24.1043 23.3383L25.3583 22.0541C25.554 21.8534 25.6192 21.5701 25.5303 21.3116L24.7595 19.12C24.6498 18.8092 24.3355 18.5975 23.9827 18.5975H22.4588C22.0082 18.5975 21.6436 18.2593 21.6436 17.8413V14.6569C21.6436 14.2389 22.0082 13.9007 22.4588 13.9007H23.9116C24.2288 13.9007 24.5193 13.7302 24.6527 13.4607L25.6014 11.5633C25.7408 11.2856 25.6844 10.9611 25.4651 10.7356L24.0657 9.31114C23.7781 9.01965 23.7811 8.56867 24.0746 8.28268L26.7013 5.70329C27.0245 5.38705 27.57 5.38705 27.8902 5.70604L28.9782 6.78949C29.2036 7.01498 29.5534 7.08923 29.8617 6.98199L32.1268 6.18727C32.444 6.07727 32.6545 5.79404 32.6545 5.48055V3.83337C32.6545 3.41538 33.0191 3.07715 33.4698 3.07715H37.4573C37.9079 3.07715 38.2726 3.41538 38.2726 3.83337Z'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M30.8564 20.46L40.0698 11.7686'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M40.0698 20.46L30.8564 11.7685'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M23.9482 48.0268L30.2728 33.98H33.5161L39.861 48.0268H36.4149L31.2255 35.6255H32.5229L27.3132 48.0268H23.9482ZM27.1105 45.0168L27.9822 42.5485H35.2797L36.1716 45.0168H27.1105Z'
            fill='none' className={filledClassName}
          />
          <path
            d='M41.3331 48.0268V33.98H47.4752C48.7455 33.98 49.8402 34.1873 50.7591 34.6021C51.6781 35.0034 52.3876 35.5853 52.8876 36.3479C53.3876 37.1104 53.6376 38.0201 53.6376 39.077C53.6376 40.1204 53.3876 41.0235 52.8876 41.786C52.3876 42.5485 51.6781 43.1372 50.7591 43.5519C49.8402 43.9532 48.7455 44.1539 47.4752 44.1539H43.1575L44.617 42.689V48.0268H41.3331ZM44.617 43.0502L43.1575 41.5051H47.2928C48.3063 41.5051 49.0631 41.291 49.5631 40.8629C50.0632 40.4348 50.3132 39.8395 50.3132 39.077C50.3132 38.3011 50.0632 37.699 49.5631 37.271C49.0631 36.8429 48.3063 36.6288 47.2928 36.6288H43.1575L44.617 35.0837V43.0502Z'
            fill='none' className={filledClassName}
          />
          <path d='M55.9821 48.0268V33.98H59.266V48.0268H55.9821Z' fill='none' className={filledClassName} />
          <path
            d='M68.3785 43.6372V43.6268M68.3785 43.6268C73.1364 43.4008 76.9245 39.4861 76.9245 34.6885C76.9245 29.7447 72.9027 25.7397 67.946 25.7397C67.8169 25.7397 67.6878 25.7432 67.5588 25.7501C65.5008 21.9502 61.4719 19.3706 56.8361 19.3706C55.6286 19.3706 54.4639 19.5464 53.3639 19.8731M68.3785 43.6268H63.1045M23.1801 43.6372H18.1488V43.6302C11.5702 43.4634 6.28906 38.2068 6.28906 31.5039C6.28906 26.0102 9.95151 21.3689 14.9756 19.8731'
            stroke='none'
            strokeWidth={3}
            strokeMiterlimit={10}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M22.3412 51.2373V67.8962C22.3412 68.4485 21.8935 68.8962 21.3412 68.8962H14.3145'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M60.8682 51.2373V58.2641C60.8682 58.8163 61.3159 59.2641 61.8682 59.2641H67.2896'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M35.1836 54.4478V67.2906'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M48.0254 54.4478V71.1066C48.0254 71.6589 48.4731 72.1066 49.0254 72.1066H56.0521'
            stroke='none'
            strokeWidth={3}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx={7.8932}
            cy={68.8966}
            r={4.81605}
            stroke='none'
            strokeWidth={3}
          />
          <circle
            cx={72.1061}
            cy={59.2638}
            r={4.81605}
            stroke='none'
            strokeWidth={3}
          />
          <circle
            cx={62.4752}
            cy={72.1073}
            r={4.81605}
            stroke='none'
            strokeWidth={3}
          />
          <circle
            cx={35.1823}
            cy={72.1073}
            r={4.81605}
            stroke='none'
            strokeWidth={3}
          />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ApiEmptyIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * inactive
   */
  inactive: PropTypes.bool
}
ApiEmptyIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default ApiEmptyIcon
