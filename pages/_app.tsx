import App from 'next/app'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { getStrapiMedia } from 'utils/media'
import { getGlobalData } from 'utils/api'
import Layout from 'components/layout'
import toast, { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css' // default theme
import { Auth, Hub } from 'aws-amplify'

import 'styles/index.css'
import 'public/fonts/fira/fira.css'

const MyApp = ({ Component, pageProps }) => {
  const [signedInUser, setSignedInUser] = useState(false)
  useEffect(() => {
    authListener()
  })
  const queryClient = new QueryClient()

  // Prevent Next bug when it tries to render the [[...slug]] route
  const router = useRouter()
  if (router.asPath === '/[[...slug]]') {
    return null
  }

  // Extract the data we need
  const { global } = pageProps
  if (global == null) {
    return <ErrorPage statusCode={404} />
  }
  const { metadata } = global

  async function authListener() {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          return setSignedInUser(true)
        case 'signOut':
          return setSignedInUser(false)
      }
    })
    try {
      await Auth.currentAuthenticatedUser()
      setSignedInUser(true)
    } catch (err) {
      toast.error(err.message)
    }
  }

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
      <AmplifyProvider>
        <QueryClientProvider client={queryClient}>
          <Layout global={global}>
            <Component {...pageProps} />
            <Toaster />
          </Layout>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AmplifyProvider>
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
