import React from 'react'
import PropTypes from 'prop-types'
import { MAIN_DARK_BLUE, WHITE } from '../constants'

function BasicLogo ({ backgroundColor, width, height }) {
  let icon = (
    <svg width={width} height={height} viewBox='0 0 423 182' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M187.436 64.9733H385.39C405.484 64.9733 421.773 81.2622 421.773 101.356V101.356C421.773 121.449 405.484 137.738 385.39 137.738H187.436L214.697 123.185L223.609 97.1977L208.406 75.3682L187.436 64.9733Z' fill='#00283D' />
      <path d='M65.0386 133.582H192.308V133.542C197.131 133.317 201.842 132.015 206.094 129.73C210.347 127.446 214.032 124.238 216.878 120.342C219.725 116.446 221.66 111.962 222.542 107.221C223.424 102.479 223.229 97.5995 221.973 92.9426C220.717 88.2856 218.432 83.9694 215.284 80.3119C212.137 76.6543 208.209 73.7487 203.788 71.8088C199.368 69.8689 194.568 68.9443 189.743 69.1031C184.917 69.2618 180.189 70.4999 175.906 72.7261C173.263 66.6304 169.262 61.2174 164.209 56.8992C159.155 52.5811 153.182 49.4715 146.744 47.8071M37.7368 47.8071C28.3653 50.221 20.0632 55.6791 14.1368 63.3224C8.21048 70.9657 4.99629 80.3604 5.00001 90.0283C5.00374 99.6961 8.22518 109.088 14.1574 116.727C20.0897 124.366 28.396 129.818 37.7694 132.224' stroke='#00283D' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M88.0831 74.5393L71.1029 80.4997L78.5755 96.3317' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M71.4855 80.7803C79.2282 85.3285 88.2585 87.1932 97.1718 86.0843C106.085 84.9753 114.382 80.955 120.771 74.6486C127.161 68.3422 131.285 60.1033 132.502 51.2134C133.719 42.3234 131.961 33.2808 127.502 25.4921C123.042 17.7034 116.131 11.6052 107.843 8.146C99.5554 4.68684 90.3555 4.06065 81.6746 6.36483C72.9936 8.66901 65.3183 13.7744 59.8424 20.8869C54.3665 27.9993 51.397 36.7202 51.3958 45.6929V106.39' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.2} d='M51.3958 170.56V177.651' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.4} d='M51.461 148.247V159.448' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.7} d='M51.3958 117.925V136.652' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M240.018 119.958V83.2607H257.947C262.56 83.2607 266.02 84.1344 268.327 85.8819C270.669 87.6294 271.839 89.936 271.839 92.8019C271.839 94.7241 271.368 96.4017 270.424 97.8346C269.48 99.2326 268.187 100.316 266.544 101.085C264.902 101.854 263.015 102.238 260.883 102.238L261.879 100.089C264.185 100.089 266.23 100.473 268.012 101.242C269.795 101.976 271.175 103.077 272.154 104.545C273.167 106.013 273.674 107.813 273.674 109.945C273.674 113.09 272.433 115.554 269.952 117.336C267.471 119.084 263.818 119.958 258.995 119.958H240.018ZM248.458 113.562H258.366C260.568 113.562 262.228 113.212 263.347 112.513C264.5 111.779 265.077 110.626 265.077 109.053C265.077 107.516 264.5 106.38 263.347 105.646C262.228 104.877 260.568 104.492 258.366 104.492H247.829V98.3064H256.898C258.96 98.3064 260.533 97.9569 261.617 97.2579C262.735 96.524 263.294 95.4231 263.294 93.9552C263.294 92.5223 262.735 91.4563 261.617 90.7573C260.533 90.0234 258.96 89.6564 256.898 89.6564H248.458V113.562ZM296.827 119.958V114.453L296.303 113.247V103.392C296.303 101.644 295.761 100.281 294.678 99.3025C293.629 98.3239 292.004 97.8346 289.802 97.8346C288.3 97.8346 286.814 98.0793 285.346 98.5686C283.913 99.0229 282.69 99.652 281.677 100.456L278.741 94.7416C280.279 93.6582 282.131 92.8194 284.298 92.2252C286.465 91.6311 288.667 91.334 290.903 91.334C295.202 91.334 298.54 92.3475 300.916 94.3746C303.293 96.4017 304.481 99.5646 304.481 103.863V119.958H296.827ZM288.23 120.377C286.028 120.377 284.141 120.01 282.568 119.276C280.995 118.507 279.789 117.476 278.951 116.183C278.112 114.89 277.692 113.44 277.692 111.832C277.692 110.154 278.094 108.686 278.898 107.428C279.737 106.17 281.048 105.191 282.83 104.492C284.612 103.759 286.937 103.392 289.802 103.392H297.299V108.162H290.694C288.771 108.162 287.443 108.477 286.709 109.106C286.01 109.735 285.661 110.521 285.661 111.465C285.661 112.513 286.063 113.352 286.867 113.981C287.705 114.575 288.841 114.872 290.274 114.872C291.637 114.872 292.861 114.558 293.944 113.929C295.027 113.265 295.814 112.304 296.303 111.046L297.561 114.82C296.967 116.637 295.884 118.018 294.311 118.962C292.738 119.905 290.711 120.377 288.23 120.377ZM321.372 120.377C318.96 120.377 316.636 120.097 314.399 119.538C312.197 118.944 310.45 118.21 309.157 117.336L311.883 111.465C313.176 112.269 314.696 112.933 316.444 113.457C318.226 113.946 319.974 114.191 321.686 114.191C323.573 114.191 324.902 113.964 325.67 113.509C326.474 113.055 326.876 112.426 326.876 111.622C326.876 110.958 326.562 110.469 325.933 110.154C325.338 109.805 324.535 109.543 323.521 109.368C322.507 109.193 321.389 109.018 320.166 108.844C318.978 108.669 317.772 108.442 316.549 108.162C315.325 107.848 314.207 107.393 313.193 106.799C312.18 106.205 311.359 105.401 310.73 104.388C310.135 103.374 309.838 102.064 309.838 100.456C309.838 98.6734 310.345 97.1007 311.359 95.7376C312.407 94.3746 313.91 93.3087 315.867 92.5398C317.824 91.7359 320.166 91.334 322.892 91.334C324.814 91.334 326.771 91.5437 328.763 91.9631C330.756 92.3825 332.416 92.9941 333.744 93.798L331.018 99.617C329.655 98.8132 328.274 98.2715 326.876 97.9919C325.513 97.6773 324.185 97.5201 322.892 97.5201C321.075 97.5201 319.746 97.7647 318.908 98.254C318.069 98.7433 317.65 99.3724 317.65 100.141C317.65 100.84 317.947 101.365 318.541 101.714C319.17 102.064 319.991 102.343 321.005 102.553C322.018 102.762 323.119 102.955 324.307 103.129C325.531 103.269 326.754 103.496 327.977 103.811C329.2 104.126 330.301 104.58 331.28 105.174C332.293 105.733 333.115 106.52 333.744 107.533C334.373 108.512 334.687 109.805 334.687 111.412C334.687 113.16 334.163 114.715 333.115 116.078C332.066 117.406 330.546 118.455 328.554 119.224C326.597 119.993 324.203 120.377 321.372 120.377ZM339.733 119.958V91.7534H347.911V119.958H339.733ZM343.822 87.8216C342.319 87.8216 341.096 87.3847 340.153 86.511C339.209 85.6372 338.737 84.5538 338.737 83.2607C338.737 81.9675 339.209 80.8841 340.153 80.0104C341.096 79.1366 342.319 78.6998 343.822 78.6998C345.325 78.6998 346.548 79.1192 347.492 79.958C348.436 80.7618 348.907 81.8103 348.907 83.1034C348.907 84.4664 348.436 85.6023 347.492 86.511C346.583 87.3847 345.36 87.8216 343.822 87.8216ZM369.132 120.377C366.091 120.377 363.383 119.765 361.006 118.542C358.629 117.284 356.76 115.554 355.397 113.352C354.069 111.15 353.404 108.651 353.404 105.856C353.404 103.025 354.069 100.526 355.397 98.3589C356.76 96.157 358.629 94.4445 361.006 93.2213C363.383 91.9631 366.091 91.334 369.132 91.334C372.102 91.334 374.689 91.9631 376.891 93.2213C379.092 94.4445 380.718 96.2095 381.766 98.5161L375.423 101.924C374.689 100.596 373.763 99.617 372.644 98.9879C371.561 98.3589 370.372 98.0443 369.079 98.0443C367.681 98.0443 366.423 98.3589 365.305 98.9879C364.186 99.617 363.295 100.508 362.631 101.662C362.002 102.815 361.688 104.213 361.688 105.856C361.688 107.498 362.002 108.896 362.631 110.049C363.295 111.203 364.186 112.094 365.305 112.723C366.423 113.352 367.681 113.667 369.079 113.667C370.372 113.667 371.561 113.37 372.644 112.776C373.763 112.146 374.689 111.15 375.423 109.787L381.766 113.247C380.718 115.519 379.092 117.284 376.891 118.542C374.689 119.765 372.102 120.377 369.132 120.377Z' fill='white' />

    </svg>

  )

  if (backgroundColor === MAIN_DARK_BLUE) {
    icon = (
      <svg width={width} height={height} viewBox='0 0 423 182' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M187.436 64.9733H385.39C405.484 64.9733 421.773 81.2622 421.773 101.356V101.356C421.773 121.449 405.484 137.738 385.39 137.738H187.436L214.697 123.185L223.609 97.1977L208.406 75.3682L187.436 64.9733Z' fill='white' />
        <path d='M65.0386 133.582H192.308V133.542C197.131 133.317 201.842 132.015 206.094 129.73C210.347 127.446 214.032 124.238 216.878 120.342C219.725 116.446 221.66 111.962 222.542 107.221C223.424 102.479 223.229 97.5995 221.973 92.9426C220.717 88.2856 218.432 83.9694 215.284 80.3119C212.137 76.6543 208.209 73.7487 203.788 71.8088C199.368 69.8689 194.568 68.9443 189.743 69.1031C184.917 69.2618 180.189 70.4999 175.906 72.7261C173.263 66.6304 169.262 61.2174 164.209 56.8992C159.155 52.5811 153.182 49.4715 146.744 47.8071M37.7368 47.8071C28.3653 50.221 20.0632 55.6791 14.1368 63.3224C8.21048 70.9657 4.99629 80.3604 5.00001 90.0283C5.00374 99.6961 8.22518 109.088 14.1574 116.727C20.0897 124.366 28.396 129.818 37.7694 132.224' stroke='white' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M88.0831 74.5393L71.1029 80.4997L78.5755 96.3317' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M71.4855 80.7803C79.2282 85.3285 88.2585 87.1932 97.1718 86.0843C106.085 84.9753 114.382 80.955 120.771 74.6486C127.161 68.3422 131.285 60.1033 132.502 51.2134C133.719 42.3234 131.961 33.2808 127.502 25.4921C123.042 17.7034 116.131 11.6052 107.843 8.146C99.5554 4.68684 90.3555 4.06065 81.6746 6.36483C72.9936 8.66901 65.3183 13.7744 59.8424 20.8869C54.3665 27.9993 51.397 36.7202 51.3958 45.6929V106.39' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.2} d='M51.3958 170.56V177.651' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.4} d='M51.461 148.247V159.448' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.7} d='M51.3958 117.925V136.652' stroke='#21FA90' strokeWidth={8.38788} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M240.018 119.958V83.2607H257.947C262.56 83.2607 266.02 84.1344 268.327 85.8819C270.669 87.6294 271.839 89.936 271.839 92.8019C271.839 94.7241 271.368 96.4017 270.424 97.8346C269.48 99.2326 268.187 100.316 266.544 101.085C264.902 101.854 263.015 102.238 260.883 102.238L261.879 100.089C264.185 100.089 266.23 100.473 268.012 101.242C269.795 101.976 271.175 103.077 272.154 104.545C273.167 106.013 273.674 107.813 273.674 109.945C273.674 113.09 272.433 115.554 269.952 117.336C267.471 119.084 263.818 119.958 258.995 119.958H240.018ZM248.458 113.562H258.366C260.568 113.562 262.228 113.212 263.347 112.513C264.5 111.779 265.077 110.626 265.077 109.053C265.077 107.516 264.5 106.38 263.347 105.646C262.228 104.877 260.568 104.492 258.366 104.492H247.829V98.3064H256.898C258.96 98.3064 260.533 97.9569 261.617 97.2579C262.735 96.524 263.294 95.4231 263.294 93.9552C263.294 92.5223 262.735 91.4563 261.617 90.7573C260.533 90.0234 258.96 89.6564 256.898 89.6564H248.458V113.562ZM296.827 119.958V114.453L296.303 113.247V103.392C296.303 101.644 295.761 100.281 294.678 99.3025C293.629 98.3239 292.004 97.8346 289.802 97.8346C288.3 97.8346 286.814 98.0793 285.346 98.5686C283.913 99.0229 282.69 99.652 281.677 100.456L278.741 94.7416C280.279 93.6582 282.131 92.8194 284.298 92.2252C286.465 91.6311 288.667 91.334 290.903 91.334C295.202 91.334 298.54 92.3475 300.916 94.3746C303.293 96.4017 304.481 99.5646 304.481 103.863V119.958H296.827ZM288.23 120.377C286.028 120.377 284.141 120.01 282.568 119.276C280.995 118.507 279.789 117.476 278.951 116.183C278.112 114.89 277.692 113.44 277.692 111.832C277.692 110.154 278.094 108.686 278.898 107.428C279.737 106.17 281.048 105.191 282.83 104.492C284.612 103.759 286.937 103.392 289.802 103.392H297.299V108.162H290.694C288.771 108.162 287.443 108.477 286.709 109.106C286.01 109.735 285.661 110.521 285.661 111.465C285.661 112.513 286.063 113.352 286.867 113.981C287.705 114.575 288.841 114.872 290.274 114.872C291.637 114.872 292.861 114.558 293.944 113.929C295.027 113.265 295.814 112.304 296.303 111.046L297.561 114.82C296.967 116.637 295.884 118.018 294.311 118.962C292.738 119.905 290.711 120.377 288.23 120.377ZM321.372 120.377C318.96 120.377 316.636 120.097 314.399 119.538C312.197 118.944 310.45 118.21 309.157 117.336L311.883 111.465C313.176 112.269 314.696 112.933 316.444 113.457C318.226 113.946 319.974 114.191 321.686 114.191C323.573 114.191 324.902 113.964 325.67 113.509C326.474 113.055 326.876 112.426 326.876 111.622C326.876 110.958 326.562 110.469 325.933 110.154C325.338 109.805 324.535 109.543 323.521 109.368C322.507 109.193 321.389 109.018 320.166 108.844C318.978 108.669 317.772 108.442 316.549 108.162C315.325 107.848 314.207 107.393 313.193 106.799C312.18 106.205 311.359 105.401 310.73 104.388C310.135 103.374 309.838 102.064 309.838 100.456C309.838 98.6734 310.345 97.1007 311.359 95.7376C312.407 94.3746 313.91 93.3087 315.867 92.5398C317.824 91.7359 320.166 91.334 322.892 91.334C324.814 91.334 326.771 91.5437 328.763 91.9631C330.756 92.3825 332.416 92.9941 333.744 93.798L331.018 99.617C329.655 98.8132 328.274 98.2715 326.876 97.9919C325.513 97.6773 324.185 97.5201 322.892 97.5201C321.075 97.5201 319.746 97.7647 318.908 98.254C318.069 98.7433 317.65 99.3724 317.65 100.141C317.65 100.84 317.947 101.365 318.541 101.714C319.17 102.064 319.991 102.343 321.005 102.553C322.018 102.762 323.119 102.955 324.307 103.129C325.531 103.269 326.754 103.496 327.977 103.811C329.2 104.126 330.301 104.58 331.28 105.174C332.293 105.733 333.115 106.52 333.744 107.533C334.373 108.512 334.687 109.805 334.687 111.412C334.687 113.16 334.163 114.715 333.115 116.078C332.066 117.406 330.546 118.455 328.554 119.224C326.597 119.993 324.203 120.377 321.372 120.377ZM339.733 119.958V91.7534H347.911V119.958H339.733ZM343.822 87.8216C342.319 87.8216 341.096 87.3847 340.153 86.511C339.209 85.6372 338.737 84.5538 338.737 83.2607C338.737 81.9675 339.209 80.8841 340.153 80.0104C341.096 79.1366 342.319 78.6998 343.822 78.6998C345.325 78.6998 346.548 79.1192 347.492 79.958C348.436 80.7618 348.907 81.8103 348.907 83.1034C348.907 84.4664 348.436 85.6023 347.492 86.511C346.583 87.3847 345.36 87.8216 343.822 87.8216ZM369.132 120.377C366.091 120.377 363.383 119.765 361.006 118.542C358.629 117.284 356.76 115.554 355.397 113.352C354.069 111.15 353.404 108.651 353.404 105.856C353.404 103.025 354.069 100.526 355.397 98.3589C356.76 96.157 358.629 94.4445 361.006 93.2213C363.383 91.9631 366.091 91.334 369.132 91.334C372.102 91.334 374.689 91.9631 376.891 93.2213C379.092 94.4445 380.718 96.2095 381.766 98.5161L375.423 101.924C374.689 100.596 373.763 99.617 372.644 98.9879C371.561 98.3589 370.372 98.0443 369.079 98.0443C367.681 98.0443 366.423 98.3589 365.305 98.9879C364.186 99.617 363.295 100.508 362.631 101.662C362.002 102.815 361.688 104.213 361.688 105.856C361.688 107.498 362.002 108.896 362.631 110.049C363.295 111.203 364.186 112.094 365.305 112.723C366.423 113.352 367.681 113.667 369.079 113.667C370.372 113.667 371.561 113.37 372.644 112.776C373.763 112.146 374.689 111.15 375.423 109.787L381.766 113.247C380.718 115.519 379.092 117.284 376.891 118.542C374.689 119.765 372.102 120.377 369.132 120.377Z' fill='#00283D' />

      </svg>

    )
  }

  return icon
}

BasicLogo.propTypes = {
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

BasicLogo.defaultProps = {
  backgroundColor: WHITE,
  width: 423,
  height: 182
}

export default BasicLogo
