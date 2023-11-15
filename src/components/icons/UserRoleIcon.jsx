import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const UserRoleIcon = ({ color, size, tip, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  let icon = <></>

  switch (size) {
    case SMALL:
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          data-tip={tip}
          className={className}
        >
          <path d='M7.5 14H2C2 12.325 3.34521 10.8745 5.30604 10.1695C5.89513 9.95773 6.53978 9.81323 7.22021 9.75015' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11 6.54593C11.272 6.09445 11.4285 5.5655 11.4285 5C11.4285 3.34315 10.0853 2 8.42847 2C6.77161 2 5.42847 3.34315 5.42847 5C5.42847 6.00323 5.92091 6.89144 6.67725 7.4361C6.90253 7.59833 7.15122 7.73008 7.41729 7.82532' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.0004 12.1643C11.6277 12.1643 12.1363 11.6643 12.1363 11.0475C12.1363 10.4306 11.6277 9.93061 11.0004 9.93061C10.3731 9.93061 9.8645 10.4306 9.8645 11.0475C9.8645 11.6643 10.3731 12.1643 11.0004 12.1643Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.6098 8.17401V8.55305C11.6098 8.62518 11.6555 8.69036 11.7243 8.71567L12.216 8.89854C12.283 8.92322 12.3589 8.90614 12.4078 8.85425L12.644 8.60494C12.7135 8.53153 12.8319 8.5309 12.9021 8.6043L13.4723 9.19785C13.536 9.26429 13.5366 9.36743 13.4742 9.43451L13.1704 9.76229C13.1222 9.81417 13.1106 9.88947 13.1408 9.95275L13.3468 10.3894C13.3757 10.4507 13.4388 10.4906 13.5077 10.4906H13.823C13.9208 10.4906 14 10.5684 14 10.6646V11.3974C14 11.4936 13.9208 11.5714 13.823 11.5714H13.4916C13.415 11.5714 13.3468 11.6201 13.323 11.6916L13.1556 12.196C13.1357 12.2554 13.1498 12.3206 13.193 12.3668L13.4652 12.6623C13.5315 12.7344 13.525 12.8464 13.4504 12.9104L12.8229 13.4501C12.7508 13.5121 12.6414 13.5064 12.5764 13.4375L12.3576 13.2059C12.31 13.1552 12.236 13.1369 12.1697 13.1597L11.7128 13.3166C11.6413 13.3413 11.5937 13.4071 11.5937 13.4811V13.826C11.5937 13.9222 11.5145 14 11.4167 14H10.5826C10.4848 14 10.4057 13.9222 10.4057 13.826V13.4811C10.4057 13.4071 10.358 13.3413 10.2866 13.3166L9.82967 13.1597C9.76338 13.1369 9.68937 13.1546 9.64175 13.2059L9.42293 13.4375C9.35793 13.5064 9.24853 13.5121 9.17645 13.4501L8.54896 12.9104C8.47431 12.8464 8.46788 12.7344 8.53416 12.6623L8.80639 12.3668C8.84887 12.3206 8.86303 12.2554 8.84372 12.196L8.67639 11.6916C8.65258 11.6201 8.58436 11.5714 8.50778 11.5714H8.17698C8.07916 11.5714 8 11.4936 8 11.3974V10.6646C8 10.5684 8.07916 10.4906 8.17698 10.4906H8.49233C8.56119 10.4906 8.62426 10.4514 8.65322 10.3894L8.85917 9.95275C8.88941 9.88884 8.87719 9.81417 8.82956 9.76229L8.5258 9.43451C8.46337 9.36743 8.46401 9.26366 8.52773 9.19785L9.09793 8.6043C9.16808 8.53153 9.2865 8.53153 9.356 8.60494L9.59219 8.85425C9.6411 8.90614 9.71704 8.92322 9.78398 8.89854L10.2757 8.71567C10.3445 8.69036 10.3902 8.62518 10.3902 8.55305V8.17401C10.3902 8.07783 10.4694 8 10.5672 8H11.4328C11.5306 8 11.6098 8.07783 11.6098 8.17401Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case MEDIUM:
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          data-tip={tip}
          className={className}
        >
          <path d='M11.25 21H3C3 18.4876 5.01782 16.3117 7.95906 15.2543C8.84269 14.9366 9.80967 14.7198 10.8303 14.6252' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5001 9.8189C16.9081 9.14168 17.1428 8.34825 17.1428 7.5C17.1428 5.01472 15.1281 3 12.6428 3C10.1575 3 8.14282 5.01472 8.14282 7.5C8.14282 9.00484 8.88148 10.3372 10.016 11.1542C10.3539 11.3975 10.727 11.5951 11.1261 11.738' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5007 18.2465C17.4417 18.2465 18.2046 17.4964 18.2046 16.5712C18.2046 15.646 17.4417 14.8959 16.5007 14.8959C15.5597 14.8959 14.7969 15.646 14.7969 16.5712C14.7969 17.4964 15.5597 18.2465 16.5007 18.2465Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.4147 12.261V12.8296C17.4147 12.9378 17.4832 13.0355 17.5865 13.0735L18.324 13.3478C18.4244 13.3848 18.5383 13.3592 18.6117 13.2814L18.966 12.9074C19.0703 12.7973 19.2479 12.7964 19.3531 12.9065L20.2084 13.7968C20.304 13.8964 20.3049 14.0511 20.2113 14.1518L19.7557 14.6434C19.6833 14.7213 19.6659 14.8342 19.7113 14.9291L20.0202 15.5841C20.0636 15.6761 20.1582 15.7359 20.2615 15.7359H20.7345C20.8813 15.7359 21 15.8527 21 15.9969V17.0961C21 17.2404 20.8813 17.3571 20.7345 17.3571H20.2374C20.1225 17.3571 20.0202 17.4302 19.9844 17.5374L19.7335 18.2939C19.7035 18.3831 19.7248 18.4809 19.7894 18.5502L20.1978 18.9935C20.2972 19.1017 20.2876 19.2697 20.1756 19.3655L19.2344 20.1752C19.1262 20.2682 18.9621 20.2597 18.8646 20.1562L18.5364 19.8088C18.465 19.7329 18.354 19.7053 18.2545 19.7395L17.5691 19.9749C17.462 20.0119 17.3905 20.1106 17.3905 20.2217V20.739C17.3905 20.8833 17.2718 21 17.1251 21H15.874C15.7272 21 15.6085 20.8833 15.6085 20.739V20.2217C15.6085 20.1106 15.5371 20.0119 15.4299 19.9749L14.7445 19.7395C14.6451 19.7053 14.5341 19.7319 14.4626 19.8088L14.1344 20.1562C14.0369 20.2597 13.8728 20.2682 13.7647 20.1752L12.8234 19.3655C12.7115 19.2697 12.7018 19.1017 12.8012 18.9935L13.2096 18.5502C13.2733 18.4809 13.2945 18.3831 13.2656 18.2939L13.0146 17.5374C12.9789 17.4302 12.8765 17.3571 12.7617 17.3571H12.2655C12.1187 17.3571 12 17.2404 12 17.0961V15.9969C12 15.8527 12.1187 15.7359 12.2655 15.7359H12.7385C12.8418 15.7359 12.9364 15.6771 12.9798 15.5841L13.2887 14.9291C13.3341 14.8333 13.3158 14.7213 13.2443 14.6434L12.7887 14.1518C12.6951 14.0511 12.696 13.8955 12.7916 13.7968L13.6469 12.9065C13.7521 12.7973 13.9297 12.7973 14.034 12.9074L14.3883 13.2814C14.4617 13.3592 14.5756 13.3848 14.676 13.3478L15.4135 13.0735C15.5168 13.0355 15.5853 12.9378 15.5853 12.8296V12.261C15.5853 12.1167 15.7041 12 15.8508 12H17.1492C17.2959 12 17.4147 12.1167 17.4147 12.261Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case LARGE:
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          data-tip={tip}
          className={className}
        >
          <path d='M18.75 35H5C5 30.8126 8.36304 27.1862 13.2651 25.4238C14.7378 24.8943 16.3495 24.5331 18.0505 24.3754' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5004 16.3648C28.1804 15.2361 28.5715 13.9137 28.5715 12.5C28.5715 8.35786 25.2137 5 21.0715 5C16.9294 5 13.5715 8.35786 13.5715 12.5C13.5715 15.0081 14.8026 17.2286 16.6935 18.5903C17.2567 18.9958 17.8784 19.3252 18.5436 19.5633' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5011 30.4108C29.0695 30.4108 30.3409 29.1607 30.3409 27.6187C30.3409 26.0766 29.0695 24.8265 27.5011 24.8265C25.9328 24.8265 24.6614 26.0766 24.6614 27.6187C24.6614 29.1607 25.9328 30.4108 27.5011 30.4108Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M29.0245 20.435V21.3826C29.0245 21.563 29.1387 21.7259 29.3108 21.7892L30.5401 22.2464C30.7074 22.3081 30.8972 22.2653 31.0195 22.1356L31.61 21.5123C31.7838 21.3288 32.0798 21.3273 32.2552 21.5108L33.6807 22.9946C33.84 23.1607 33.8416 23.4186 33.6855 23.5863L32.9261 24.4057C32.8054 24.5354 32.7765 24.7237 32.8521 24.8819L33.3669 25.9734C33.4393 26.1269 33.597 26.2265 33.7692 26.2265H34.5575C34.8021 26.2265 35 26.4211 35 26.6616V28.4935C35 28.7339 34.8021 28.9285 34.5575 28.9285H33.7289C33.5375 28.9285 33.3669 29.0503 33.3074 29.2291L32.8891 30.4899C32.8392 30.6386 32.8746 30.8015 32.9824 30.917L33.663 31.6558C33.8287 31.8361 33.8126 32.1161 33.626 32.2759L32.0573 33.6253C31.8771 33.7803 31.6036 33.7661 31.4411 33.5937L30.894 33.0147C30.775 32.8881 30.5899 32.8422 30.4242 32.8992L29.2819 33.2915C29.1033 33.3532 28.9842 33.5177 28.9842 33.7028V34.565C28.9842 34.8054 28.7863 35 28.5418 35H26.4566C26.2121 35 26.0142 34.8054 26.0142 34.565V33.7028C26.0142 33.5177 25.8951 33.3532 25.7165 33.2915L24.5742 32.8992C24.4085 32.8422 24.2234 32.8865 24.1044 33.0147L23.5573 33.5937C23.3948 33.7661 23.1213 33.7803 22.9411 33.6253L21.3724 32.2759C21.1858 32.1161 21.1697 31.8361 21.3354 31.6558L22.016 30.917C22.1222 30.8015 22.1576 30.6386 22.1093 30.4899L21.691 29.2291C21.6314 29.0503 21.4609 28.9285 21.2694 28.9285H20.4425C20.1979 28.9285 20 28.7339 20 28.4935V26.6616C20 26.4211 20.1979 26.2265 20.4425 26.2265H21.2308C21.403 26.2265 21.5607 26.1285 21.6331 25.9734L22.1479 24.8819C22.2235 24.7221 22.193 24.5354 22.0739 24.4057L21.3145 23.5863C21.1584 23.4186 21.16 23.1591 21.3193 22.9946L22.7448 21.5108C22.9202 21.3288 23.2162 21.3288 23.39 21.5123L23.9805 22.1356C24.1028 22.2653 24.2926 22.3081 24.4599 22.2464L25.6892 21.7892C25.8613 21.7259 25.9755 21.563 25.9755 21.3826V20.435C25.9755 20.1946 26.1734 20 26.418 20H28.582C28.8266 20 29.0245 20.1946 29.0245 20.435Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

UserRoleIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * tip
   */
  tip: PropTypes.string
}

UserRoleIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  tip: ''
}

export default UserRoleIcon
