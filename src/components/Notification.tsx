interface INotificationProps {
  message: string | null
}
const Notification = ({ message }: INotificationProps) => {
  if (message === null) {
    return null
  }
  return (
    <li className="text-red-500 bg-gray-50 p-2 border mx-auto border-red-300 w-[50%] rounded shadow-sm font-semibold">{message}</li>
  )
}

export default Notification
