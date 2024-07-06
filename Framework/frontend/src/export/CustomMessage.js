export const customMessageFile = `import React from 'react'
import { Alert } from 'react-bootstrap'

const CustomMessage = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

CustomMessage.defaultProps = {
    variant: 'info',
}
export default CustomMessage
`
