import Head from 'next/head'

function Error({ statusCode }) {
  return (
    <div>
      <div className="min-h-screen">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html:
                'plausible("404",{ props: { path: document.location.pathname } });',
            }}
          ></script>
        </Head>

        <h1 className="text-center text-2xl font-bold my-auto mt-24">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
