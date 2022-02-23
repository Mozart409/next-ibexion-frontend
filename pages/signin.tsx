import React from 'react'
import { NextPage, GetStaticProps } from 'next'

const Signin: NextPage<SigninProps> = () => {
  return <div>Signin</div>
}

type SigninProps = {}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Signin
