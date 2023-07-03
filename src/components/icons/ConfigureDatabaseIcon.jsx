import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, LARGE, MAIN_DARK_BLUE, MEDIUM, SIZES, SMALL } from '../constants'

const ConfigureDatabaseIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
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
          <path d='M5.99999 5.2048C8.20913 5.2048 9.99999 4.48738 9.99999 3.6024C9.99999 2.71742 8.20913 2 5.99999 2C3.79086 2 2 2.71742 2 3.6024C2 4.48738 3.79086 5.2048 5.99999 5.2048Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 6.05729C2 6.75601 3.11659 7.35031 4.6738 7.5695' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 3.60286V8.39805C2 9.06094 3.00501 9.62985 4.4378 9.87362' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.0006 11.5524C10.8371 11.5524 11.5152 10.8857 11.5152 10.0633C11.5152 9.24084 10.8371 8.57413 10.0006 8.57413C9.16416 8.57413 8.48608 9.24084 8.48608 10.0633C8.48608 10.8857 9.16416 11.5524 10.0006 11.5524Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.813 6.23202V6.7374C10.813 6.83358 10.874 6.92048 10.9658 6.95423L11.6214 7.19806C11.7106 7.23096 11.8119 7.20818 11.8771 7.139L12.192 6.80658C12.2847 6.70871 12.4426 6.70787 12.5361 6.80574L13.2964 7.59713C13.3813 7.68572 13.3822 7.82324 13.2989 7.91268L12.8939 8.34972C12.8296 8.4189 12.8141 8.5193 12.8544 8.60367L13.129 9.18583C13.1676 9.26767 13.2517 9.32082 13.3436 9.32082H13.764C13.8945 9.32082 14 9.42459 14 9.55284V10.5298C14 10.6581 13.8945 10.7619 13.764 10.7619H13.3221C13.22 10.7619 13.129 10.8268 13.0973 10.9222L12.8742 11.5946C12.8476 11.6739 12.8665 11.7608 12.924 11.8224L13.2869 12.2164C13.3753 12.3126 13.3667 12.4619 13.2672 12.5471L12.4305 13.2668C12.3344 13.3495 12.1886 13.3419 12.1019 13.2499L11.8101 12.9412C11.7466 12.8737 11.648 12.8492 11.5596 12.8796L10.9503 13.0888C10.8551 13.1217 10.7916 13.2095 10.7916 13.3082V13.768C10.7916 13.8962 10.686 14 10.5556 14H9.44353C9.3131 14 9.20755 13.8962 9.20755 13.768V13.3082C9.20755 13.2095 9.14405 13.1217 9.0488 13.0888L8.43956 12.8796C8.35117 12.8492 8.25249 12.8728 8.18899 12.9412L7.89724 13.2499C7.81058 13.3419 7.6647 13.3495 7.56859 13.2668L6.73195 12.5471C6.63241 12.4619 6.62383 12.3126 6.71222 12.2164L7.07519 11.8224C7.13182 11.7608 7.1507 11.6739 7.12496 11.5946L6.90186 10.9222C6.87011 10.8268 6.77915 10.7619 6.67704 10.7619H6.23598C6.10555 10.7619 6 10.6581 6 10.5298V9.55284C6 9.42459 6.10555 9.32082 6.23598 9.32082H6.65644C6.74826 9.32082 6.83235 9.26851 6.87096 9.18583L7.14555 8.60367C7.18588 8.51846 7.16958 8.4189 7.10608 8.34972L6.70106 7.91268C6.61783 7.82324 6.61868 7.68488 6.70364 7.59713L7.46391 6.80574C7.55744 6.70871 7.71533 6.70871 7.808 6.80658L8.12292 7.139C8.18814 7.20818 8.28939 7.23096 8.37863 7.19806L9.03422 6.95423C9.12603 6.92048 9.18696 6.83358 9.18696 6.7374V6.23202C9.18696 6.10378 9.2925 6 9.42293 6H10.5771C10.7075 6 10.813 6.10378 10.813 6.23202Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M8.99999 7.8072C12.3137 7.8072 15 6.73107 15 5.4036C15 4.07613 12.3137 3 8.99999 3C5.68629 3 3 4.07613 3 5.4036C3 6.73107 5.68629 7.8072 8.99999 7.8072Z' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 9.08593C3 10.134 4.67489 11.0255 7.01069 11.3542' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 5.4043V12.5971C3 13.5914 4.50751 14.4448 6.65669 14.8104' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.0008 17.3286C16.2555 17.3286 17.2726 16.3286 17.2726 15.0949C17.2726 13.8613 16.2555 12.8612 15.0008 12.8612C13.7461 12.8612 12.729 13.8613 12.729 15.0949C12.729 16.3286 13.7461 17.3286 15.0008 17.3286Z' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.2196 9.34803V10.1061C16.2196 10.2504 16.311 10.3807 16.4487 10.4313L17.4321 10.7971C17.5659 10.8464 17.7178 10.8123 17.8156 10.7085L18.288 10.2099C18.427 10.0631 18.6638 10.0618 18.8041 10.2086L19.9445 11.3957C20.072 11.5286 20.0733 11.7349 19.9484 11.869L19.3409 12.5246C19.2443 12.6283 19.2212 12.7789 19.2817 12.9055L19.6936 13.7787C19.7515 13.9015 19.8776 13.9812 20.0153 13.9812H20.646C20.8417 13.9812 21 14.1369 21 14.3293V15.7948C21 15.9871 20.8417 16.1428 20.646 16.1428H19.9832C19.83 16.1428 19.6936 16.2402 19.6459 16.3833L19.3113 17.3919C19.2714 17.5109 19.2997 17.6412 19.3859 17.7336L19.9304 18.3246C20.063 18.4689 20.0501 18.6929 19.9008 18.8207L18.6458 19.9002C18.5017 20.0243 18.2828 20.0129 18.1528 19.8749L17.7152 19.4117C17.62 19.3105 17.472 19.2738 17.3394 19.3193L16.4255 19.6332C16.2826 19.6826 16.1874 19.8142 16.1874 19.9622V20.652C16.1874 20.8443 16.0291 21 15.8334 21H14.1653C13.9696 21 13.8113 20.8443 13.8113 20.652V19.9622C13.8113 19.8142 13.7161 19.6826 13.5732 19.6332L12.6593 19.3193C12.5268 19.2738 12.3787 19.3092 12.2835 19.4117L11.8459 19.8749C11.7159 20.0129 11.4971 20.0243 11.3529 19.9002L10.0979 18.8207C9.94862 18.6929 9.93575 18.4689 10.0683 18.3246L10.6128 17.7336C10.6977 17.6412 10.7261 17.5109 10.6874 17.3919L10.3528 16.3833C10.3052 16.2402 10.1687 16.1428 10.0156 16.1428H9.35396C9.15832 16.1428 9 15.9871 9 15.7948V14.3293C9 14.1369 9.15832 13.9812 9.35396 13.9812H9.98466C10.1224 13.9812 10.2485 13.9028 10.3064 13.7787L10.7183 12.9055C10.7788 12.7777 10.7544 12.6283 10.6591 12.5246L10.0516 11.869C9.92674 11.7349 9.92803 11.5273 10.0555 11.3957L11.1959 10.2086C11.3362 10.0631 11.573 10.0631 11.712 10.2099L12.1844 10.7085C12.2822 10.8123 12.4341 10.8464 12.568 10.7971L13.5513 10.4313C13.689 10.3807 13.7804 10.2504 13.7804 10.1061V9.34803C13.7804 9.15566 13.9388 9 14.1344 9H15.8656C16.0612 9 16.2196 9.15566 16.2196 9.34803Z' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M15 13.012C20.5228 13.012 25 11.2184 25 9.006C25 6.79355 20.5228 5 15 5C9.47715 5 5 6.79355 5 9.006C5 11.2184 9.47715 13.012 15 13.012Z' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 15.1432C5 16.89 7.79148 18.3758 11.6845 18.9237' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 9.00716V20.9951C5 22.6524 7.51252 24.0746 11.0945 24.6841' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25.0014 28.881C27.0926 28.881 28.7878 27.2143 28.7878 25.1582C28.7878 23.1021 27.0926 21.4353 25.0014 21.4353C22.9103 21.4353 21.2151 23.1021 21.2151 25.1582C21.2151 27.2143 22.9103 28.881 25.0014 28.881Z' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.0326 15.58V16.8435C27.0326 17.0839 27.1849 17.3012 27.4145 17.3856L29.0534 17.9951C29.2765 18.0774 29.5297 18.0205 29.6927 17.8475L30.48 17.0165C30.7117 16.7718 31.1064 16.7697 31.3402 17.0143L33.2409 18.9928C33.4533 19.2143 33.4554 19.5581 33.2473 19.7817L32.2348 20.8743C32.0739 21.0472 32.0353 21.2982 32.1361 21.5092L32.8226 22.9646C32.9191 23.1692 33.1294 23.302 33.3589 23.302H34.4101C34.7361 23.302 35 23.5615 35 23.8821V26.3246C35 26.6452 34.7361 26.9047 34.4101 26.9047H33.3053C33.05 26.9047 32.8226 27.0671 32.7432 27.3054L32.1855 28.9865C32.119 29.1848 32.1661 29.402 32.3099 29.556L33.2173 30.541C33.4383 30.7815 33.4168 31.1548 33.168 31.3679L31.0764 33.1671C30.8361 33.3738 30.4714 33.3548 30.2547 33.1249L29.5254 32.3529C29.3666 32.1841 29.1199 32.123 28.899 32.1989L27.3758 32.722C27.1377 32.8043 26.979 33.0236 26.979 33.2704V34.42C26.979 34.7406 26.7151 35 26.389 35H23.6088C23.2827 35 23.0189 34.7406 23.0189 34.42V33.2704C23.0189 33.0236 22.8601 32.8043 22.622 32.722L21.0989 32.1989C20.8779 32.123 20.6312 32.182 20.4725 32.3529L19.7431 33.1249C19.5264 33.3548 19.1618 33.3738 18.9215 33.1671L16.8299 31.3679C16.581 31.1548 16.5596 30.7815 16.7805 30.541L17.688 29.556C17.8296 29.402 17.8768 29.1848 17.8124 28.9865L17.2546 27.3054C17.1753 27.0671 16.9479 26.9047 16.6926 26.9047H15.5899C15.2639 26.9047 15 26.6452 15 26.3246V23.8821C15 23.5615 15.2639 23.302 15.5899 23.302H16.6411C16.8706 23.302 17.0809 23.1713 17.1774 22.9646L17.8639 21.5092C17.9647 21.2961 17.924 21.0472 17.7652 20.8743L16.7527 19.7817C16.5446 19.5581 16.5467 19.2122 16.7591 18.9928L18.6598 17.0143C18.8936 16.7718 19.2883 16.7718 19.52 17.0165L20.3073 17.8475C20.4703 18.0205 20.7235 18.0774 20.9466 17.9951L22.5855 17.3856C22.8151 17.3012 22.9674 17.0839 22.9674 16.8435V15.58C22.9674 15.2594 23.2313 15 23.5573 15H26.4427C26.7687 15 27.0326 15.2594 27.0326 15.58Z' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ConfigureDatabaseIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

ConfigureDatabaseIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default ConfigureDatabaseIcon
