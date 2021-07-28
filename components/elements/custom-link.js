import Link from 'next/link'
import PropTypes from 'prop-types'
import { linkPropTypes } from 'utils/types'

const CustomLink = ({ link, children }) => {
  const isInternalLink = link?.url?.startsWith('/')

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={link?.url}>
        <a alt={link?.alt} title={link?.title}>
          {children}
        </a>
      </Link>
    )
  }

  // Plain <a> tags for external links
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={link?.url}
      // Change target and rel attributes is newTab is turned on
      target={link?.newTab ? '_blank' : '_self'}
      rel={link?.newTab ? 'noopener noreferrer' : ''}
      alt={link?.alt}
      title={link?.title}
    >
      {children}
    </a>
  )
}

CustomLink.propTypes = {
  link: linkPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default CustomLink
