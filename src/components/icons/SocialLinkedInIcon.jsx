import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const SocialLinkedInIcon = ({ color, size, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  const filledClassName = styles[`filled-${color}`]
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
          className={className}
        >
          <path d='M8.85245 6.37308C9.03468 6.21417 9.1975 6.07417 9.37488 5.94989C9.91581 5.57035 10.5143 5.35729 11.1872 5.32819C11.9873 5.29355 12.7111 5.47866 13.3491 5.95804C14.0401 6.47699 14.4315 7.15865 14.5825 7.97914C14.6571 8.38429 14.6659 8.79294 14.6653 9.20304C14.6626 10.7451 14.6629 12.2871 14.6668 13.8291C14.6671 13.9548 14.6441 14.0017 14.4973 14C13.7751 13.9918 13.0525 13.9933 12.3303 13.9991C12.2047 14.0003 12.1711 13.9694 12.1714 13.8477C12.1759 12.3252 12.179 10.8024 12.1708 9.27988C12.169 8.92508 12.1487 8.5662 12.0377 8.22276C11.8554 7.65839 11.4964 7.29865 10.8448 7.23927C9.9428 7.15719 9.09896 7.73523 8.90885 8.6218C8.87641 8.77256 8.85094 8.92362 8.85094 9.07905C8.85275 10.6598 8.84942 12.2408 8.85639 13.8215C8.857 13.9746 8.81031 14.0011 8.66385 13.9997C7.94161 13.9924 7.21906 13.9936 6.49681 13.9991C6.37644 14 6.33368 13.9781 6.33399 13.8515C6.33793 11.1019 6.33793 8.35257 6.33429 5.60294C6.33429 5.48274 6.36704 5.44694 6.49408 5.4481C7.23149 5.45363 7.9692 5.45363 8.70661 5.4481C8.83153 5.44723 8.85791 5.4871 8.85457 5.59712C8.84699 5.84714 8.85215 6.09745 8.85215 6.37367L8.85245 6.37308Z' fill='none' className={filledClassName} />
          <path d='M4.02835 9.73363C4.02835 11.1054 4.02653 12.4768 4.03139 13.8486C4.03169 13.97 3.99955 14.0005 3.87372 13.9994C3.14662 13.9933 2.41952 13.9944 1.69242 13.9985C1.58145 13.9991 1.53809 13.9819 1.53809 13.86C1.54203 11.1022 1.54203 8.34441 1.53869 5.58635C1.53869 5.47865 1.56537 5.44693 1.68029 5.4478C2.4174 5.45304 3.1545 5.45333 3.89191 5.4478C4.01228 5.44693 4.03078 5.48709 4.03048 5.58984C4.02714 6.9712 4.02835 8.35256 4.02835 9.73392V9.73363Z' fill='none' className={filledClassName} />
          <path d='M1.33576 3.39963C1.28846 2.69149 1.95097 1.97257 2.8324 2.00081C3.635 2.02671 4.25628 2.62425 4.26174 3.41797C4.26689 4.16948 3.5968 4.85259 2.71506 4.8101C1.99494 4.77546 1.29391 4.19043 1.33576 3.39963Z' fill='none' className={filledClassName} />

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
          className={className}
        >
          <path d='M13.2787 9.55961C13.552 9.32123 13.7963 9.11124 14.0623 8.92481C14.8737 8.3555 15.7715 8.03592 16.7808 7.99226C17.981 7.94031 19.0667 8.21798 20.0236 8.93704C21.0601 9.71547 21.6473 10.738 21.8738 11.9687C21.9857 12.5764 21.9989 13.1894 21.9979 13.8045C21.9939 16.1176 21.9943 18.4306 22.0002 20.7437C22.0007 20.9323 21.9661 21.0025 21.746 20.9999C20.6626 20.9877 19.5788 20.9899 18.4954 20.9986C18.3071 21.0004 18.2566 20.9541 18.2571 20.7716C18.2639 18.4878 18.2685 16.2036 18.2562 13.9198C18.2535 13.3876 18.223 12.8493 18.0565 12.3341C17.7832 11.4876 17.2447 10.948 16.2673 10.8589C14.9142 10.7358 13.6484 11.6028 13.3633 12.9327C13.3146 13.1588 13.2764 13.3854 13.2764 13.6186C13.2791 15.9897 13.2741 18.3612 13.2846 20.7323C13.2855 20.9619 13.2155 21.0017 12.9958 20.9995C11.9124 20.9886 10.8286 20.9903 9.74521 20.9986C9.56465 20.9999 9.50052 20.9672 9.50098 20.7773C9.50689 16.6528 9.50689 12.5288 9.50143 8.4044C9.50143 8.22409 9.55055 8.17039 9.74112 8.17214C10.8472 8.18043 11.9538 8.18043 13.0599 8.17214C13.2473 8.17083 13.2869 8.23064 13.2819 8.39567C13.2705 8.7707 13.2782 9.14616 13.2782 9.56048L13.2787 9.55961Z' fill='none' className={filledClassName} />
          <path d='M6.04253 14.6004C6.04253 16.6581 6.0398 18.7153 6.04708 20.7729C6.04753 20.9549 5.99932 21.0008 5.81057 20.999C4.71993 20.9899 3.62928 20.9916 2.53863 20.9977C2.37217 20.9986 2.30713 20.9728 2.30713 20.7899C2.31304 16.6533 2.31304 12.5166 2.30804 8.3795C2.30804 8.21797 2.34806 8.17038 2.52044 8.17169C3.62609 8.17955 4.73175 8.17998 5.83786 8.17169C6.01842 8.17038 6.04617 8.23063 6.04571 8.38474C6.04071 10.4568 6.04253 12.5288 6.04253 14.6009V14.6004Z' fill='none' className={filledClassName} />
          <path d='M2.00357 5.09944C1.93262 4.03723 2.92639 2.95886 4.24854 3.00121C5.45244 3.04006 6.38436 3.93638 6.39254 5.12695C6.40028 6.25422 5.39513 7.27888 4.07253 7.21514C2.99234 7.16319 1.94081 6.28565 2.00357 5.09944Z' fill='none' className={filledClassName} />

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
          className={className}
        >
          <path d='M22.1311 15.9327C22.5867 15.5354 22.9938 15.1854 23.4372 14.8747C24.7895 13.9259 26.2859 13.3932 27.9679 13.3204C29.9684 13.2339 31.7778 13.6966 33.3727 14.8951C35.1002 16.1925 36.0788 17.8966 36.4563 19.9478C36.6428 20.9607 36.6648 21.9823 36.6632 23.0076C36.6564 26.8626 36.6572 30.7177 36.667 34.5728C36.6678 34.8871 36.6102 35.0043 36.2433 34.9999C34.4377 34.9795 32.6313 34.9832 30.8257 34.9977C30.5119 35.0006 30.4277 34.9235 30.4285 34.6193C30.4399 30.813 30.4474 27.006 30.427 23.1997C30.4224 22.3127 30.3716 21.4155 30.0942 20.5569C29.6386 19.146 28.7411 18.2466 27.1121 18.0982C24.857 17.893 22.7474 19.3381 22.2721 21.5545C22.191 21.9314 22.1273 22.309 22.1273 22.6976C22.1319 26.6494 22.1235 30.602 22.141 34.5538C22.1425 34.9366 22.0258 35.0028 21.6596 34.9992C19.854 34.981 18.0476 34.9839 16.242 34.9977C15.9411 34.9999 15.8342 34.9453 15.835 34.6288C15.8448 27.7547 15.8448 20.8814 15.8357 14.0073C15.8357 13.7068 15.9176 13.6173 16.2352 13.6202C18.0787 13.6341 19.923 13.6341 21.7665 13.6202C22.0788 13.6181 22.1448 13.7177 22.1364 13.9928C22.1175 14.6178 22.1304 15.2436 22.1304 15.9341L22.1311 15.9327Z' fill='none' className={filledClassName} />
          <path d='M10.0709 24.3341C10.0709 27.7634 10.0663 31.1921 10.0785 34.6215C10.0792 34.9249 9.99887 35.0013 9.68429 34.9984C7.86654 34.9831 6.0488 34.986 4.23105 34.9962C3.95361 34.9977 3.84521 34.9548 3.84521 34.6499C3.85507 27.7554 3.85507 20.861 3.84673 13.9658C3.84673 13.6966 3.91344 13.6173 4.20073 13.6195C6.04349 13.6326 7.88625 13.6333 9.72977 13.6195C10.0307 13.6173 10.0769 13.7177 10.0762 13.9746C10.0679 17.428 10.0709 20.8814 10.0709 24.3348V24.3341Z' fill='none' className={filledClassName} />
          <path d='M3.33933 8.49907C3.22108 6.72871 4.87737 4.93143 7.08095 5.00201C9.08744 5.06677 10.6406 6.56063 10.6543 8.54491C10.6672 10.4237 8.99193 12.1315 6.78759 12.0252C4.98728 11.9386 3.23472 10.4761 3.33933 8.49907Z' fill='none' className={filledClassName} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SocialLinkedInIcon.propTypes = {
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
  disabled: PropTypes.bool
}
SocialLinkedInIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default SocialLinkedInIcon
