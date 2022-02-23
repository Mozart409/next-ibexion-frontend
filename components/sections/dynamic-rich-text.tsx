import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import cx from 'classnames'
import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getDynamicRT } from 'utils/api'
import MarkdownRender from 'utils/MarkdownRender'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  data: {
    __component: string
    id: number
    content: string
    RichTextSelektor: [
      {
        id: number
        label: string
        dynamic_rich_text: {
          id: number
          name: string
          content: string
          label: string
          published_at: string
          created_at: string
          updated_at: string
        }
      }
    ]
  }
}

function DynamicRichText({ data }: Props): ReactElement {
  //

  const [selected, setSelected] = useState({
    name: data?.RichTextSelektor[0].dynamic_rich_text?.name,
    label: data?.RichTextSelektor[0].dynamic_rich_text?.label,
  })

  useEffect(() => {
    return () => {
      window.dataLayer.push({
        event: 'dynamic-content',
        selected: selected.name,
      })
    }
  }, [selected])

  const [dyHide, setDyHide] = useState(true)

  const {
    status,
    data: dynamicData,
    error,
  } = useQuery(['pageData', selected.name], async () =>
    getDynamicRT(selected.name)
  )

  if (dynamicData)
    return (
      <div className="container">
        <div className="">
          <MarkdownRender>{data.content}</MarkdownRender>
          <br />
          <div
            className="mx-auto w-full max-w-xs"
            onClick={() => setDyHide(false)}
          >
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    {' '}
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-md border border-gray-300 shadow-sm cursor-default sm:text-sm focus:ring-1 focus:outline-none focus:border-lava-orange-500 focus:ring-lava-orange-500">
                      <span className="block truncate">{selected.label}</span>
                      <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
                        <SelectorIcon
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg sm:text-sm focus:outline-none">
                        {data.RichTextSelektor.map((item) => (
                          <div key={item.id}>
                            <Listbox.Option
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'text-white bg-lava-orange-500'
                                    : 'text-gray-900',
                                  'cursor-default select-none relative py-2 pl-3 pr-9'
                                )
                              }
                              value={item.dynamic_rich_text}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'block truncate'
                                    )}
                                  >
                                    {item.dynamic_rich_text.label}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-lava-orange-500',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          </div>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>

          <div className="p-3 my-8 rounded">
            <MarkdownRender>{dynamicData.content}</MarkdownRender>
          </div>
        </div>
      </div>
    )

  return null
}

export default DynamicRichText
