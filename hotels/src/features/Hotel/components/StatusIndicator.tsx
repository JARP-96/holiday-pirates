import React from 'react'
import './StatusIndicator.css'

const StatusIndicator: React.FC<{ message: string; type: string }> = ({
  message,
  type,
}) => (
  <div className='statusIndicator center'>
    {type === 'loading' && <div className='loadingSpinner' />}
    {type === 'error' && <div className='errorIcon' />}
    <p>{message}</p>
  </div>
)

export default StatusIndicator
