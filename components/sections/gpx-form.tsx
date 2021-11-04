import React from 'react'

import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'

const GpxSchema = Yup.object().shape({
  GPXDaten: Yup.string().required('Required'),
  Fahrergewicht: Yup.number().required('Required'),
  Bikegewicht: Yup.number().required('Required'),
  Fahrerleistung: Yup.number().required('Required'),
  Bikeleistung: Yup.number().required('Required'),
})

interface IFormInput {
  id: string
  label: string
  type: 'email' | 'number' | 'text'
  placeholder?: string
}

function FormInput({ id, label, type, placeholder, ...props }: IFormInput) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <Field
          type={type}
          name={id}
          id={id}
          className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-lava-orange focus:border-lava-orange"
          placeholder={placeholder || label}
          {...props}
        />
      </div>
      <ErrorMessage name={id}>
        {(msg) => (
          <p className="block pr-10 w-full font-mono font-bold placeholder-red-300 text-red-500 rounded-md border-red-300 sm:text-sm focus:outline-none">
            {msg}
          </p>
        )}
      </ErrorMessage>
    </div>
  )
}

const GpxForm = () => (
  <div>
    <div>
      <h1>Signup</h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 bg-white shadow sm:px-10 sm:rounded-lg">
          <Formik
            initialValues={{
              GPXDaten: '',
              Fahrergewicht: 0,
              Bikegewicht: 0,
              Fahrerleistung: 0,
              Bikeleistung: 0,
            }}
            validationSchema={GpxSchema}
            onSubmit={(
              values: SendGpxData,
              { setSubmitting }: FormikHelpers<SendGpxData>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 500)
            }}
          >
            <Form>
              <FormInput
                id="Fahrergewicht"
                label="Fahrergewicht"
                type="number"
                placeholder="Count"
              />

              <FormInput
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                type="text"
              />

              <FormInput
                id="email"
                label="Email"
                placeholder="john@doe.com"
                type="email"
              />

              <button
                type="submit"
                className="inline-flex items-center py-2 px-4 mt-2 text-base font-medium text-white rounded-md border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none bg-lava-orange hover:bg-lava-orange focus:ring-lava-orange"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  </div>
)
export default GpxForm
