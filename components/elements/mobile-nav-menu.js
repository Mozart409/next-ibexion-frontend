import PropTypes from 'prop-types'
import { MdClose, MdChevronRight } from 'react-icons/md'
import CustomImage from './image'
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from 'utils/types'
import ButtonLink from './button-link'
import { useLockBodyScroll } from 'utils/hooks'
import { getButtonAppearance } from 'utils/button'
import CustomLink from './custom-link'

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <div className="overflow-y-scroll fixed top-0 left-0 z-10 pb-6 w-screen h-screen bg-white">
      <div className="container flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between items-center py-2">
          {/* Company logo */}
          <CustomImage
            media={navbar?.logo}
            className="object-contain w-auto h-8 rounded-full"
            width={16}
            height={16}
          />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="w-auto h-8" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end mx-auto w-9/12">
          <ul className="flex flex-col gap-6 items-baseline mb-10 text-xl list-none">
            {navbar.links.map((navLink) => (
              <li onClick={closeSelf} key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="flex flex-row justify-between items-center py-6 hover:text-gray-900">
                    <span>{navLink?.text}</span>
                    <MdChevronRight className="w-auto h-8" />
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
          {navbar.button ? (
            <ButtonLink
              button={navbar.button}
              appearance={getButtonAppearance(navbar.button.type, 'light')}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
}

export default MobileNavMenu
