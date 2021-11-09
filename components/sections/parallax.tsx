import React, { ReactElement } from 'react'
import { getStrapiMedia } from 'utils/media'
import CoverImageComp from '../elements/cover-image-comp'
import CoverImage from './cover-image'

interface Props {
  data: { component: string; id: number; CoverImage: IMedia; Logo: IMedia }
}

function Parallax({ data }: Props): ReactElement {
  const coverImageFullUrl = getStrapiMedia(data?.CoverImage?.url)
  const logoImageFullUrl = getStrapiMedia(data?.Logo?.url)
  return (
    <div className="relative h-full w-full mb-36 md:mb-64 lg:mb-96">
      <div className="">
        <CoverImageComp
          image_border={true}
          fullUrl={coverImageFullUrl}
          alt={data.CoverImage.alternativeText}
          title={data.CoverImage.caption}
        />
      </div>
      <div className="absolute inset-x-0 -bottom-20 md:-bottom-64 lg:-bottom-96">
        <CoverImageComp
          image_border={false}
          fullUrl={logoImageFullUrl}
          alt={data.Logo.alternativeText}
          title={data.Logo.caption}
          height={768}
        />
      </div>
    </div>
  )
}

export default Parallax
