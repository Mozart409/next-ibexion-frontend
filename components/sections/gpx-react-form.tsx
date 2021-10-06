import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import toast from 'react-hot-toast'

const schema = Yup.object({
  gPXDaten: Yup.string().required(),
  fahrergewicht: Yup.number().positive().integer().min(0).max(200).required(),
  bikegewicht: Yup.number().positive().integer().min(0).max(200).required(),
  fahrerleistung: Yup.number().positive().integer().min(0).max(200).required(),
  bikeleistung: Yup.number().positive().integer().min(0).max(200).required(),
}).required()

function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

function ErrorMessageCustom({ children }) {
  return <p className="font-semibold text-red-600">{children}</p>
}

const GpxForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SendGpxData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      gPXDaten: '',
      fahrergewicht: 80,
      bikegewicht: 30,
      fahrerleistung: 20,
      bikeleistung: 10,
    },
  })
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2))
    toast.success(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="gPXDaten"
          className="block text-sm font-medium text-gray-700"
        >
          gPXDaten
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="gPXDaten"
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500"
            {...register('gPXDaten', {})}
          />
          {errors.gPXDaten && (
            <ErrorMessage
              errors={errors}
              name="gPXDaten"
              as="span"
              render={({ message }) => (
                <ErrorMessageCustom>{message}</ErrorMessageCustom>
              )}
            />
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="fahrergewicht"
          className="block text-sm font-medium text-gray-700"
        >
          Fahrergewicht
        </label>
        <div className="mt-1">
          <input
            type="number"
            id="fahrergewicht"
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500"
            {...register('fahrergewicht', {})}
          />
          {errors.fahrergewicht && (
            <ErrorMessage
              errors={errors}
              name="fahrergewicht"
              as="span"
              render={({ message }) => (
                <ErrorMessageCustom>{message}</ErrorMessageCustom>
              )}
            />
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="bikegewicht"
          className="block text-sm font-medium text-gray-700"
        >
          bikegewicht
        </label>
        <div className="mt-1">
          <input
            type="number"
            id="bikegewicht"
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500"
            {...register('bikegewicht', {})}
          />
          {errors.bikegewicht && (
            <ErrorMessage
              errors={errors}
              name="bikegewicht"
              as="span"
              render={({ message }) => (
                <ErrorMessageCustom>{message}</ErrorMessageCustom>
              )}
            />
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="fahrerleistung"
          className="block text-sm font-medium text-gray-700"
        >
          Fahrerleistung
        </label>
        <div className="mt-1">
          <input
            type="number"
            id="fahrerleistung"
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500"
            {...register('fahrerleistung', {})}
          />
          {errors.fahrerleistung && (
            <ErrorMessage
              errors={errors}
              name="fahrerleistung"
              as="span"
              render={({ message }) => (
                <ErrorMessageCustom>{message}</ErrorMessageCustom>
              )}
            />
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="bikeleistung"
          className="block text-sm font-medium text-gray-700"
        >
          Bikeleistung
        </label>
        <div className="mt-1">
          <input
            type="number"
            id="bikegewicht"
            className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500"
            {...register('bikeleistung', {})}
          />
          {errors.bikeleistung && (
            <ErrorMessage
              errors={errors}
              name="bikeleistung"
              as="span"
              render={({ message }) => (
                <ErrorMessageCustom>{message}</ErrorMessageCustom>
              )}
            />
          )}
        </div>
      </div>

      {/* <input
        type="submit"
        className="inline-flex items-center py-2 px-4 mt-2 text-base font-medium text-white rounded-md border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
      >
        Submit
      </input> */}

      <input
        type="submit"
        className="inline-flex items-center py-2 px-4 mt-2 text-base font-medium text-white rounded-md border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
      />

      {process.env.NODE_ENV === 'development' ? (
        <DevTool control={control} />
      ) : null}
    </form>
  )
}

export default function GpxReactForm() {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="py-8 px-4 bg-white shadow sm:px-10 sm:rounded-lg">
        <GpxForm />
      </div>
    </div>
  )
}
