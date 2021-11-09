import { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

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
        <div className="container flex flex-row pl-2 justify-between items-center">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <Link href="/[[...slug]]" as="/">
              <a>
                <CustomImage
                  media={navbar?.logo}
                  className="object-contain w-auto h-8"
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
            <div className="w-auto h-8 pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
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
