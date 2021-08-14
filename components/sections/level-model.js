import MarkdownRender from 'utils/MarkdownRender'
import LevelRow from '../elements/level-row'
import PropTypes from 'prop-types'
const LevelModel = ({ data }) => {
  return (
    <div>
      <div className="py-6 mx-auto text-center lg:text-left">
        <div className="px-4 sm:px-8">
          <div className="mx-auto mb-4 ">
            <div className="mx-auto break-words max-w-prose md:mt-5 md:max-w-3xl">
              <MarkdownRender>{data.title}</MarkdownRender>
            </div>
            <div className="mx-auto break-words max-w-prose md:mt-5 md:max-w-3xl">
              <MarkdownRender>{data.content}</MarkdownRender>
            </div>
          </div>
          <div>
            {data.LevelRow.map((item) => (
              <LevelRow key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

LevelModel.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default LevelModel
