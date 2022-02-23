import { useState } from 'react'

import Footer from './elements/footer'
import Navbar from './elements/navbar'
import NotificationBanner from './elements/notification-banner'

interface Props {
  children
  global
}

interface Metadata {
  id: number
  jsonLD?: any
  canonicalUrl: string
  metaTitle: string
  metaDescription: string
  twitterCardType: string
  twitterUsername?: any
  shareImage: IMedia
}

export interface Navbar {
  id: number
  links: ILink[]
  button?: any
  logo: IMedia
  mobileLogo: IMedia
}

export interface Column {
  id: number
  title: string
  links: ILink[]
}

export interface Footer {
  id: number
  smallText: string
  columns: Column[]
  logo: IMedia
}

export interface RootObject {
  id: number
  metaTitleSuffix: string
  created_at: Date
  updated_at: Date
  metadata: Metadata
  notificationBanner?: any
  navbar: Navbar
  footer: Footer
  favicon: IMedia
}

const Layout: React.FC = ({ children, global }: Props) => {
  const { navbar, footer, notificationBanner }: RootObject = global

  const [bannerIsShown, setBannerIsShown] = useState(true)

  return (
    <div className='flex flex-col justify-between min-h-screen font-sans antialiased bg-lava-black-900'>
      {/* Aligned to the top */}
      <div className='flex-1'>
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Navbar navbar={navbar} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
