import { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { MdMenu } from 'react-icons/md'
import MobileNavMenu from './mobile-nav-menu'
import ButtonLink from './button-link'
import CustomImage from './image'
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from 'utils/types'
import { getButtonAppearance } from 'utils/button'
import CustomLink from './custom-link'

const Navbar = ({ navbar }) => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <nav className="py-6 bg-white border-b-2 border-gray-200 sm:py-2">
        <div className="container flex flex-row justify-between items-center">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <Link href="/[[...slug]]" as="/">
              <a>
                <CustomImage
                  media={navbar?.logo}
                  className="object-contain w-auto h-8 rounded-full"
                  width={64}
                  height={64}
                />
              </a>
            </Link>
            {/* List of links on desktop */}
            <ul className="hidden flex-row gap-4 items-baseline ml-10 list-none md:flex">
              {navbar.links.map((navLink) => (
                <li key={navLink.id}>
                  <CustomLink link={navLink}>
                    <div className="py-1 px-2 hover:text-gray-500">
                      {navLink?.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Hamburger menu on mobile */}
          <button
            onClick={() => setMobileMenuIsShown(true)}
            className="block p-1 md:hidden"
          >
            <MdMenu className="w-auto h-8" />
          </button>
          {/* CTA button on desktop */}
          {navbar.button && (
            <div className="hidden md:block ">
              <ButtonLink
                button={navbar.button}
                appearance={getButtonAppearance(navbar.button.type, 'light')}
                compact
              />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
}

export default Navbar
