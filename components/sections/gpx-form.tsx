import React from 'react'

import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})

interface IFormInput {
  id: string
  label: string
  type: 'email' | 'number' | 'text'
  placeholder?: string
}

function FormInput({ id, label, type, placeholder }: IFormInput) {
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
          className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder={placeholder || label}
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

interface Values {
  firstName: string
  lastName: string
  email: string
}

const GpxForm = () => (
  <div>
    <div>
      <h1>Signup</h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 bg-white shadow sm:px-10 sm:rounded-lg">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 500)
            }}
          >
            <Form>
              <FormInput
                id="firstName"
                label="First Name"
                placeholder="John"
                type="text"
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
                className="inline-flex items-center py-2 px-4 mt-2 text-base font-medium text-white rounded-md border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
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
