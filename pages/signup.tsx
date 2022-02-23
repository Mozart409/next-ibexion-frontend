import { GetStaticProps,NextPage } from 'next'
import React from 'react'

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