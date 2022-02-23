import React from 'react'
import { NextPage, GetStaticProps } from 'next'

const Signup: NextPage<SignupProps> = () => {
  return <div>Signup</div>
}

type SignupProps = {}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}
  }
}


export default Signup