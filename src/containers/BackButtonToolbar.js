import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import { grey700 } from 'material-ui/styles/colors'

export default function BackButtonToolbar({onClick}) {
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <IconButton onClick={onClick} >
          <ArrowBack color={grey700} />
        </IconButton>
      </ToolbarGroup>
    </Toolbar >
  )
}

BackButtonToolbar.propTypes = {
  onClick: PropTypes.func.isRequired
}

