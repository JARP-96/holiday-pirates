import './StatusIndicator.css'

const StatusIndicator: React.FC<{ message: string; type: string }> = ({
  message,
  type,
}) => (
  <div className='status-indicator center'>
    {type === 'loading' && <div className='loading-spinner' />}
    {type === 'error' && <div className='error-icon' />}
    <p>{message}</p>
  </div>
)

export default StatusIndicator
