import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PlatformaticServiceIcon = ({ color, size, disabled }) => {
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
          className={className}
        >
          <path d='M10.813 2.22453V2.71361C10.813 2.80669 10.874 2.89079 10.9658 2.92345L11.6214 3.15941C11.7106 3.19126 11.8119 3.16921 11.8771 3.10226L12.192 2.78056C12.2847 2.68585 12.4426 2.68503 12.5361 2.77975L13.2964 3.54561C13.3813 3.63134 13.3822 3.76443 13.2989 3.85098L12.8939 4.27392C12.8296 4.34087 12.8141 4.43803 12.8544 4.51968L13.129 5.08306C13.1676 5.16226 13.2517 5.2137 13.3436 5.2137H13.764C13.8945 5.2137 14 5.31412 14 5.43823V6.38372C14 6.50783 13.8945 6.60826 13.764 6.60826H13.3221C13.22 6.60826 13.129 6.67113 13.0973 6.76339L12.8742 7.41413C12.8476 7.49088 12.8665 7.57498 12.924 7.63458L13.2869 8.01588C13.3753 8.10896 13.3667 8.25348 13.2672 8.33594L12.4305 9.03241C12.3344 9.11242 12.1886 9.10508 12.1019 9.01608L11.8101 8.71724C11.7466 8.65193 11.648 8.62825 11.5596 8.65764L10.9503 8.86013C10.8551 8.89197 10.7916 8.97689 10.7916 9.07242V9.5174C10.7916 9.64151 10.686 9.74194 10.5556 9.74194H9.44353C9.3131 9.74194 9.20755 9.64151 9.20755 9.5174V9.07242C9.20755 8.97689 9.14405 8.89197 9.0488 8.86013L8.43956 8.65764C8.35117 8.62825 8.25249 8.65111 8.18899 8.71724L7.89724 9.01608C7.81058 9.10508 7.6647 9.11242 7.56859 9.03241L6.73195 8.33594C6.63241 8.25348 6.62383 8.10896 6.71222 8.01588L7.07519 7.63458C7.13182 7.57498 7.1507 7.49088 7.12496 7.41413L6.90186 6.76339C6.87011 6.67113 6.77915 6.60826 6.67704 6.60826H6.23598C6.10555 6.60826 6 6.50783 6 6.38372V5.43823C6 5.31412 6.10555 5.2137 6.23598 5.2137H6.65644C6.74826 5.2137 6.83235 5.16307 6.87096 5.08306L7.14555 4.51968C7.18588 4.43722 7.16958 4.34087 7.10608 4.27392L6.70106 3.85098C6.61783 3.76443 6.61868 3.63053 6.70364 3.54561L7.46391 2.77975C7.55744 2.68585 7.71533 2.68585 7.808 2.78056L8.12292 3.10226C8.18814 3.16921 8.28939 3.19126 8.37863 3.15941L9.03422 2.92345C9.12603 2.89079 9.18696 2.80669 9.18696 2.71361V2.22453C9.18696 2.10043 9.2925 2 9.42293 2H10.5771C10.7075 2 10.813 2.10043 10.813 2.22453Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.5 7H8.5L10 4L11.5 7Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 5.09668H2V11.2902H11.6V11.1289' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='5.2002' y='11.2903' width='3.2' height='1.54839' stroke='none' />
          <path d='M3.6001 12.8386H10.0001V13.9999H3.6001V12.8386Z' stroke='none' strokeLinejoin='round' />

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
          <path d='M16.2196 3.3368V4.07042C16.2196 4.21003 16.311 4.33618 16.4487 4.38517L17.4321 4.73912C17.5659 4.78688 17.7178 4.75382 17.8156 4.65339L18.288 4.17084C18.427 4.02877 18.6638 4.02755 18.8041 4.16962L19.9445 5.31842C20.072 5.44701 20.0733 5.64664 19.9484 5.77647L19.3409 6.41088C19.2443 6.51131 19.2212 6.65705 19.2817 6.77952L19.6936 7.62459C19.7515 7.74338 19.8776 7.82054 20.0153 7.82054H20.646C20.8417 7.82054 21 7.97118 21 8.15734V9.57558C21 9.76174 20.8417 9.91238 20.646 9.91238H19.9832C19.83 9.91238 19.6936 10.0067 19.6459 10.1451L19.3113 11.1212C19.2714 11.2363 19.2997 11.3625 19.3859 11.4519L19.9304 12.0238C20.063 12.1634 20.0501 12.3802 19.9008 12.5039L18.6458 13.5486C18.5017 13.6686 18.2828 13.6576 18.1528 13.5241L17.7152 13.0759C17.62 12.9779 17.472 12.9424 17.3394 12.9865L16.4255 13.2902C16.2826 13.338 16.1874 13.4653 16.1874 13.6086V14.2761C16.1874 14.4623 16.0291 14.6129 15.8334 14.6129H14.1653C13.9696 14.6129 13.8113 14.4623 13.8113 14.2761V13.6086C13.8113 13.4653 13.7161 13.338 13.5732 13.2902L12.6593 12.9865C12.5268 12.9424 12.3787 12.9767 12.2835 13.0759L11.8459 13.5241C11.7159 13.6576 11.4971 13.6686 11.3529 13.5486L10.0979 12.5039C9.94862 12.3802 9.93575 12.1634 10.0683 12.0238L10.6128 11.4519C10.6977 11.3625 10.7261 11.2363 10.6874 11.1212L10.3528 10.1451C10.3052 10.0067 10.1687 9.91238 10.0156 9.91238H9.35396C9.15832 9.91238 9 9.76174 9 9.57558V8.15734C9 7.97118 9.15832 7.82054 9.35396 7.82054H9.98466C10.1224 7.82054 10.2485 7.74461 10.3064 7.62459L10.7183 6.77952C10.7788 6.65582 10.7544 6.51131 10.6591 6.41088L10.0516 5.77647C9.92674 5.64664 9.92803 5.44579 10.0555 5.31842L11.1959 4.16962C11.3362 4.02877 11.573 4.02877 11.712 4.17084L12.1844 4.65339C12.2822 4.75382 12.4341 4.78688 12.568 4.73912L13.5513 4.38517C13.689 4.33618 13.7804 4.21003 13.7804 4.07042V3.3368C13.7804 3.15064 13.9388 3 14.1344 3H15.8656C16.0612 3 16.2196 3.15064 16.2196 3.3368Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.25 10.5H12.75L15 6L17.25 10.5Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 7.64502H3V16.9353H17.4V16.6934' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='7.7998' y='16.9353' width='4.8' height='2.32258' stroke='none' strokeWidth={1.5} />
          <path d='M5.3999 19.2578H14.9999V20.9997H5.3999V19.2578Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />

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
          <path d='M27.0326 5.56134V6.78403C27.0326 7.01672 27.1849 7.22697 27.4145 7.30862L29.0534 7.89853C29.2765 7.97814 29.5297 7.92303 29.6927 7.75565L30.48 6.95141C30.7117 6.71462 31.1064 6.71258 31.3402 6.94936L33.2409 8.86403C33.4533 9.07836 33.4554 9.41107 33.2473 9.62744L32.2348 10.6848C32.0739 10.8522 32.0353 11.0951 32.1361 11.2992L32.8226 12.7076C32.9191 12.9056 33.1294 13.0342 33.3589 13.0342H34.4101C34.7361 13.0342 35 13.2853 35 13.5956V15.9593C35 16.2696 34.7361 16.5206 34.4101 16.5206H33.3053C33.05 16.5206 32.8226 16.6778 32.7432 16.9085L32.1855 18.5353C32.119 18.7272 32.1661 18.9374 32.3099 19.0865L33.2173 20.0397C33.4383 20.2724 33.4168 20.6337 33.168 20.8399L31.0764 22.581C30.8361 22.7811 30.4714 22.7627 30.2547 22.5402L29.5254 21.7931C29.3666 21.6298 29.1199 21.5706 28.899 21.6441L27.3758 22.1503C27.1377 22.2299 26.979 22.4422 26.979 22.681V23.7935C26.979 24.1038 26.7151 24.3548 26.389 24.3548H23.6088C23.2827 24.3548 23.0189 24.1038 23.0189 23.7935V22.681C23.0189 22.4422 22.8601 22.2299 22.622 22.1503L21.0989 21.6441C20.8779 21.5706 20.6312 21.6278 20.4725 21.7931L19.7431 22.5402C19.5264 22.7627 19.1618 22.7811 18.9215 22.581L16.8299 20.8399C16.581 20.6337 16.5596 20.2724 16.7805 20.0397L17.688 19.0865C17.8296 18.9374 17.8768 18.7272 17.8124 18.5353L17.2546 16.9085C17.1753 16.6778 16.9479 16.5206 16.6926 16.5206H15.5899C15.2639 16.5206 15 16.2696 15 15.9593V13.5956C15 13.2853 15.2639 13.0342 15.5899 13.0342H16.6411C16.8706 13.0342 17.0809 12.9077 17.1774 12.7076L17.8639 11.2992C17.9647 11.093 17.924 10.8522 17.7652 10.6848L16.7527 9.62744C16.5446 9.41107 16.5467 9.07631 16.7591 8.86403L18.6598 6.94936C18.8936 6.71462 19.2883 6.71462 19.52 6.95141L20.3073 7.75565C20.4703 7.92303 20.7235 7.97814 20.9466 7.89853L22.5855 7.30862C22.8151 7.22697 22.9674 7.01672 22.9674 6.78403V5.56134C22.9674 5.25107 23.2313 5 23.5573 5H26.4427C26.7687 5 27.0326 5.25107 27.0326 5.56134Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.75 17.5H21.25L25 10L28.75 17.5Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 12.7417H5V28.2256H29V27.8223' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='13' y='28.2256' width='8' height='3.87097' stroke='none' strokeWidth={2} />
          <path d='M9 32.0964H25V34.9997H9V32.0964Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PlatformaticServiceIcon.propTypes = {
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
PlatformaticServiceIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default PlatformaticServiceIcon
