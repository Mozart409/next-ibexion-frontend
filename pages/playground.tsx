import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import GpxReactForm from '@/components/sections/gpx-react-form'

const Playground: NextPage<PlaygroundProps> = () => {
  return (
    <div>
      <h1>Playground</h1>
      <GpxReactForm />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-types
type PlaygroundProps = {}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Playground
