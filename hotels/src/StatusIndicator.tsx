export const StatusIndicator: React.FC<{ message: string; type: string }> = ({
  message,
  type,
}) => {
  return (
    <div>
      <p>{type}</p>
      <p>{message}</p>
    </div>
  )
}
