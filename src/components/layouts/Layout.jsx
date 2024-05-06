'use strict'
import React from 'react'
import PropTypes from 'prop-types'

function Layout ({
  className = 'container mx-auto px-5 my-5 flex flex-col gap-10 h-screen',
  children = null
}) {
  return (
    <div className={className}>
      {children}
    </div>

  )
}

Layout.propTypes = {
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * children
   */
  children: PropTypes.node
}

export default Layout
