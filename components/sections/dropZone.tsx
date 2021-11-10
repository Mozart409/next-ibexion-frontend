import React, { ReactElement, FC, useCallback, useEffect } from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'

interface IDropZoneProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
}

const DropZone: FC<IDropZoneProps> = (props) => {
  const { name, label = name } = props
  const { register, unregister, setValue, watch } = useFormContext()
  const files: File[] = watch(name)
  const onDrop = useCallback<DropzoneOptions['onDrop']>(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true })
    },
    [setValue, name]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
  })
  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])
  return (
    <>
      <label
        className="block mb-2 text-sm font-bold text-gray-700 capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <div {...getRootProps()}>
        <input
          {...props}
          className="py-2 px-3 w-full leading-tight text-gray-700 rounded border shadow appearance-none focus:outline-none focus:shadow-outline"
          id={name}
          {...getInputProps()}
        />
        <div
          className={
            'w-full p-2 border border-dashed border-gray-900 ' +
            (isDragActive ? 'bg-gray-400' : 'bg-gray-200')
          }
        >
          <p className="my-2 text-center">Drop the files here ...</p>
          {/* Optionally you may display a preview of the file(s) */}
          {!!files?.length && (
            <div className="grid grid-cols-4 gap-1 mt-2">
              {files.map((file) => {
                return (
                  <div key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: '100px', height: '100px' }}
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default DropZone
