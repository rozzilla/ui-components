import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, LARGE, MAIN_DARK_BLUE, MEDIUM, SIZES, SMALL } from '../constants'

const GitHubRepoIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M10.7258 11.91C10.9484 11.8811 11.1496 11.8452 11.3465 11.7838C12.0398 11.5683 12.4166 11.079 12.5162 10.3475C12.5662 9.98042 12.573 9.61691 12.4335 9.26558C12.3717 9.11035 12.2891 8.9673 12.1804 8.84252C12.146 8.80303 12.1428 8.77041 12.1576 8.72129C12.2558 8.39629 12.2247 8.07659 12.1179 7.75945C12.0989 7.70325 12.0664 7.69362 12.0179 7.6946C11.8273 7.69834 11.6525 7.76279 11.4816 7.84197C11.3315 7.91153 11.1886 7.99544 11.0521 8.09054C11.0149 8.11648 10.9831 8.121 10.9389 8.1094C10.3133 7.9473 9.68652 7.94592 9.06111 8.1094C9.00714 8.12355 8.97236 8.10842 8.93131 8.0815C8.67172 7.91075 8.40453 7.75748 8.09515 7.70482C8.08888 7.70384 8.0828 7.70207 8.07653 7.70089C7.915 7.67535 7.89618 7.68635 7.84962 7.84866C7.76506 8.14359 7.74909 8.43991 7.84202 8.73661C7.85228 8.76943 7.85627 8.79399 7.83024 8.82425C7.4724 9.24062 7.4038 9.73598 7.46689 10.2659C7.49045 10.4642 7.5315 10.6585 7.60467 10.8446C7.81656 11.3848 8.22723 11.6738 8.75344 11.8176C8.91535 11.8619 9.08068 11.8878 9.26179 11.9133C9.12249 12.0666 9.04914 12.2391 9.02044 12.4323C9.01474 12.4706 8.98529 12.4743 8.96039 12.4851C8.51 12.6799 8.11492 12.5512 7.85266 12.1254C7.72401 11.9163 7.55507 11.7622 7.31334 11.7094C7.24721 11.6948 7.18164 11.6946 7.11665 11.7174C7.04824 11.7414 7.04292 11.785 7.08605 11.8357C7.11722 11.8721 7.15276 11.9072 7.19285 11.932C7.40627 12.0642 7.54119 12.2633 7.63203 12.4944C7.77741 12.8642 8.05828 13.0304 8.42278 13.0725C8.59001 13.0917 8.75857 13.0825 8.92314 13.044C8.98624 13.0292 9.00429 13.0402 9.00353 13.1094C9.00087 13.3253 9.00505 13.5415 9.00619 13.7574C9.00714 13.9522 8.88704 14.0424 8.70498 13.9799C8.24737 13.8225 7.83043 13.5863 7.45948 13.2684C6.63282 12.5608 6.141 11.6553 6.02413 10.5518C5.81889 8.6142 6.9403 6.83121 8.73349 6.21382C10.9301 5.45752 13.2875 6.77599 13.8746 9.08912C14.3945 11.1374 13.2518 13.3096 11.303 13.9779C11.1093 14.0443 10.9909 13.9588 10.9911 13.7509C10.9915 13.3876 10.9957 13.0243 10.9936 12.661C10.9919 12.3859 10.9334 12.1291 10.726 11.91H10.7258Z' fill='none' className={filledClassName} />
          <path d='M8.90581 12.5939C8.94325 12.5994 8.98411 12.6075 8.97822 12.6539C8.97214 12.7026 8.92919 12.7185 8.88605 12.7199C8.84994 12.7211 8.81023 12.7106 8.81156 12.6653C8.81327 12.6057 8.86325 12.6008 8.90581 12.5939Z' fill='none' className={filledClassName} />
          <path d='M8.00198 12.5503C7.95618 12.5422 7.9216 12.5147 7.91495 12.4591C7.91077 12.4239 7.92711 12.4029 7.96246 12.4047C8.02099 12.4076 8.05405 12.4444 8.06128 12.5008C8.06565 12.5347 8.04113 12.5518 8.00198 12.5505V12.5503Z' fill='none' className={filledClassName} />
          <path d='M8.59086 12.6352C8.63001 12.6401 8.67523 12.6464 8.67314 12.6959C8.67105 12.7479 8.62468 12.7601 8.58231 12.758C8.54392 12.756 8.5023 12.7428 8.5061 12.6919C8.5099 12.6414 8.55418 12.6403 8.59086 12.6352Z' fill='none' className={filledClassName} />
          <path d='M8.2551 12.5817C8.29995 12.5847 8.34328 12.6031 8.34727 12.6554C8.35088 12.7014 8.30945 12.7087 8.27335 12.7059C8.22698 12.7022 8.18384 12.6861 8.18384 12.6289C8.18384 12.5866 8.21937 12.5823 8.2551 12.5817Z' fill='none' className={filledClassName} />
          <path d='M7.85162 12.2585C7.85181 12.2882 7.84364 12.3135 7.81152 12.3131C7.75831 12.3124 7.73399 12.2762 7.72753 12.2263C7.72392 12.1978 7.73342 12.1717 7.76611 12.1721C7.81989 12.1726 7.8406 12.2117 7.85162 12.2587V12.2585Z' fill='none' className={filledClassName} />
          <path d='M7.6877 12.0321C7.69017 12.0638 7.67592 12.0813 7.65064 12.0811C7.6077 12.0809 7.58014 12.0557 7.5733 12.0117C7.56855 11.982 7.57995 11.9565 7.61226 11.96C7.65349 11.9647 7.67782 11.9944 7.6877 12.0321Z' fill='none' className={filledClassName} />
          <path d='M7.51765 11.8701C7.51594 11.9008 7.49504 11.9108 7.47242 11.9086C7.44373 11.9057 7.41484 11.8937 7.40762 11.8607C7.40154 11.8324 7.42092 11.8188 7.44639 11.8186C7.48135 11.8184 7.5053 11.8367 7.51765 11.8701Z' fill='none' className={filledClassName} />
          <path d='M5.99999 5.2048C8.20913 5.2048 9.99999 4.48738 9.99999 3.6024C9.99999 2.71742 8.20913 2 5.99999 2C3.79086 2 2 2.71742 2 3.6024C2 4.48738 3.79086 5.2048 5.99999 5.2048Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 6.05729C2 6.75601 3.11659 7.35031 4.6738 7.5695' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 3.60286V8.39805C2 9.06094 3.00501 9.62985 4.4378 9.87362' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M16.0888 17.865C16.4226 17.8217 16.7244 17.7677 17.0197 17.6758C18.0596 17.3524 18.6249 16.6185 18.7743 15.5212C18.8492 14.9706 18.8595 14.4254 18.6503 13.8984C18.5576 13.6655 18.4336 13.4509 18.2706 13.2638C18.219 13.2045 18.2141 13.1556 18.2364 13.0819C18.3837 12.5944 18.337 12.1149 18.1768 11.6392C18.1483 11.5549 18.0995 11.5404 18.0268 11.5419C17.7409 11.5475 17.4787 11.6442 17.2224 11.763C16.9972 11.8673 16.7829 11.9932 16.5782 12.1358C16.5223 12.1747 16.4747 12.1815 16.4083 12.1641C15.4699 11.9209 14.5298 11.9189 13.5917 12.1641C13.5107 12.1853 13.4585 12.1626 13.397 12.1223C13.0076 11.8661 12.6068 11.6362 12.1427 11.5572C12.1333 11.5558 12.1242 11.5531 12.1148 11.5513C11.8725 11.513 11.8443 11.5295 11.7744 11.773C11.6476 12.2154 11.6236 12.6599 11.763 13.1049C11.7784 13.1541 11.7844 13.191 11.7454 13.2364C11.2086 13.8609 11.1057 14.604 11.2003 15.3989C11.2357 15.6963 11.2973 15.9878 11.407 16.2669C11.7248 17.0771 12.3408 17.5107 13.1302 17.7265C13.373 17.7928 13.621 17.8317 13.8927 17.87C13.6837 18.0999 13.5737 18.3587 13.5307 18.6484C13.5221 18.7059 13.4779 18.7115 13.4406 18.7277C12.765 19.0198 12.1724 18.8267 11.779 18.188C11.586 17.8744 11.3326 17.6433 10.97 17.5641C10.8708 17.5423 10.7725 17.542 10.675 17.5761C10.5724 17.6121 10.5644 17.6775 10.6291 17.7536C10.6758 17.8081 10.7291 17.8609 10.7893 17.898C11.1094 18.0964 11.3118 18.3949 11.448 18.7416C11.6661 19.2963 12.0874 19.5456 12.6342 19.6087C12.885 19.6376 13.1379 19.6237 13.3847 19.5659C13.4794 19.5438 13.5064 19.5603 13.5053 19.6641C13.5013 19.988 13.5076 20.3122 13.5093 20.6362C13.5107 20.9282 13.3306 21.0635 13.0575 20.9698C12.3711 20.7337 11.7456 20.3794 11.1892 19.9025C9.94922 18.8412 9.2115 17.483 9.03619 15.8277C8.72833 12.9213 10.4104 10.2468 13.1002 9.32073C16.3952 8.18628 19.9313 10.164 20.8118 13.6337C21.5918 16.7061 19.8777 19.9644 16.9545 20.9669C16.664 21.0665 16.4864 20.9383 16.4867 20.6264C16.4873 20.0814 16.4935 19.5365 16.4904 18.9915C16.4878 18.5789 16.4 18.1936 16.089 17.865H16.0888Z' fill='none' className={filledClassName} />
          <path d='M13.359 18.8909C13.4151 18.8991 13.4764 18.9112 13.4676 18.9808C13.4585 19.0539 13.394 19.0778 13.3293 19.0798C13.2752 19.0816 13.2156 19.066 13.2176 18.9979C13.2201 18.9086 13.2951 18.9012 13.359 18.8909Z' fill='none' className={filledClassName} />
          <path d='M12.0029 18.8254C11.9342 18.8133 11.8823 18.7721 11.8723 18.6886C11.866 18.6359 11.8905 18.6043 11.9436 18.607C12.0314 18.6114 12.081 18.6665 12.0918 18.7511C12.0983 18.8021 12.0616 18.8278 12.0029 18.8257V18.8254Z' fill='none' className={filledClassName} />
          <path d='M12.8863 18.9527C12.945 18.9601 13.0129 18.9695 13.0097 19.0438C13.0066 19.1219 12.937 19.1402 12.8735 19.137C12.8159 19.134 12.7535 19.1143 12.7592 19.0379C12.7649 18.9622 12.8313 18.9604 12.8863 18.9527Z' fill='none' className={filledClassName} />
          <path d='M12.3825 18.8726C12.4498 18.877 12.5148 18.9047 12.5208 18.9831C12.5262 19.0521 12.4641 19.063 12.4099 19.0589C12.3403 19.0533 12.2756 19.0291 12.2756 18.9433C12.2756 18.8799 12.3289 18.8735 12.3825 18.8726Z' fill='none' className={filledClassName} />
          <path d='M11.7773 18.3878C11.7776 18.4323 11.7653 18.4703 11.7172 18.4697C11.6373 18.4685 11.6009 18.4143 11.5912 18.3394C11.5858 18.2967 11.6 18.2575 11.649 18.2581C11.7297 18.259 11.7608 18.3176 11.7773 18.3881V18.3878Z' fill='none' className={filledClassName} />
          <path d='M11.5316 18.0482C11.5353 18.0957 11.5139 18.1219 11.476 18.1216C11.4115 18.1213 11.3702 18.0836 11.3599 18.0176C11.3528 17.973 11.3699 17.9347 11.4184 17.94C11.4802 17.9471 11.5167 17.9916 11.5316 18.0482Z' fill='none' className={filledClassName} />
          <path d='M11.2764 17.8052C11.2738 17.8511 11.2424 17.8662 11.2085 17.8629C11.1655 17.8585 11.1221 17.8405 11.1113 17.791C11.1022 17.7486 11.1313 17.7282 11.1695 17.7279C11.2219 17.7276 11.2578 17.7551 11.2764 17.8052Z' fill='none' className={filledClassName} />
          <path d='M8.99999 7.8072C12.3137 7.8072 15 6.73107 15 5.4036C15 4.07613 12.3137 3 8.99999 3C5.68629 3 3 4.07613 3 5.4036C3 6.73107 5.68629 7.8072 8.99999 7.8072Z' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 9.08593C3 10.134 4.67489 11.0255 7.01069 11.3542' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 5.4043V12.5971C3 13.5914 4.50751 14.4448 6.65669 14.8104' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M26.8146 29.775C27.3709 29.7028 27.874 29.6129 28.3662 29.4596C30.0994 28.9207 31.0415 27.6976 31.2904 25.8687C31.4154 24.9511 31.4325 24.0423 31.0838 23.1639C30.9294 22.7759 30.7227 22.4182 30.451 22.1063C30.365 22.0076 30.3569 21.926 30.3939 21.8032C30.6396 20.9907 30.5616 20.1915 30.2946 19.3986C30.2471 19.2581 30.1659 19.2341 30.0447 19.2365C29.5682 19.2458 29.1311 19.407 28.704 19.6049C28.3287 19.7788 27.9714 19.9886 27.6303 20.2263C27.5372 20.2912 27.4579 20.3025 27.3472 20.2735C25.7832 19.8682 24.2163 19.8648 22.6528 20.2735C22.5178 20.3089 22.4309 20.2711 22.3283 20.2038C21.6793 19.7769 21.0113 19.3937 20.2379 19.2621C20.2222 19.2596 20.207 19.2552 20.1913 19.2522C19.7875 19.1884 19.7405 19.2159 19.6241 19.6216C19.4126 20.359 19.3727 21.0998 19.6051 21.8415C19.6307 21.9236 19.6407 21.985 19.5756 22.0606C18.681 23.1016 18.5095 24.34 18.6672 25.6648C18.7261 26.1605 18.8288 26.6463 19.0117 27.1115C19.5414 28.4619 20.5681 29.1845 21.8836 29.5441C22.2884 29.6546 22.7017 29.7195 23.1545 29.7833C22.8062 30.1665 22.6228 30.5978 22.5511 31.0807C22.5369 31.1765 22.4632 31.1858 22.401 31.2128C21.275 31.6997 20.2873 31.3779 19.6317 30.3134C19.31 29.7907 18.8877 29.4056 18.2833 29.2734C18.118 29.2371 17.9541 29.2366 17.7916 29.2936C17.6206 29.3535 17.6073 29.4626 17.7151 29.5893C17.793 29.6802 17.8819 29.7681 17.9821 29.83C18.5157 30.1606 18.853 30.6582 19.0801 31.2359C19.4435 32.1604 20.1457 32.576 21.0569 32.6811C21.475 32.7293 21.8964 32.7062 22.3079 32.6099C22.4656 32.5731 22.5107 32.6006 22.5088 32.7735C22.5022 33.3134 22.5126 33.8537 22.5155 34.3936C22.5178 34.8804 22.2176 35.1059 21.7625 34.9497C20.6184 34.5562 19.5761 33.9657 18.6487 33.1709C16.582 31.402 15.3525 29.1383 15.0603 26.3796C14.5472 21.5355 17.3507 17.078 21.8337 15.5346C27.3253 13.6438 33.2188 16.94 34.6864 22.7228C35.9863 27.8435 33.1295 33.2741 28.2574 34.9448C27.7733 35.1108 27.4773 34.8971 27.4778 34.3774C27.4788 33.4691 27.4892 32.5608 27.484 31.6525C27.4797 30.9648 27.3334 30.3227 26.8151 29.775H26.8146Z' fill='none' className={filledClassName} />
          <path d='M22.2648 31.4848C22.3584 31.4986 22.4605 31.5187 22.4458 31.6346C22.4306 31.7565 22.3232 31.7963 22.2154 31.7997C22.1251 31.8026 22.0258 31.7766 22.0291 31.6631C22.0334 31.5143 22.1584 31.502 22.2648 31.4848Z' fill='none' className={filledClassName} />
          <path d='M20.0048 31.3757C19.8903 31.3555 19.8039 31.2868 19.7872 31.1477C19.7768 31.0598 19.8177 31.0072 19.906 31.0117C20.0523 31.019 20.135 31.1109 20.1531 31.2519C20.164 31.3369 20.1027 31.3796 20.0048 31.3762V31.3757Z' fill='none' className={filledClassName} />
          <path d='M21.4771 31.5879C21.575 31.6002 21.6881 31.6159 21.6829 31.7397C21.6776 31.8699 21.5617 31.9003 21.4558 31.8949C21.3598 31.89 21.2558 31.8571 21.2653 31.7299C21.2748 31.6036 21.3855 31.6007 21.4771 31.5879Z' fill='none' className={filledClassName} />
          <path d='M20.6376 31.4543C20.7498 31.4617 20.8581 31.5078 20.8681 31.6385C20.8771 31.7535 20.7735 31.7716 20.6832 31.7648C20.5673 31.7554 20.4595 31.7151 20.4595 31.5722C20.4595 31.4666 20.5483 31.4558 20.6376 31.4543Z' fill='none' className={filledClassName} />
          <path d='M19.6289 30.6463C19.6294 30.7205 19.609 30.7838 19.5287 30.7828C19.3957 30.7809 19.3349 30.6905 19.3187 30.5657C19.3097 30.4945 19.3334 30.4292 19.4151 30.4301C19.5496 30.4316 19.6014 30.5294 19.6289 30.6468V30.6463Z' fill='none' className={filledClassName} />
          <path d='M19.2193 30.0803C19.2254 30.1594 19.1898 30.2032 19.1266 30.2027C19.0192 30.2022 18.9504 30.1393 18.9332 30.0293C18.9214 29.9551 18.9499 29.8912 19.0306 29.9001C19.1337 29.9118 19.1945 29.986 19.2193 30.0803Z' fill='none' className={filledClassName} />
          <path d='M18.794 29.6753C18.7897 29.7519 18.7375 29.777 18.6809 29.7716C18.6092 29.7642 18.537 29.7342 18.5189 29.6517C18.5037 29.581 18.5522 29.5471 18.6158 29.5466C18.7033 29.5461 18.7631 29.5918 18.794 29.6753Z' fill='none' className={filledClassName} />
          <path d='M15 13.012C20.5228 13.012 25 11.2184 25 9.006C25 6.79355 20.5228 5 15 5C9.47715 5 5 6.79355 5 9.006C5 11.2184 9.47715 13.012 15 13.012Z' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 15.1432C5 16.89 7.79148 18.3758 11.6845 18.9237' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 9.00716V20.9951C5 22.6524 7.51252 24.0746 11.0945 24.6841' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

GitHubRepoIcon.propTypes = {
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
GitHubRepoIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default GitHubRepoIcon
