import React from 'react'
import PropTypes from 'prop-types'
import { MAIN_DARK_BLUE, WHITE } from '../constants'

function AdvancedLogo ({ backgroundColor, width, height }) {
  let icon = (
    <svg width={width} height={height} viewBox='0 0 379 173' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M178 61.2H336.8C355.964 61.2 371.5 76.7357 371.5 95.9C371.5 115.064 355.964 130.6 336.8 130.6H178L204 116.72L212.5 91.9342L198 71.1142L178 61.2Z' fill='#00283D' />
      <path d='M61.2622 126.636H182.647V126.597C187.247 126.383 191.74 125.141 195.795 122.962C199.851 120.783 203.365 117.724 206.08 114.008C208.795 110.293 210.641 106.016 211.482 101.493C212.323 96.9709 212.138 92.3174 210.94 87.8758C209.742 83.4342 207.562 79.3176 204.56 75.8292C201.559 72.3408 197.812 69.5694 193.596 67.7193C189.38 65.8691 184.802 64.9873 180.2 65.1387C175.598 65.2901 171.088 66.4709 167.003 68.5942C164.482 62.7803 160.666 57.6177 155.846 53.4992C151.027 49.3807 145.33 46.4149 139.19 44.8275M35.223 44.8275C26.2848 47.1298 18.3666 52.3354 12.7143 59.6253C7.062 66.9151 3.99645 75.8754 4 85.0962C4.00356 94.317 7.07603 103.275 12.734 110.56C18.3919 117.846 26.3141 123.046 35.254 125.341' stroke='#00283D' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M83.2411 70.3236L67.0461 76.0084L74.1731 91.1083' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M67.411 76.276C74.7957 80.6139 83.4084 82.3923 91.9095 81.3347C100.411 80.2771 108.324 76.4427 114.418 70.4279C120.512 64.4131 124.445 56.5552 125.606 48.0763C126.767 39.5975 125.09 30.973 120.837 23.5445C116.584 16.1159 109.992 10.2997 102.087 7.00052C94.1829 3.70132 85.4084 3.10409 77.1289 5.30172C68.8494 7.49935 61.529 12.3686 56.3063 19.1522C51.0836 25.9358 48.2515 34.2533 48.2504 42.8111V100.702' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.2} d='M48.2504 161.904V168.667' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.4} d='M48.3125 140.623V151.306' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.7} d='M48.2504 111.703V129.564' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M235.65 93.75H252.45V100.25H235.65V93.75ZM236.25 113H228.15V78H254.6V84.5H236.25V113ZM259.045 113V86.1H266.495V93.7L265.445 91.5C266.245 89.6 267.529 88.1667 269.295 87.2C271.062 86.2 273.212 85.7 275.745 85.7V92.9C275.412 92.8667 275.112 92.85 274.845 92.85C274.579 92.8167 274.295 92.8 273.995 92.8C271.862 92.8 270.129 93.4167 268.795 94.65C267.495 95.85 266.845 97.7333 266.845 100.3V113H259.045ZM293.489 113.4C290.422 113.4 287.722 112.8 285.389 111.6C283.089 110.4 281.306 108.767 280.039 106.7C278.772 104.6 278.139 102.217 278.139 99.55C278.139 96.85 278.756 94.4667 279.989 92.4C281.256 90.3 282.972 88.6667 285.139 87.5C287.306 86.3 289.756 85.7 292.489 85.7C295.122 85.7 297.489 86.2667 299.589 87.4C301.722 88.5 303.406 90.1 304.639 92.2C305.872 94.2667 306.489 96.75 306.489 99.65C306.489 99.95 306.472 100.3 306.439 100.7C306.406 101.067 306.372 101.417 306.339 101.75H284.489V97.2H302.239L299.239 98.55C299.239 97.15 298.956 95.9333 298.389 94.9C297.822 93.8667 297.039 93.0667 296.039 92.5C295.039 91.9 293.872 91.6 292.539 91.6C291.206 91.6 290.022 91.9 288.989 92.5C287.989 93.0667 287.206 93.8833 286.639 94.95C286.072 95.9833 285.789 97.2167 285.789 98.65V99.85C285.789 101.317 286.106 102.617 286.739 103.75C287.406 104.85 288.322 105.7 289.489 106.3C290.689 106.867 292.089 107.15 293.689 107.15C295.122 107.15 296.372 106.933 297.439 106.5C298.539 106.067 299.539 105.417 300.439 104.55L304.589 109.05C303.356 110.45 301.806 111.533 299.939 112.3C298.072 113.033 295.922 113.4 293.489 113.4ZM325.032 113.4C321.965 113.4 319.265 112.8 316.932 111.6C314.632 110.4 312.849 108.767 311.582 106.7C310.315 104.6 309.682 102.217 309.682 99.55C309.682 96.85 310.299 94.4667 311.532 92.4C312.799 90.3 314.515 88.6667 316.682 87.5C318.849 86.3 321.299 85.7 324.032 85.7C326.665 85.7 329.032 86.2667 331.132 87.4C333.265 88.5 334.949 90.1 336.182 92.2C337.415 94.2667 338.032 96.75 338.032 99.65C338.032 99.95 338.015 100.3 337.982 100.7C337.949 101.067 337.915 101.417 337.882 101.75H316.032V97.2H333.782L330.782 98.55C330.782 97.15 330.499 95.9333 329.932 94.9C329.365 93.8667 328.582 93.0667 327.582 92.5C326.582 91.9 325.415 91.6 324.082 91.6C322.749 91.6 321.565 91.9 320.532 92.5C319.532 93.0667 318.749 93.8833 318.182 94.95C317.615 95.9833 317.332 97.2167 317.332 98.65V99.85C317.332 101.317 317.649 102.617 318.282 103.75C318.949 104.85 319.865 105.7 321.032 106.3C322.232 106.867 323.632 107.15 325.232 107.15C326.665 107.15 327.915 106.933 328.982 106.5C330.082 106.067 331.082 105.417 331.982 104.55L336.132 109.05C334.899 110.45 333.349 111.533 331.482 112.3C329.615 113.033 327.465 113.4 325.032 113.4Z' fill='white' />
    </svg>
  )

  if (backgroundColor === MAIN_DARK_BLUE) {
    icon = (
      <svg width={width} height={height} viewBox='0 0 379 173' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M178 61.2H336.8C355.964 61.2 371.5 76.7357 371.5 95.9C371.5 115.064 355.964 130.6 336.8 130.6H178L204 116.72L212.5 91.9342L198 71.1142L178 61.2Z' fill='white' />
        <path d='M61.2622 126.636H182.647V126.597C187.247 126.383 191.74 125.141 195.795 122.962C199.851 120.783 203.365 117.724 206.08 114.008C208.795 110.293 210.641 106.016 211.482 101.493C212.323 96.9709 212.138 92.3174 210.94 87.8758C209.742 83.4342 207.562 79.3176 204.56 75.8292C201.559 72.3408 197.812 69.5694 193.596 67.7193C189.38 65.8691 184.802 64.9873 180.2 65.1387C175.598 65.2901 171.088 66.4709 167.003 68.5942C164.482 62.7803 160.666 57.6177 155.846 53.4992C151.027 49.3807 145.33 46.4149 139.19 44.8275M35.223 44.8275C26.2848 47.1298 18.3666 52.3354 12.7143 59.6253C7.062 66.9151 3.99645 75.8754 4 85.0962C4.00356 94.317 7.07603 103.275 12.734 110.56C18.3919 117.846 26.3141 123.046 35.254 125.341' stroke='white' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M83.2411 70.3236L67.0461 76.0084L74.1731 91.1083' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M67.411 76.276C74.7957 80.6139 83.4084 82.3923 91.9095 81.3347C100.411 80.2771 108.324 76.4427 114.418 70.4279C120.512 64.4131 124.445 56.5552 125.606 48.0763C126.767 39.5975 125.09 30.973 120.837 23.5445C116.584 16.1159 109.992 10.2997 102.087 7.00052C94.1829 3.70132 85.4084 3.10409 77.1289 5.30172C68.8494 7.49935 61.529 12.3686 56.3063 19.1522C51.0836 25.9358 48.2515 34.2533 48.2504 42.8111V100.702' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.2} d='M48.2504 161.904V168.667' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.4} d='M48.3125 140.623V151.306' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.7} d='M48.2504 111.703V129.564' stroke='#21FA90' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M235.65 93.75H252.45V100.25H235.65V93.75ZM236.25 113H228.15V78H254.6V84.5H236.25V113ZM259.045 113V86.1H266.495V93.7L265.445 91.5C266.245 89.6 267.529 88.1667 269.295 87.2C271.062 86.2 273.212 85.7 275.745 85.7V92.9C275.412 92.8667 275.112 92.85 274.845 92.85C274.579 92.8167 274.295 92.8 273.995 92.8C271.862 92.8 270.129 93.4167 268.795 94.65C267.495 95.85 266.845 97.7333 266.845 100.3V113H259.045ZM293.489 113.4C290.422 113.4 287.722 112.8 285.389 111.6C283.089 110.4 281.306 108.767 280.039 106.7C278.772 104.6 278.139 102.217 278.139 99.55C278.139 96.85 278.756 94.4667 279.989 92.4C281.256 90.3 282.972 88.6667 285.139 87.5C287.306 86.3 289.756 85.7 292.489 85.7C295.122 85.7 297.489 86.2667 299.589 87.4C301.722 88.5 303.406 90.1 304.639 92.2C305.872 94.2667 306.489 96.75 306.489 99.65C306.489 99.95 306.472 100.3 306.439 100.7C306.406 101.067 306.372 101.417 306.339 101.75H284.489V97.2H302.239L299.239 98.55C299.239 97.15 298.956 95.9333 298.389 94.9C297.822 93.8667 297.039 93.0667 296.039 92.5C295.039 91.9 293.872 91.6 292.539 91.6C291.206 91.6 290.022 91.9 288.989 92.5C287.989 93.0667 287.206 93.8833 286.639 94.95C286.072 95.9833 285.789 97.2167 285.789 98.65V99.85C285.789 101.317 286.106 102.617 286.739 103.75C287.406 104.85 288.322 105.7 289.489 106.3C290.689 106.867 292.089 107.15 293.689 107.15C295.122 107.15 296.372 106.933 297.439 106.5C298.539 106.067 299.539 105.417 300.439 104.55L304.589 109.05C303.356 110.45 301.806 111.533 299.939 112.3C298.072 113.033 295.922 113.4 293.489 113.4ZM325.032 113.4C321.965 113.4 319.265 112.8 316.932 111.6C314.632 110.4 312.849 108.767 311.582 106.7C310.315 104.6 309.682 102.217 309.682 99.55C309.682 96.85 310.299 94.4667 311.532 92.4C312.799 90.3 314.515 88.6667 316.682 87.5C318.849 86.3 321.299 85.7 324.032 85.7C326.665 85.7 329.032 86.2667 331.132 87.4C333.265 88.5 334.949 90.1 336.182 92.2C337.415 94.2667 338.032 96.75 338.032 99.65C338.032 99.95 338.015 100.3 337.982 100.7C337.949 101.067 337.915 101.417 337.882 101.75H316.032V97.2H333.782L330.782 98.55C330.782 97.15 330.499 95.9333 329.932 94.9C329.365 93.8667 328.582 93.0667 327.582 92.5C326.582 91.9 325.415 91.6 324.082 91.6C322.749 91.6 321.565 91.9 320.532 92.5C319.532 93.0667 318.749 93.8833 318.182 94.95C317.615 95.9833 317.332 97.2167 317.332 98.65V99.85C317.332 101.317 317.649 102.617 318.282 103.75C318.949 104.85 319.865 105.7 321.032 106.3C322.232 106.867 323.632 107.15 325.232 107.15C326.665 107.15 327.915 106.933 328.982 106.5C330.082 106.067 331.082 105.417 331.982 104.55L336.132 109.05C334.899 110.45 333.349 111.533 331.482 112.3C329.615 113.033 327.465 113.4 325.032 113.4Z' fill='#00283D' />
      </svg>
    )
  }

  return icon
}

AdvancedLogo.propTypes = {
  /**
   * background color of the button
   */
  backgroundColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE]),
  /**
   * width
   */
  width: PropTypes.number,
  /**
   * height
   */
  height: PropTypes.number
}

AdvancedLogo.defaultProps = {
  backgroundColor: WHITE,
  width: 379,
  height: 173
}

export default AdvancedLogo
