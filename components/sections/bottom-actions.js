import { getButtonAppearance } from 'utils/button'

import ButtonLink from '@/components/elements/button-link'

const BottomActions = ({ data }) => {
  return (
    <section className="py-20 text-center bg-lava-orange-500">
      <h2 className="mb-10 text-white title">{data.title}</h2>
      {/* Buttons row */}
      <div className="container flex flex-row flex-wrap gap-4 justify-center">
        {data.buttons.map((button) => (
          <ButtonLink
            button={button}
            appearance={getButtonAppearance(button.type, 'dark')}
            key={button.id}
          />
        ))}
      </div>
    </section>
  )
}

export default BottomActions
