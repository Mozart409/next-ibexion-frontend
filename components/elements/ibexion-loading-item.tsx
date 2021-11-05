import React, { ReactElement } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import cx from 'classnames'
interface Props {
  percent: number
  label: string
}

function IbexionLoadingItem({ percent, label }: Props): ReactElement {
  return (
    <div className="py-6">
      <div className="max-w-72ch w-full mx-auto">
        <div className="grid grid-cols-2 gap-x-4 justify-between gap-y-2">
          <div className="col-span-1 justify-self-start">
            <span className="text-white text-center text-3xl">
              {percent} Min
            </span>
          </div>
          <div className="col-span-1 justify-self-end">
            <span
              className={cx(' text-center text-3xl font-black', {
                'text-canary-blue': label === 'IBEXION',
                'text-white': label !== 'IBEXION',
              })}
            >
              {label}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-4">
          <div className="col-span-6 justify-items-center">
            <ProgressBar
              borderRadius="0px"
              completed={percent}
              bgColor="#1A75BB"
              isLabelVisible={false}
              maxCompleted={180}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IbexionLoadingItem
