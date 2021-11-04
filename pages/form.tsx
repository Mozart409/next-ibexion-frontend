import React, { useState } from 'react'
import { NextPage, GetStaticProps } from 'next'
import GpxReactForm from '@/components/sections/gpx-react-form'
import toast from 'react-hot-toast'

const Form: NextPage<FormProps> = () => {
  const [FileContents, setFileContents] = useState({})

  function readFileContent(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file, 'utf-8')

    reader.onload = () => {
      setFileContents({ fileName: file.name, fileContent: reader.result })
    }
    reader.onerror = () => {
      toast.error(`Error reading file ${reader.error}`)
    }
  }

  return (
    <div>
      <h1>Form TEST</h1>
      <pre className="bg-white">{JSON.stringify(FileContents, null, 2)}</pre>
      <div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 bg-white shadow sm:px-10 sm:rounded-lg">
            <div>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="p-4 bg-red-500"
                onChange={(e) => {
                  readFileContent(e)
                }}
              />

              <input
                type="submit"
                className="inline-flex w-full items-center py-2 px-4 mt-2 text-base font-medium text-white rounded-md border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none bg-lava-orange hover:bg-lava-orange focus:ring-lava-orange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-types
type FormProps = {}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Form
