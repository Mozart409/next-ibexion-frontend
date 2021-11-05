import React, { ReactElement } from 'react'
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
    <div className="bg-lava-black-dark">
      {data.Item.map((item) => (
        <IbexionLoadingItem
          key={item.id}
          percent={item.percent}
          label={item.label}
        />
      ))}
    </div>
  )
}

export default IbexionLoadingBar
