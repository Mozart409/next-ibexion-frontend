import classNames from 'classnames'
import CustomLink from './custom-link'

interface ButtonLinkProps {
  button?: {
    text?: string
  }
  appearance: 'dark' | 'white-outline' | 'white' | 'dark-outline'
  compact?: boolean
  type?: 'button' | 'reset' | 'submit'
  isDisabled?: boolean
  loading?: boolean
}

const ButtonLink = ({
  button,
  appearance,
  compact = false,
  type,
}: ButtonLinkProps) => {
  return (
    <CustomLink link={button}>
      <button type="submit">
        <div
          className={classNames(
            // Common classes
            'flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md',
            // Full-size button
            {
              'px-8 py-4': compact === false,
            },
            // Compact button
            {
              'px-6 py-2': compact === true,
            },
            // Specific to when the button is fully dark
            {
              'bg-lava-orange text-white border-lava-orange':
                appearance === 'dark',
            },
            // Specific to when the button is dark outlines
            {
              'text-lava-orange border-lava-orange':
                appearance === 'dark-outline',
            },
            // Specific to when the button is fully white
            {
              'bg-white text-lava-orange border-white': appearance === 'white',
            },
            // Specific to when the button is white outlines
            {
              'text-white border-white': appearance === 'white-outline',
            }
          )}
        >
          {button?.text}
        </div>
      </button>
    </CustomLink>
  )
}

export default ButtonLink
