import PropTypes from 'prop-types'
import MarkdownRender from 'utils/MarkdownRender'

const RichText = ({ data }) => {
  return (
    <div className="prose container py-12">
      <MarkdownRender>{data.content}</MarkdownRender>
    </div>
  )
}

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
}

export default RichText
