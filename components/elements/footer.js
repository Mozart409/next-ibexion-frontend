import CustomImage from './image'
import PropTypes from 'prop-types'
import { linkPropTypes, mediaPropTypes } from 'utils/types'
import CustomLink from './custom-link'

const Footer = ({ footer }) => {
  return (
    <footer className="pt-10 bg-gray-800">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footer.logo && (
            <CustomImage
              media={footer?.logo}
              className="object-contain w-auto h-8"
              width={64}
              height={64}
            />
          )}
        </div>
        <nav className="flex flex-row flex-wrap items-start mb-10 lg:gap-20 lg:justify-end">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 w-6/12 lg:mt-0 lg:w-auto "
            >
              <p className="font-semibold tracking-wide text-gray-300 uppercase">
                {footerColumn.title}
              </p>
              <div className="flex flex-col">
                <ul className="mt-2 divide-y-2 divide-gecko-gray divide-solid md:divide-y-0">
                  {footerColumn.links.map((link) => (
                    <li
                      key={link.id}
                      className="py-1 px-1 -mx-1 text-gray-400 hover:text-gray-600 "
                    >
                      <CustomLink className="" link={link}>
                        {link?.text}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className="py-6 text-sm text-gray-400 bg-gray-900">
        <div className="container">
          {new Date().getFullYear()} {footer.smallText}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
