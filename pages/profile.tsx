import { Authenticator } from '@aws-amplify/ui-react'
import { NextPage } from 'next'
import React from 'react'

import Button from '@/components/elements/button'

const Profile: NextPage<ProfileProps> = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Authenticator>
        {({ signOut, user }) => (
          <div className='text-white'>
            <h1>Hello {user.username}</h1>
            <button
              onClick={signOut}
              className='px-6 py-2 bg-lava-orange-500 text-white flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md border-lava-orange-500'
            >
              Sign out
            </button>
          </div>
        )}
      </Authenticator>
    </div>
  )
}

type ProfileProps = {}

export default Profile
