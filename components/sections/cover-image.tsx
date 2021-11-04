import React, { ReactElement } from 'react'
import { getStrapiMedia } from 'utils/media'
import CustomLink from '../elements/custom-link'
import CustomImage from '../elements/image'
import Image from 'next/image'
interface Props {
  data: {
    component: string
    id: number
    imageBorder?: boolean
    link?: ILink
    picture: IMedia
  }
}

export default function CoverImage({ data }: Props): ReactElement {
  const fullUrl = getStrapiMedia(data.picture.url)
  if (data.link)
    return (
      <CustomLink link={data.link}>
        <Image
          src={fullUrl}
          alt={data.picture?.alternativeText || ''}
          title={data.picture?.caption || ''}
          layout="intrinsic"
          className=""
          width={1920}
          height={720}
        />
      </CustomLink>
    )
  return (
    <div>
      <Image
        src={fullUrl}
        alt={data.picture?.alternativeText || ''}
        title={data.picture?.caption || ''}
        layout="intrinsic"
        className=""
        width={1920}
        height={720}
      />
    </div>
  )
}
