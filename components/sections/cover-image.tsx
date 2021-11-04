import React, { ReactElement } from 'react'
import { getStrapiMedia } from 'utils/media'
import CustomLink from '../elements/custom-link'
import Image from 'next/image'
import cx from 'classnames'
interface Props {
  data: {
    component: string
    id: number
    image_border?: boolean
    link?: ILink
    picture: IMedia
  }
}

export default function CoverImage({ data }: Props): ReactElement {
  const fullUrl = getStrapiMedia(data.picture.url)
  if (data.link)
    return (
      <CustomLink link={data.link}>
        <div
          className={cx('', {
            'border-b-8 border-canary-blue': data.image_border === true,
          })}
        >
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
      </CustomLink>
    )
  return (
    <div
      className={cx('', {
        'border-b-8 border-canary-blue': data.image_border === true,
      })}
    >
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
