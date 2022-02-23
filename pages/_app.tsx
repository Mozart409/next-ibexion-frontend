import 'styles/index.css'
import 'public/fonts/fira/fira.css'

import Layout from 'components/layout'
import App from 'next/app'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { getGlobalData } from 'utils/api'
import { getStrapiMedia } from 'utils/media'

export interface Global {
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
export interface Section {
  __component: string
  id: number
  CoverImage: IMedia
  Logo: IMedia
  content: string
  image_border?: boolean
  width?: number
  height?: number
  link?: any
  picture: IMedia
  title: string
  Link: IMedia
}

export interface PageProps {
  global: Global
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const queryClient = new QueryClient()

  // Prevent Next bug when it tries to render the [[...slug]] route
  const router = useRouter()
  if (router.asPath === '/[[...slug]]') {
    return null
  }

  // Extract the data we need
  const { global }: PageProps = pageProps
  if (global == null) {
    return <ErrorPage statusCode={404} />
  }
  const { metadata } = global

  return (
    <>
      {/* Favicon */}
      <Head>
        <link rel='shortcut icon' href={getStrapiMedia(global?.favicon?.url)} />
        <link rel='prefetch' href='/fonts/inter-var-latin.woff2' />
        <link rel='prefetch' href='/fonts/fira/FiraSans-Bold.woff' />
        <link rel='prefetch' href='/fonts/fira/FiraSans-Bold.woff2' />
      </Head>
      {/* Global site metadata */}
      {/* <DefaultSeo
        titleTemplate={`%s | ${global?.metaTitleSuffix}`}
        title={'Page'}
        description={metadata?.metaDescription}
        openGraph={{
          images: Object?.values(metadata?.shareImage?.formats).map((image) => {
            return {
              url: getStrapiMedia(image?.url),
              width: image?.width,
              height: image?.height,
            }
          }),
        }}
        twitter={{
          cardType: metadata?.twitterCardType,
          handle: metadata?.twitterUsername,
        }}
      /> */}
      {/* Display the content */}
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <QueryClientProvider client={queryClient}>
          {console.log(pageProps)}
          <Layout global={global}>
            <Component {...pageProps} />
            <Toaster />
          </Layout>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await getGlobalData()
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global, path: ctx.pathname } }
}

export default MyApp
