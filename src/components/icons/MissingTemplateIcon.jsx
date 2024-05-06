import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const MissingTemplateIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  disabled = false,
  inactive = false
}) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  let icon = <></>
  const filledClassName = styles[`filled-${color}`]

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
          <path d='M9 4V3C9 2.44772 8.55228 2 8 2L3 2C2.44772 2 2 2.44772 2 3L2 8C2 8.55228 2.44772 9 3 9H4.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='3.16699' y='3.16675' width='4.66667' height='1.16667' stroke='none' strokeLinejoin='round' />
          <path d='M3.16699 5.5H4.91699V7.83325H3.16699L3.16699 5.5Z' stroke='none' strokeLinejoin='round' />
          <path d='M8 5.5H6.25V7.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='10.5' cy='9.5' r='4.5' stroke='none' />
          <path d='M10.1714 10.4776C10.0521 10.4776 9.95546 10.381 9.95546 10.2617C9.95694 9.98421 9.97996 9.89803 10.0245 9.73311C10.0705 9.56819 10.1373 9.43498 10.2249 9.33349C10.3125 9.232 10.418 9.14003 10.5412 9.05756C10.6333 8.99413 10.7157 8.92832 10.7884 8.86013C10.8612 8.79194 10.9191 8.71662 10.9621 8.63416C11.0052 8.55011 11.0267 8.45655 11.0267 8.35347C11.0267 8.24405 11.0022 8.14811 10.9532 8.06565C10.9042 7.98319 10.8382 7.91976 10.755 7.87536C10.6733 7.83095 10.5828 7.80875 10.4833 7.80875C10.3868 7.80875 10.2955 7.83175 10.2094 7.87774C10.1232 7.92214 10.0527 7.98874 9.99777 8.07755C9.89617 8.23886 9.75751 8.40343 9.56686 8.40343H9.46744C9.21107 8.40343 8.99446 8.18808 9.06672 7.94211C9.10194 7.82222 9.15097 7.71434 9.21381 7.61846C9.34892 7.41072 9.52784 7.25611 9.75056 7.15461C9.97327 7.05154 10.219 7 10.4878 7C10.7832 7 11.0445 7.05233 11.2717 7.15699C11.4989 7.26007 11.6771 7.40993 11.8062 7.60657C11.9354 7.8032 12 8.04028 12 8.31779C12 8.50333 11.971 8.66825 11.9131 8.81256C11.8567 8.95528 11.7773 9.08214 11.6748 9.19315C11.5724 9.30257 11.4514 9.40168 11.3118 9.49049C11.1945 9.56502 11.098 9.64272 11.0223 9.7236C10.948 9.80447 10.8924 9.89803 10.8552 10.0043C10.8196 10.1105 10.801 10.1063 10.7996 10.2617C10.7996 10.381 10.7029 10.4776 10.5836 10.4776H10.1714ZM10.3964 12C10.248 12 10.121 11.9445 10.0156 11.8335C9.91166 11.7209 9.86043 11.5861 9.86192 11.4291C9.86043 11.2737 9.91166 11.1405 10.0156 11.0295C10.121 10.9185 10.248 10.863 10.3964 10.863C10.5375 10.863 10.6615 10.9185 10.7684 11.0295C10.8753 11.1405 10.9295 11.2737 10.931 11.4291C10.9295 11.5338 10.9035 11.6297 10.853 11.7169C10.804 11.8026 10.7394 11.8716 10.6592 11.9239C10.5791 11.9746 10.4915 12 10.3964 12Z' fill='none' className={filledClassName} />
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
          <path d='M13.5 6V4C13.5 3.44772 13.0523 3 12.5 3L4 3C3.44772 3 3 3.44772 3 4L3 12.5C3 13.0523 3.44772 13.5 4 13.5H6.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='4.75049' y='4.75012' width='7' height='1.75' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M4.75049 8.25H7.37549V11.7499H4.75049V8.25Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 8.25H9.375V11.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='15.75' cy='14.25' r='6.75' stroke='none' strokeWidth={1.5} />
          <path d='M15.2571 15.7165C15.0782 15.7165 14.9332 15.5715 14.9332 15.3926C14.9354 14.9763 14.9699 14.8471 15.0367 14.5997C15.1058 14.3523 15.206 14.1525 15.3374 14.0002C15.4688 13.848 15.6269 13.71 15.8118 13.5863C15.9499 13.4912 16.0735 13.3925 16.1826 13.2902C16.2918 13.1879 16.3786 13.0749 16.4432 12.9512C16.5078 12.8252 16.5401 12.6848 16.5401 12.5302C16.5401 12.3661 16.5033 12.2222 16.4298 12.0985C16.3563 11.9748 16.2572 11.8796 16.1325 11.813C16.01 11.7464 15.8742 11.7131 15.7249 11.7131C15.5802 11.7131 15.4432 11.7476 15.314 11.8166C15.1849 11.8832 15.0791 11.9831 14.9967 12.1163C14.8442 12.3583 14.6363 12.6051 14.3503 12.6051H14.2012C13.8166 12.6051 13.4917 12.2821 13.6001 11.9132C13.6529 11.7333 13.7265 11.5715 13.8207 11.4277C14.0234 11.1161 14.2918 10.8842 14.6258 10.7319C14.9599 10.5773 15.3285 10.5 15.7316 10.5C16.1748 10.5 16.5668 10.5785 16.9076 10.7355C17.2483 10.8901 17.5156 11.1149 17.7094 11.4098C17.9031 11.7048 18 12.0604 18 12.4767C18 12.755 17.9566 13.0024 17.8697 13.2188C17.7851 13.4329 17.6659 13.6232 17.5122 13.7897C17.3586 13.9539 17.1771 14.1025 16.9677 14.2357C16.7918 14.3475 16.647 14.4641 16.5334 14.5854C16.422 14.7067 16.3385 14.8471 16.2829 15.0064C16.2294 15.1658 16.2016 15.1595 16.1993 15.3926C16.1993 15.5715 16.0543 15.7165 15.8754 15.7165H15.2571ZM15.5947 18C15.3719 18 15.1815 17.9167 15.0234 17.7502C14.8675 17.5814 14.7906 17.3792 14.7929 17.1437C14.7906 16.9106 14.8675 16.7108 15.0234 16.5442C15.1815 16.3777 15.3719 16.2945 15.5947 16.2945C15.8062 16.2945 15.9922 16.3777 16.1526 16.5442C16.3129 16.7108 16.3942 16.9106 16.3964 17.1437C16.3942 17.3007 16.3552 17.4446 16.2795 17.5754C16.206 17.7039 16.1091 17.8073 15.9889 17.8858C15.8686 17.9619 15.7372 18 15.5947 18Z' fill='none' className={filledClassName} />
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
          <path d='M22.5 10.5V6C22.5 5.44772 22.0523 5 21.5 5L6 5C5.44772 5 5 5.44772 5 6L5 21.5C5 22.0523 5.44772 22.5 6 22.5H12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='7.91748' y='7.91687' width='11.6667' height='2.91667' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M7.91748 13.75H12.2925V19.5831H7.91748L7.91748 13.75Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M21 13.75H15.625V19.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='26.25' cy='23.75' r='11.25' stroke='none' strokeWidth={2} />
          <path d='M25.4284 26.1941C25.1303 26.1941 24.8886 25.9524 24.8886 25.6543C24.8924 24.9605 24.9499 24.7451 25.0612 24.3328C25.1763 23.9205 25.3434 23.5875 25.5624 23.3337C25.7814 23.08 26.0449 22.8501 26.353 22.6439C26.5831 22.4853 26.7892 22.3208 26.971 22.1503C27.1529 21.9799 27.2977 21.7915 27.4053 21.5854C27.513 21.3753 27.5668 21.1414 27.5668 20.8837C27.5668 20.6101 27.5056 20.3703 27.3831 20.1641C27.2606 19.958 27.0954 19.7994 26.8875 19.6884C26.6834 19.5774 26.4569 19.5219 26.2082 19.5219C25.967 19.5219 25.7387 19.5794 25.5234 19.6943C25.3081 19.8053 25.1318 19.9719 24.9944 20.1939C24.7404 20.5971 24.3938 21.0086 23.9172 21.0086H23.6686C23.0277 21.0086 22.4861 20.4702 22.6668 19.8553C22.7548 19.5556 22.8774 19.2858 23.0345 19.0461C23.3723 18.5268 23.8196 18.1403 24.3764 17.8865C24.9332 17.6288 25.5475 17.5 26.2194 17.5C26.9581 17.5 27.6114 17.6308 28.1793 17.8925C28.7472 18.1502 29.1926 18.5248 29.5156 19.0164C29.8385 19.508 30 20.1007 30 20.7945C30 21.2583 29.9276 21.6706 29.7829 22.0314C29.6418 22.3882 29.4432 22.7054 29.1871 22.9829C28.931 23.2564 28.6284 23.5042 28.2795 23.7262C27.9863 23.9125 27.745 24.1068 27.5557 24.309C27.3701 24.5112 27.2309 24.7451 27.1381 25.0107C27.049 25.2763 27.0026 25.2658 26.9989 25.6543C26.9989 25.9524 26.7572 26.1941 26.4591 26.1941H25.4284ZM25.9911 30C25.6199 30 25.3025 29.8612 25.039 29.5837C24.7791 29.3023 24.6511 28.9653 24.6548 28.5728C24.6511 28.1843 24.7791 27.8513 25.039 27.5737C25.3025 27.2962 25.6199 27.1575 25.9911 27.1575C26.3437 27.1575 26.6537 27.2962 26.9209 27.5737C27.1882 27.8513 27.3237 28.1843 27.3274 28.5728C27.3237 28.8344 27.2587 29.0743 27.1325 29.2923C27.01 29.5064 26.8486 29.6789 26.6481 29.8097C26.4477 29.9366 26.2287 30 25.9911 30Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

MissingTemplateIcon.propTypes = {
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

export default MissingTemplateIcon
