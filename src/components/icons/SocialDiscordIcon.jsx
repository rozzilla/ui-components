import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const SocialDiscordIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  const filledClassName = styles[`filled-${color}`]
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
          <path d='M1.33389 10.7066V10.3464C1.41406 10.0202 1.41302 9.69447 1.33389 9.36827V9.00805C1.39389 8.98022 1.38199 8.92354 1.38665 8.87509C1.55318 6.98125 2.21106 5.2621 3.24442 3.67539C3.33286 3.53934 3.43992 3.44968 3.5899 3.38681C4.2095 3.12759 4.84307 2.91425 5.49888 2.76686C6.12365 2.62669 6.12675 2.62154 6.40811 3.19459C6.46759 3.31621 6.53482 3.35228 6.66671 3.3327C7.44561 3.21675 8.22657 3.21623 9.01012 3.28786C9.51853 3.33424 9.52939 3.32909 9.74816 2.86735C9.83505 2.68338 9.9416 2.64112 10.1299 2.67977C10.932 2.84571 11.7114 3.08276 12.4634 3.40639C12.5679 3.45174 12.6512 3.51255 12.7169 3.61201C13.577 4.90497 14.1924 6.29843 14.4707 7.83052C14.5415 8.22165 14.6015 8.61485 14.6667 9.00702V9.36724C14.6093 9.43578 14.616 9.50431 14.6667 9.57337V10.1913C14.6057 10.3113 14.5762 10.4314 14.6667 10.5515V10.8086C14.586 10.8993 14.5984 11.0312 14.4748 11.1173C13.5294 11.7738 12.5147 12.2887 11.4187 12.6447C11.2832 12.6886 11.1922 12.6721 11.1161 12.5458C10.9439 12.2593 10.7681 11.9743 10.5865 11.6934C10.509 11.5734 10.539 11.5218 10.6667 11.4724C10.9941 11.3451 11.3153 11.2034 11.6121 11.005C11.4782 10.8138 11.3396 10.7978 11.128 10.887C9.04891 11.7594 6.96203 11.7491 4.8829 10.887C4.66774 10.7978 4.5312 10.8184 4.39208 11.0008C4.67705 11.1982 4.99202 11.3353 5.3101 11.4605C5.45854 11.5187 5.49836 11.5723 5.4063 11.7135C5.23252 11.9789 5.06598 12.2495 4.9041 12.5221C4.81928 12.6654 4.72308 12.6886 4.56327 12.636C3.60956 12.3237 2.71481 11.8934 1.87643 11.3435C1.6318 11.1833 1.36285 11.0462 1.33337 10.705L1.33389 10.7066ZM6.9853 8.14744C6.98065 7.5713 6.65067 7.0771 6.15468 6.90292C5.52215 6.68132 4.8348 7.08071 4.64809 7.77795C4.44431 8.5391 4.88755 9.34198 5.58215 9.46979C6.33674 9.60841 6.99202 8.99053 6.9853 8.14744ZM11.4094 8.16445C11.4115 7.59346 11.0841 7.08225 10.5933 6.90962C10.1645 6.75914 9.77144 6.84468 9.44767 7.15543C9.03909 7.5476 8.93255 8.03716 9.0846 8.57259C9.21804 9.04309 9.51749 9.37342 10.0145 9.46876C10.7557 9.61099 11.4068 8.99465 11.4094 8.16394V8.16445Z' fill='none' className={filledClassName} />

        </svg>
      )
      break
    case 'medium':
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M2.00078 16.0599V15.5196C2.12102 15.0303 2.11947 14.5417 2.00078 14.0524V13.5121C2.09077 13.4703 2.07292 13.3853 2.07991 13.3127C2.32971 10.4719 3.31652 7.89317 4.86656 5.5131C4.99922 5.30903 5.15981 5.17453 5.38479 5.08022C6.3142 4.69141 7.26455 4.37138 8.24825 4.15031C9.18541 3.94005 9.19007 3.93232 9.6121 4.7919C9.70132 4.97432 9.80217 5.02843 10 4.99906C11.1683 4.82513 12.3398 4.82436 13.5151 4.93181C14.2777 5.00138 14.294 4.99365 14.6222 4.30104C14.7525 4.02508 14.9123 3.9617 15.1947 4.01967C16.398 4.26858 17.5671 4.62416 18.6951 5.1096C18.8518 5.17762 18.9767 5.26884 19.0753 5.41802C20.3654 7.35748 21.2886 9.44766 21.706 11.7458C21.8123 12.3325 21.9023 12.9223 22 13.5105V14.0509C21.9139 14.1537 21.924 14.2565 22 14.3601V15.2869C21.9085 15.467 21.8642 15.6471 22 15.8272V16.2129C21.879 16.349 21.8976 16.5469 21.7122 16.676C20.294 17.6608 18.7719 18.433 17.128 18.9671C16.9247 19.0328 16.7882 19.0081 16.6742 18.8187C16.4158 18.3889 16.1521 17.9615 15.8798 17.5402C15.7634 17.3601 15.8084 17.2828 16 17.2086C16.4911 17.0176 16.9728 16.8051 17.4182 16.5075C17.2172 16.2207 17.0093 16.1967 16.692 16.3304C13.5733 17.6391 10.443 17.6237 7.32428 16.3304C7.00155 16.1967 6.79674 16.2276 6.58805 16.5013C7.01552 16.7973 7.48797 17.0029 7.96509 17.1908C8.18774 17.2781 8.24748 17.3585 8.10939 17.5703C7.84872 17.9684 7.59891 18.3742 7.35609 18.7832C7.22886 18.9981 7.08456 19.0328 6.84484 18.954C5.41427 18.4856 4.07215 17.8401 2.81458 17.0153C2.44763 16.7749 2.04422 16.5693 2 16.0576L2.00078 16.0599ZM10.4779 12.2212C10.4709 11.357 9.97595 10.6157 9.23196 10.3544C8.28316 10.022 7.25213 10.6211 6.97207 11.6669C6.66641 12.8087 7.33126 14.013 8.37316 14.2047C9.50504 14.4126 10.488 13.4858 10.4779 12.2212ZM17.114 12.2467C17.1171 11.3902 16.6261 10.6234 15.8898 10.3644C15.2467 10.1387 14.6571 10.267 14.1714 10.7332C13.5586 11.3214 13.3988 12.0558 13.6268 12.8589C13.827 13.5647 14.2762 14.0601 15.0217 14.2031C16.1334 14.4165 17.1102 13.492 17.114 12.2459V12.2467Z' fill='none' className={filledClassName} />

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
          <path d='M3.33467 26.7665V25.8659C3.53508 25.0504 3.53249 24.2362 3.33467 23.4207V22.5201C3.48465 22.4506 3.45492 22.3089 3.46655 22.1877C3.8829 17.4531 5.52758 13.1553 8.11098 9.1885C8.33208 8.84838 8.59973 8.62421 8.9747 8.46703C10.5237 7.819 12.1076 7.28563 13.7471 6.91717C15.3091 6.56674 15.3168 6.55386 16.0202 7.98648C16.1689 8.29053 16.337 8.38071 16.6667 8.33176C18.614 8.04188 20.5664 8.04059 22.5253 8.21967C23.7963 8.33562 23.8234 8.32274 24.3704 7.16839C24.5876 6.70846 24.8539 6.60282 25.3246 6.69944C27.33 7.11428 29.2785 7.70692 31.1586 8.51599C31.4197 8.62936 31.6279 8.78138 31.7921 9.03003C33.9424 12.2625 35.481 15.7461 36.1767 19.5763C36.3538 20.5541 36.5038 21.5371 36.6667 22.5176V23.4181C36.5232 23.5895 36.54 23.7608 36.6667 23.9334V25.4781C36.5141 25.7783 36.4404 26.0785 36.6667 26.3787V27.0216C36.465 27.2483 36.496 27.5781 36.187 27.7933C33.8234 29.4346 31.2866 30.7216 28.5467 31.6119C28.208 31.7214 27.9804 31.6802 27.7903 31.3645C27.3597 30.6482 26.9201 29.9358 26.4663 29.2336C26.2723 28.9334 26.3473 28.8046 26.6667 28.6809C27.4852 28.3627 28.2881 28.0084 29.0303 27.5124C28.6954 27.0344 28.3489 26.9945 27.8201 27.2174C22.6222 29.3985 17.405 29.3728 12.2072 27.2174C11.6693 26.9945 11.3279 27.046 10.9801 27.5021C11.6926 27.9955 12.48 28.3382 13.2752 28.6513C13.6463 28.7969 13.7458 28.9309 13.5157 29.2839C13.0812 29.9474 12.6649 30.6237 12.2602 31.3053C12.0481 31.6634 11.8076 31.7214 11.4081 31.59C9.02383 30.8093 6.78695 29.7335 4.69102 28.3589C4.07943 27.9582 3.40707 27.6155 3.33337 26.7626L3.33467 26.7665ZM17.4632 20.3686C17.4516 18.9283 16.6266 17.6928 15.3866 17.2573C13.8053 16.7033 12.0869 17.7018 11.6202 19.4449C11.1107 21.3478 12.2188 23.355 13.9553 23.6745C15.8418 24.021 17.48 22.4763 17.4632 20.3686ZM28.5234 20.4111C28.5286 18.9837 27.7101 17.7056 26.4831 17.2741C25.4112 16.8979 24.4285 17.1117 23.6191 17.8886C22.5977 18.869 22.3313 20.0929 22.7114 21.4315C23.045 22.6077 23.7937 23.4336 25.0362 23.6719C26.8891 24.0275 28.517 22.4866 28.5234 20.4099V20.4111Z' fill='none' className={filledClassName} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SocialDiscordIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

SocialDiscordIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default SocialDiscordIcon
