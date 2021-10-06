import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import GpxForm from '@/components/sections/gpx-form'

const Playground: NextPage<PlaygroundProps> = () => {
  return (
    <div>
      <h1>Playground</h1>
      <GpxForm />
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
