import './StatusIndicator.css'
export const StatusIndicator: React.FC<{ message: string; type: string }> = ({
  message,
  type,
}) => {
  return (
    <div className='statusIndicator center'>
      {type === 'loading' && <div className='loadingSpinner' />}
      {type === 'error' && <div className='errorIcon' />}
      <p>{message}</p>
    </div>
  )
}
