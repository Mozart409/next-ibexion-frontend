import Image from 'next/image'
import PropTypes from 'prop-types'
import { getStrapiMedia } from 'utils/media'
import { mediaPropTypes } from 'utils/types'

const CustomImage = ({ media, className, width, height }) => {
  const fullUrl = getStrapiMedia(media?.url)

  return (
    <div>
      {/* <img
        src={fullUrl}
        alt={media?.alternativeText || ''}
        title={media?.caption || ''}
        className={className}
      /> */}
      <Image
        src={fullUrl}
        alt={media?.alternativeText || ''}
        title={media?.caption || ''}
        layout="intrinsic"
        className={className}
        width={width || media?.width}
        height={height || media?.height}
      />
    </div>
  )
}

CustomImage.propTypes = {
  media: mediaPropTypes,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default CustomImage
