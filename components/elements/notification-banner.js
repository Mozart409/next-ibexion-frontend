import MarkdownRender from 'utils/MarkdownRender'
import classNames from 'classnames'
import { MdClose } from 'react-icons/md'

const NotificationBanner = ({ data: { text, type }, closeSelf }) => {
  if (text)
    return (
      <div
        className={classNames(
          // Common classes
          'text-white px-2 py-2',
          {
            // Apply theme based on notification type
            'bg-pink-600': type === 'info',
            'bg-yellow-600': type === 'warning',
            'bg-red-600': type === 'alert',
          }
        )}
      >
        <div className="container flex flex-row justify-between items-center ">
          <div className="rich-text-banner flex-1">
            <MarkdownRender>{text} </MarkdownRender>
          </div>
          <button onClick={closeSelf} className="px-1 py-1 flex-shrink-0">
            <MdClose className="h-6 w-auto" color="#fff" />
          </button>
        </div>
      </div>
    )
  return null
}

export default NotificationBanner
