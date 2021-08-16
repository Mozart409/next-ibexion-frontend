import cx from 'classnames'
import MarkdownRender from 'utils/MarkdownRender'

const LevelRow = ({ data: { id, title, titleColor, content } }) => {
  return (
    <div key={id}>
      <div className="mt-8 max-w-prose mx-auto">
        <ul className="py-4 max-w-prose mx-auto">
          <li className="list-check list-inside align-baseline">
            <span
              className={cx(
                'font-bold text-transparent bg-clip-text bg-gradient-to-r text-2xl text-left',
                {
                  'from-yellow-800 to-yellow-500': titleColor === 'orange',
                  'from-blue-500 to-green-400': titleColor === 'green',
                  'from-yellow-300 to-green-500': titleColor === 'yellow',
                  'from-cyan-500 to-green-300': titleColor === 'blue',
                  'from-red-600 to-yellow-300': titleColor === 'red',
                  'text-gray-200': !titleColor,
                }
              )}
            >
              {title}
            </span>
          </li>

          <div>
            <div className="lg:ml-10 max-w-prose md:max-w-3xl mx-auto">
              <MarkdownRender>{content}</MarkdownRender>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default LevelRow
