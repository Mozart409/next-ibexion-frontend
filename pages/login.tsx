import { GetStaticProps, NextPage } from 'next'
import React from 'react'

const Login: NextPage<LoginProps> = () => {
  return (
    <div>
      <h1>Login</h1>
      <div></div>
    </div>
  )
}

type LoginProps = {}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Login
