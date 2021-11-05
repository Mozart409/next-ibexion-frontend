import React, { ReactElement } from 'react'
import { getStrapiMedia } from 'utils/media'
import CustomLink from '../elements/custom-link'
import Image from 'next/image'
import cx from 'classnames'
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

interface ImageItem {
  fullUrl: string
  alt: string
  title: string
  image_border: boolean
}

function ImageComp({
  fullUrl,
  alt,
  title,
  image_border,
}: ImageItem): ReactElement {
  return (
    <div
      className={cx('block container mx-auto ', {
        'border-b-8 border-canary-blue': image_border === true,
      })}
    >
      <Image
        src={fullUrl}
        alt={alt}
        title={title}
        layout="responsive"
        className=""
        width={1920}
        height={1080}
      />
    </div>
  )
}

export default function CoverImage({ data }: Props): ReactElement {
  const fullUrl = getStrapiMedia(data.picture.url)
  if (data.link)
    return (
      <CustomLink link={data.link}>
        <ImageComp
          fullUrl={fullUrl}
          alt={data.picture?.alternativeText || ''}
          title={data.picture?.caption || ''}
          image_border={data.image_border}
        />
      </CustomLink>
    )
  return (
    <ImageComp
      fullUrl={fullUrl}
      alt={data.picture?.alternativeText || ''}
      title={data.picture?.caption || ''}
      image_border={data.image_border}
    />
  )
}
