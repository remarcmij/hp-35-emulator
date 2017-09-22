import React from 'react'
import PropTypes from 'prop-types'
import { grey700 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'

const StepForwardIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M5,5V19H8V5M10,5V19L21,12" />
  </SvgIcon>
)

const SingleStepButton = ({ onClick, disabled }) => (
  <IconButton
    onClick={onClick}
    disabled={disabled}
    tooltip="step forward"
    tooltipPosition="top-left"
  >
    <StepForwardIcon color={grey700} />
  </IconButton>
)

const noop = () => undefined

SingleStepButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

SingleStepButton.defaultProps = {
  onClick: noop,
  disabled: false
}

export default SingleStepButton