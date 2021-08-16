import MarkdownRender from 'utils/MarkdownRender'
import ButtonLink from '../elements/button-link'
import CustomImage from '../elements/image'
import { getButtonAppearance } from 'utils/button'

const Hero = ({ data }) => {
  return (
    <main className="container grid grid-flow-row-dense md:grid-flow-col grid-cols-4 md:grid-cols-8 gap-4 items-center justify-between py-12">
      {/* Left column for content */}
      <div className="col-span-4 ">
        {/* Hero section label */}
        <p className="uppercase tracking-wide font-semibold text-gray-200">
          {data.label}
        </p>
        {/* Big title */}
        <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2 text-gray-50">
          {data.title}
        </h1>
        {/* Description paragraph */}
        <p className="text-xl mb-6 text-gray-300">{data.description}</p>
        {/* Buttons row */}
        <div className="flex flex-row flex-wrap gap-4">
          {data.buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, 'light')}
              key={button.id}
            />
          ))}
        </div>
        {/* Small rich text */}
        <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
          <MarkdownRender>{data.smallTextWithLink}</MarkdownRender>
        </div>
      </div>

      {/* Right column for the image */}
      <div className="col-span-4">
        <CustomImage
          media={data?.picture}
          width={750}
          height={650}
          className="flex-shrink-0 object-contain w-full sm:w-3/12 md:w-5/12 mt-6 md:mt-0"
        />
      </div>
    </main>
  )
}

export default Hero
