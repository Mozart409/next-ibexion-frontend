import React, { ReactElement } from 'react'

interface Props {
  text: string
}

export default function CustomButton({ text }: Props): ReactElement {
  return (
    <div>
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm items.center text-white bg-lava-orange hover:bg-rubber-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lava-orange mx-auto">
        {text}
      </button>
    </div>
  )
}
