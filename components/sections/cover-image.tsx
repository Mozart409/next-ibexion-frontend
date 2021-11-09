import React, { ReactElement } from 'react'
import { getStrapiMedia } from 'utils/media'
import CustomLink from '../elements/custom-link'
import Image from 'next/image'
import CoverImageComp from '../elements/cover-image-comp'
interface Props {
  data: Image
}

interface Image {
  component: string
  id: number
  image_border?: boolean
  link?: ILink
  picture: IMedia
}

export default function CoverImage({ data }: Props): ReactElement {
  const fullUrl = getStrapiMedia(data?.picture?.url)
  if (data.link)
    return (
      <CustomLink link={data.link}>
        <CoverImageComp
          fullUrl={fullUrl}
          alt={data.picture?.alternativeText || ''}
          title={data.picture?.caption || ''}
          image_border={data.image_border}
        />
      </CustomLink>
    )
  return (
    <CoverImageComp
      fullUrl={fullUrl}
      alt={data.picture?.alternativeText || ''}
      title={data.picture?.caption || ''}
      image_border={data.image_border}
    />
  )
}
