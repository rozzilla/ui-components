import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const SocialGitHubIcon = ({ color, size }) => {
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
          <path d='M9.20977 11.1833C9.58066 11.1352 9.91607 11.0753 10.2442 10.9731C11.3996 10.6138 12.0277 9.79838 12.1937 8.57913C12.277 7.96738 12.2884 7.36152 12.0559 6.77597C11.953 6.51725 11.8152 6.27884 11.634 6.07088C11.5767 6.00506 11.5713 5.95069 11.596 5.86882C11.7597 5.32715 11.7078 4.79432 11.5298 4.26576C11.4981 4.17209 11.444 4.15605 11.3632 4.15768C11.0455 4.16391 10.7541 4.27132 10.4694 4.4033C10.2192 4.51923 9.981 4.65907 9.75359 4.81758C9.69151 4.86081 9.63862 4.86834 9.56482 4.84902C8.52215 4.57884 7.47758 4.57654 6.43522 4.84902C6.34527 4.87259 6.28731 4.84738 6.2189 4.80251C5.78625 4.51792 5.34093 4.26248 4.82529 4.17471C4.81484 4.17308 4.80471 4.17013 4.79425 4.16816C4.52503 4.12559 4.49368 4.14393 4.41608 4.41444C4.27514 4.906 4.24853 5.39985 4.40341 5.89437C4.42051 5.94906 4.42716 5.98999 4.38377 6.04043C3.78737 6.73438 3.67303 7.55998 3.77819 8.44322C3.81746 8.77366 3.88588 9.09755 4.00782 9.40768C4.36097 10.308 5.04542 10.7897 5.92244 11.0294C6.19229 11.1031 6.46785 11.1463 6.76969 11.1889C6.53753 11.4443 6.41527 11.7319 6.36744 12.0538C6.35794 12.1177 6.30885 12.1239 6.26736 12.1419C5.51671 12.4664 4.85823 12.2519 4.42115 11.5423C4.20672 11.1938 3.92515 10.9371 3.52227 10.849C3.41205 10.8247 3.30278 10.8244 3.19446 10.8624C3.08043 10.9023 3.07157 10.9751 3.14346 11.0595C3.19541 11.1201 3.25464 11.1788 3.32147 11.22C3.67715 11.4404 3.90203 11.7722 4.05343 12.1573C4.29572 12.7736 4.76385 13.0507 5.37133 13.1208C5.65005 13.1529 5.93099 13.1375 6.20528 13.0733C6.31043 13.0487 6.34052 13.0671 6.33926 13.1823C6.33482 13.5422 6.34179 13.9025 6.34369 14.2624C6.34527 14.5869 6.1451 14.7373 5.84168 14.6331C5.07899 14.3708 4.38409 13.9772 3.76584 13.4473C2.38807 12.268 1.56837 10.7589 1.37358 8.91972C1.03152 5.69034 2.90053 2.71869 5.88918 1.68972C9.55025 0.429205 13.4793 2.62667 14.4576 6.48188C15.3242 9.89564 13.4197 13.5161 10.1717 14.6298C9.84893 14.7405 9.6516 14.5981 9.65192 14.2516C9.65255 13.6461 9.65952 13.0405 9.65604 12.435C9.65319 11.9765 9.55564 11.5485 9.21008 11.1833H9.20977Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M6.17644 12.3233C6.23883 12.3325 6.30693 12.3459 6.29711 12.4232C6.28698 12.5044 6.2154 12.531 6.1435 12.5333C6.08332 12.5352 6.01712 12.5179 6.01934 12.4422C6.02219 12.343 6.10549 12.3348 6.17644 12.3233V12.3233Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M4.66993 12.2503C4.5936 12.2369 4.53596 12.191 4.52487 12.0983C4.5179 12.0397 4.54514 12.0047 4.60405 12.0076C4.70161 12.0125 4.75672 12.0738 4.76875 12.1678C4.77604 12.2244 4.73518 12.2529 4.66993 12.2506V12.2503Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M5.65143 12.3918C5.71668 12.4 5.79206 12.4105 5.78857 12.493C5.78509 12.5798 5.70781 12.6001 5.63718 12.5965C5.5732 12.5932 5.50383 12.5712 5.51017 12.4864C5.5165 12.4023 5.5903 12.4003 5.65143 12.3918V12.3918Z' fill='none' className={filledClassName} />
          <path d='M5.0918 12.303C5.16654 12.308 5.23876 12.3387 5.24541 12.4258C5.25143 12.5025 5.18238 12.5146 5.1222 12.51C5.04492 12.5038 4.97302 12.4769 4.97302 12.3816C4.97302 12.3112 5.03225 12.304 5.0918 12.303Z' fill='none' className={filledClassName} />
          <path d='M4.41933 11.764C4.41965 11.8134 4.40603 11.8557 4.3525 11.855C4.26382 11.8537 4.22327 11.7934 4.21251 11.7103C4.20649 11.6628 4.22232 11.6192 4.2768 11.6199C4.36644 11.6209 4.40096 11.686 4.41933 11.7643V11.764Z' fill='none' className={filledClassName} />
          <path d='M4.14625 11.387C4.15037 11.4398 4.12661 11.4689 4.08449 11.4686C4.01291 11.4683 3.96698 11.4263 3.95558 11.353C3.94766 11.3035 3.96667 11.2609 4.02051 11.2668C4.08924 11.2747 4.12978 11.3242 4.14625 11.387V11.387Z' fill='none' className={filledClassName} />
          <path d='M3.86275 11.1169C3.8599 11.168 3.82506 11.1847 3.78737 11.1811C3.73954 11.1761 3.6914 11.1562 3.67936 11.1012C3.66923 11.054 3.70154 11.0314 3.74398 11.0311C3.80226 11.0307 3.84216 11.0612 3.86275 11.1169V11.1169Z' fill='none' className={filledClassName} />
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
          <path d='M13.8146 16.775C14.3709 16.7028 14.874 16.6129 15.3662 16.4596C17.0994 15.9207 18.0415 14.6976 18.2904 12.8687C18.4154 11.9511 18.4325 11.0423 18.0838 10.1639C17.9294 9.77586 17.7227 9.41824 17.451 9.10631C17.365 9.00757 17.3569 8.92603 17.3939 8.80322C17.6396 7.99071 17.5616 7.19147 17.2946 6.39862C17.2471 6.25812 17.1659 6.23405 17.0447 6.23651C16.5682 6.24584 16.1311 6.40697 15.704 6.60494C15.3287 6.77883 14.9714 6.98859 14.6303 7.22635C14.5372 7.29119 14.4579 7.30249 14.3472 7.27351C12.7832 6.86824 11.2163 6.8648 9.65278 7.27351C9.51785 7.30888 9.43091 7.27105 9.32829 7.20375C8.67931 6.77687 8.01133 6.39371 7.23788 6.26205C7.2222 6.2596 7.207 6.25518 7.19132 6.25223C6.78749 6.18837 6.74046 6.21588 6.62406 6.62164C6.41264 7.35898 6.37273 8.09977 6.60505 8.84153C6.63071 8.92357 6.64069 8.98497 6.5756 9.06062C5.681 10.1016 5.50949 11.34 5.66722 12.6648C5.72613 13.1605 5.82875 13.6463 6.01166 14.1115C6.54139 15.4619 7.56807 16.1845 8.8836 16.5441C9.28838 16.6546 9.70171 16.7195 10.1545 16.7833C9.80623 17.1665 9.62285 17.5978 9.55111 18.0807C9.53685 18.1765 9.46321 18.1858 9.40098 18.2128C8.27501 18.6997 7.28729 18.3779 6.63166 17.3134C6.31002 16.7907 5.88766 16.4056 5.28335 16.2734C5.11801 16.2371 4.95411 16.2366 4.79162 16.2936C4.62059 16.3535 4.60729 16.4626 4.71513 16.5893C4.79305 16.6802 4.88189 16.7681 4.98214 16.83C5.51567 17.1606 5.85298 17.6582 6.08008 18.2359C6.44352 19.1604 7.14571 19.576 8.05694 19.6811C8.47502 19.7293 8.89643 19.7062 9.30786 19.6099C9.46559 19.5731 9.51072 19.6006 9.50882 19.7735C9.50217 20.3134 9.51262 20.8537 9.51547 21.3936C9.51785 21.8804 9.21759 22.1059 8.76245 21.9497C7.61843 21.5562 6.57607 20.9657 5.64869 20.1709C3.58204 18.402 2.3525 16.1383 2.06031 13.3796C1.54721 8.53549 4.35074 4.07802 8.83372 2.53456C14.3253 0.643792 20.2188 3.93998 21.6864 9.72281C22.9863 14.8435 20.1295 20.2741 15.2574 21.9448C14.7733 22.1108 14.4773 21.8971 14.4778 21.3774C14.4788 20.4691 14.4892 19.5608 14.484 18.6525C14.4797 17.9648 14.3334 17.3227 13.8151 16.775H13.8146Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M9.26454 18.485C9.35813 18.4987 9.46027 18.5189 9.44555 18.6348C9.43034 18.7566 9.32297 18.7964 9.21513 18.7999C9.12486 18.8028 9.02556 18.7768 9.02889 18.6633C9.03317 18.5145 9.15812 18.5022 9.26454 18.485Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M7.00484 18.3754C6.89034 18.3553 6.80387 18.2865 6.78725 18.1475C6.77679 18.0596 6.81765 18.007 6.90602 18.0114C7.05235 18.0188 7.13501 18.1107 7.15307 18.2516C7.16399 18.3366 7.10271 18.3794 7.00484 18.3759V18.3754Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M8.47715 18.5876C8.57501 18.5999 8.68809 18.6156 8.68286 18.7394C8.67764 18.8696 8.56171 18.9001 8.45577 18.8947C8.3598 18.8898 8.25575 18.8568 8.26525 18.7296C8.27476 18.6034 8.38545 18.6004 8.47715 18.5876Z' fill='none' className={filledClassName} />
          <path d='M7.63763 18.4545C7.74975 18.4619 7.85808 18.5081 7.86805 18.6387C7.87708 18.7537 7.77351 18.7719 7.68324 18.765C7.56732 18.7557 7.45947 18.7154 7.45947 18.5724C7.45947 18.4668 7.54832 18.456 7.63763 18.4545Z' fill='none' className={filledClassName} />
          <path d='M6.62893 17.646C6.62941 17.7201 6.60898 17.7835 6.52869 17.7825C6.39566 17.7806 6.33485 17.6902 6.3187 17.5654C6.30967 17.4942 6.33343 17.4288 6.41514 17.4298C6.54959 17.4313 6.60138 17.5291 6.62893 17.6465V17.646Z' fill='none' className={filledClassName} />
          <path d='M6.21925 17.0805C6.22543 17.1596 6.1898 17.2034 6.12661 17.2029C6.01924 17.2024 5.95035 17.1395 5.93325 17.0295C5.92137 16.9553 5.94988 16.8914 6.03064 16.9003C6.13374 16.9121 6.19455 16.9862 6.21925 17.0805Z' fill='none' className={filledClassName} />
          <path d='M5.794 16.6753C5.78973 16.7519 5.73747 16.777 5.68093 16.7716C5.60919 16.7642 5.53698 16.7342 5.51892 16.6517C5.50372 16.581 5.55218 16.5471 5.61584 16.5466C5.70326 16.5461 5.76312 16.5918 5.794 16.6753Z' fill='none' className={filledClassName} />

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
          <path d='M23.0244 27.9583C23.9516 27.838 24.7901 27.6881 25.6104 27.4327C28.499 26.5346 30.0692 24.4959 30.4841 21.4478C30.6924 19.9184 30.7209 18.4038 30.1397 16.9399C29.8823 16.2931 29.5379 15.6971 29.085 15.1772C28.9416 15.0126 28.9282 14.8767 28.9899 14.672C29.3993 13.3179 29.2695 11.9858 28.8245 10.6644C28.7453 10.4302 28.6099 10.3901 28.408 10.3942C27.6138 10.4097 26.8853 10.6783 26.1734 11.0082C25.5479 11.2981 24.9524 11.6477 24.3839 12.0439C24.2287 12.152 24.0965 12.1708 23.912 12.1225C21.3053 11.4471 18.6939 11.4413 16.088 12.1225C15.8631 12.1815 15.7182 12.1184 15.5472 12.0063C14.4656 11.2948 13.3523 10.6562 12.0632 10.4368C12.037 10.4327 12.0117 10.4253 11.9856 10.4204C11.3125 10.314 11.2341 10.3598 11.0401 11.0361C10.6878 12.265 10.6213 13.4996 11.0085 14.7359C11.0512 14.8726 11.0679 14.975 10.9594 15.101C9.46837 16.8359 9.18252 18.8999 9.44541 21.108C9.5436 21.9341 9.71463 22.7439 10.0195 23.5192C10.9024 25.7699 12.6135 26.9742 14.806 27.5735C15.4807 27.7577 16.1696 27.8658 16.9242 27.9722C16.3438 28.6108 16.0381 29.3297 15.9186 30.1345C15.8948 30.2942 15.7721 30.3097 15.6683 30.3547C13.7917 31.1661 12.1455 30.6298 11.0528 28.8556C10.5167 27.9845 9.81281 27.3426 8.80562 27.1224C8.53006 27.0618 8.25688 27.061 7.98608 27.156C7.70103 27.2559 7.67885 27.4376 7.8586 27.6488C7.98846 27.8003 8.13653 27.9469 8.3036 28.05C9.19282 28.601 9.75501 29.4304 10.1335 30.3932C10.7392 31.9341 11.9096 32.6267 13.4283 32.8019C14.1251 32.8821 14.8274 32.8437 15.5131 32.6832C15.776 32.6218 15.8512 32.6676 15.8481 32.9558C15.837 33.8556 15.8544 34.7562 15.8592 35.656C15.8631 36.4673 15.3627 36.8431 14.6041 36.5828C12.6974 35.927 10.9602 34.9429 9.41453 33.6182C5.9701 30.6699 3.92087 26.8973 3.4339 22.2993C2.57873 14.2258 7.25127 6.79671 14.7229 4.22427C23.8756 1.073 33.6981 6.56665 36.1441 16.2047C38.3105 24.7391 33.5493 33.7901 25.4291 36.5746C24.6223 36.8513 24.129 36.4952 24.1297 35.629C24.1313 34.1151 24.1487 32.6013 24.14 31.0875C24.1329 29.9413 23.889 28.8712 23.0252 27.9583H23.0244Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M15.441 30.8083C15.597 30.8312 15.7672 30.8648 15.7427 31.058C15.7173 31.2611 15.5384 31.3274 15.3586 31.3331C15.2082 31.338 15.0427 31.2946 15.0482 31.1055C15.0554 30.8574 15.2636 30.837 15.441 30.8083V30.8083Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M11.6748 30.6257C11.4839 30.5922 11.3398 30.4775 11.3121 30.2458C11.2947 30.0993 11.3628 30.0117 11.5101 30.019C11.754 30.0313 11.8917 30.1844 11.9218 30.4194C11.94 30.561 11.8379 30.6323 11.6748 30.6265V30.6257Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M14.1286 30.9794C14.2917 30.9999 14.4801 31.0261 14.4714 31.2324C14.4627 31.4494 14.2695 31.5001 14.0929 31.4911C13.933 31.4829 13.7596 31.4281 13.7754 31.216C13.7913 31.0056 13.9758 31.0007 14.1286 30.9794V30.9794Z' fill='none' className={filledClassName} />
          <path d='M12.7294 30.7575C12.9163 30.7698 13.0968 30.8468 13.1135 31.0646C13.1285 31.2561 12.9559 31.2864 12.8054 31.275C12.6122 31.2594 12.4325 31.1923 12.4325 30.954C12.4325 30.778 12.5806 30.76 12.7294 30.7575Z' fill='none' className={filledClassName} />
          <path d='M11.0483 29.4099C11.0491 29.5336 11.015 29.6392 10.8812 29.6375C10.6595 29.6343 10.5581 29.4836 10.5312 29.2757C10.5162 29.157 10.5557 29.0481 10.6919 29.0497C10.916 29.0522 11.0023 29.2151 11.0483 29.4108V29.4099Z' fill='none' className={filledClassName} />
          <path d='M10.3655 28.4676C10.3758 28.5994 10.3164 28.6723 10.2111 28.6714C10.0321 28.6706 9.91733 28.5658 9.88883 28.3824C9.86903 28.2588 9.91654 28.1524 10.0512 28.1671C10.223 28.1868 10.3243 28.3104 10.3655 28.4676V28.4676Z' fill='none' className={filledClassName} />
          <path d='M9.65675 27.7921C9.64963 27.9198 9.56253 27.9616 9.4683 27.9526C9.34874 27.9403 9.22838 27.8904 9.19829 27.7528C9.17295 27.6349 9.25372 27.5784 9.35982 27.5776C9.50552 27.5768 9.60529 27.6529 9.65675 27.7921V27.7921Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SocialGitHubIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

SocialGitHubIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default SocialGitHubIcon
