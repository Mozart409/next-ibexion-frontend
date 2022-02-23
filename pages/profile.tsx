import { NextPage } from 'next'
import type { Session } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/react'

const Profile: NextPage = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  /* if (loading) {
    return <p className='font-bold text-white'>Loading...</p>
  } */

  return (
    <div>
      <h1>Profile</h1>
      <div>
        {!session && (
          <>
            <span className='font-bold text-white'>You are not signed in</span>
            <a
              href={`/api/auth/signin`}
              className='rounded px-4 py-2 bg-orange-500 text-white'
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              Sign in
            </a>
          </>
        )}
      </div>
      <div>
        {session?.user && (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
                className='rounded-full'
              />
            )}
            <span className='font-bold text-white'>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              className='rounded px-4 py-2 bg-orange-500 text-white'
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              Sign out
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
