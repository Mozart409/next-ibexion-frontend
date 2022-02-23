import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

const Id: NextPage<IdProps> = () => {
  return <div>Id</div>
}

type IdProps = {}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}

export default Id