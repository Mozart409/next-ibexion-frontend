import { GetStaticPaths,GetStaticProps, NextPage } from 'next'
import React from 'react'

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