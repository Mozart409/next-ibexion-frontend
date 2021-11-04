import React, { ReactElement } from 'react'
import ButtonLink from '../elements/button-link'
import CustomButton from '../elements/custom-button'
import CustomLink from '../elements/custom-link'

interface CallToAction {
  data: Item
}

interface Item {
  title: string
  Link: ILink
}

export default function CallToAction({ data }: CallToAction): ReactElement {
  return (
    <div className="py-12">
      <div className="max-w-72ch w-full mx-auto">
        <h2 className="w-full text-3xl font-bold leading-7 text-white mb-2">
          {data.title}
        </h2>
        <CustomLink link={data.Link}>
          <CustomButton text={data.Link.text} />
        </CustomLink>
      </div>
    </div>
  )
}
