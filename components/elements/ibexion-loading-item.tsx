import React, { ReactElement } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import cx from 'classnames'
interface Props {
  percent: number
  label: string
}

function IbexionLoadingItem({ percent, label }: Props): ReactElement {
  return (
    <div className="py-6 mx-4 md:mx-0">
      <div className="mx-auto w-full max-w-72ch">
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 justify-between">
          <div className="col-span-1 justify-self-start">
            <span className="text-3xl text-center text-white">
              {percent} Min
            </span>
          </div>
          <div className="col-span-1 justify-self-end">
            <span
              className={cx(' text-center text-3xl font-black', {
                'text-white': label === 'IBEXION',
                'text-canary-blue-500': label !== 'IBEXION',
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
