import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './links-container.css'

const LinksContainer = (props) => {
  return (
    <div className="links-container-links-container">
      <span className="links-container-text1">
        {props.text ?? (
          <Fragment>
            <span className="links-container-text6">About</span>
          </Fragment>
        )}
      </span>
      <span className="links-container-text2">
        {props.text1 ?? (
          <Fragment>
            <span className="links-container-text5">For businesses</span>
          </Fragment>
        )}
      </span>
      <span className="links-container-text3">
        {props.text2 ?? (
          <Fragment>
            <span className="links-container-text4">Contact</span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

LinksContainer.defaultProps = {
  text2: undefined,
  text1: undefined,
  text: undefined,
}

LinksContainer.propTypes = {
  text2: PropTypes.element,
  text1: PropTypes.element,
  text: PropTypes.element,
}

export default LinksContainer
