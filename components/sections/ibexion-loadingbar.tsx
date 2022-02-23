import Image from 'next/image'
import React, { ReactElement } from 'react'

import Loading from '../../public/images/loading.svg'
import Loading2 from '../../public/images/loading2.svg'
import IbexionLoadingItem from '../elements/ibexion-loading-item'
export interface Props {
  data: {
    component: string
    id: number
    title: null
    Item: LoadingItem[]
  }
}

export interface LoadingItem {
  id: number
  percent: number
  label: string
}

function IbexionLoadingBar({ data }: Props): ReactElement {
  return (
    <div className="bg-lava-black-900 my-96">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <Loading className="w-full h-full" /> */}
        <Image src={Loading2} alt="Ibexion Battery" />
      </div>
      {/*  {data.Item.map((item) => (
        <IbexionLoadingItem
          key={item.id}
          percent={item.percent}
          label={item.label}
        />
      ))} */}
    </div>
  )
}

export default IbexionLoadingBar
