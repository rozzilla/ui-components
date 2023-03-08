import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const SocialTwitterIcon = ({ color, size }) => {
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
          <path d='M14.6666 3.92407C14.1674 4.14221 13.6376 4.28522 13.0952 4.34833C13.6657 4.01139 14.0923 3.48149 14.2953 2.85751C13.7588 3.17265 13.1713 3.39479 12.5585 3.51426C12.1458 3.08286 11.6004 2.79736 11.0065 2.70189C10.4126 2.60641 9.80328 2.70627 9.27276 2.98603C8.74223 3.2658 8.32001 3.70989 8.07134 4.24969C7.82267 4.78949 7.76139 5.39494 7.89697 5.97247C6.80927 5.91774 5.7454 5.63833 4.7744 5.15239C3.8034 4.66644 2.94697 3.98481 2.26069 3.15173C1.91173 3.74501 1.80505 4.44686 1.9623 5.1148C2.11956 5.78274 2.52897 6.36669 3.1074 6.74809C2.67233 6.7355 2.24666 6.62042 1.86601 6.41249C1.86601 6.42366 1.86601 6.43548 1.86601 6.44665C1.86649 7.0696 2.0859 7.67318 2.48697 8.15482C2.88804 8.63646 3.44603 8.96646 4.06612 9.08875C3.66325 9.19645 3.24078 9.2124 2.83072 9.13538C3.00541 9.67082 3.34567 10.1391 3.80389 10.4746C4.26211 10.8101 4.81535 10.996 5.38618 11.0065C4.41654 11.7564 3.2188 12.1629 1.98601 12.1604C1.76788 12.1603 1.54993 12.1476 1.33331 12.1223C2.58405 12.9144 4.03994 13.3348 5.52686 13.3333C10.5584 13.3333 13.3099 9.22732 13.3099 5.66577C13.3099 5.54887 13.3099 5.43262 13.3026 5.31704C13.8376 4.93621 14.2996 4.46452 14.6666 3.92407V3.92407Z' fill='none' className={filledClassName} />
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
          <path d='M22 5.88612C21.2511 6.21333 20.4565 6.42785 19.6429 6.52251C20.4986 6.0171 21.1384 5.22225 21.443 4.28628C20.6382 4.759 19.757 5.0922 18.8378 5.2714C18.2188 4.6243 17.4006 4.19606 16.5098 4.05284C15.6189 3.90963 14.705 4.05942 13.9092 4.47907C13.1134 4.89871 12.48 5.56486 12.107 6.37455C11.734 7.18425 11.6421 8.09242 11.8455 8.95872C10.2139 8.87662 8.61813 8.45751 7.16163 7.72859C5.70513 6.99967 4.42049 5.97723 3.39107 4.72762C2.86763 5.61752 2.7076 6.67031 2.94349 7.67222C3.17937 8.67413 3.79348 9.55006 4.66113 10.1222C4.00853 10.1033 3.37001 9.93065 2.79904 9.61876C2.79904 9.6355 2.79904 9.65324 2.79904 9.66998C2.79976 10.6044 3.12888 11.5098 3.73049 12.2322C4.33209 12.9547 5.16907 13.4497 6.09921 13.6331C5.4949 13.7947 4.86119 13.8186 4.24611 13.7031C4.50814 14.5062 5.01854 15.2086 5.70586 15.7118C6.39319 16.2151 7.22305 16.4941 8.0793 16.5097C6.62485 17.6346 4.82824 18.2443 2.97905 18.2406C2.65184 18.2405 2.32493 18.2214 2 18.1834C3.8761 19.3716 6.05994 20.0023 8.29032 20C15.8377 20 19.9649 13.841 19.9649 8.49867C19.9649 8.32332 19.9649 8.14895 19.9539 7.97557C20.7565 7.40433 21.4494 6.69679 22 5.88612Z' fill='none' className={filledClassName} />
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
          <path d='M36.6667 9.81019C35.4185 10.3555 34.0942 10.7131 32.7382 10.8708C34.1644 10.0285 35.2308 8.70374 35.7383 7.14379C34.397 7.93165 32.9284 8.487 31.3964 8.78566C30.3647 7.70716 29.001 6.99342 27.5163 6.75473C26.0315 6.51604 24.5083 6.76569 23.182 7.4651C21.8557 8.16451 20.8001 9.27475 20.1784 10.6242C19.5568 11.9737 19.4036 13.4874 19.7425 14.9312C17.0233 14.7944 14.3636 14.0958 11.9361 12.881C9.5086 11.6661 7.36753 9.96204 5.65182 7.87935C4.77942 9.36253 4.51271 11.1172 4.90585 12.787C5.29899 14.4569 6.32251 15.9167 7.7686 16.8702C6.68092 16.8388 5.61673 16.5511 4.66511 16.0313C4.66511 16.0592 4.66511 16.0887 4.66511 16.1166C4.66631 17.674 5.21485 19.183 6.21752 20.3871C7.2202 21.5912 8.61516 22.4162 10.1654 22.7219C9.15821 22.9911 8.10203 23.031 7.07689 22.8385C7.51361 24.1771 8.36427 25.3476 9.50981 26.1864C10.6554 27.0252 12.0385 27.4901 13.4655 27.5162C11.0415 29.391 8.0471 30.4072 4.96512 30.4009C4.41978 30.4008 3.87492 30.369 3.33337 30.3057C6.46021 32.286 10.0999 33.3371 13.8172 33.3333C26.3962 33.3333 33.2749 23.0683 33.2749 14.1644C33.2749 13.8722 33.2749 13.5816 33.2565 13.2926C34.5942 12.3405 35.749 11.1613 36.6667 9.81019V9.81019Z' fill='none' className={filledClassName} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SocialTwitterIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

SocialTwitterIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default SocialTwitterIcon
