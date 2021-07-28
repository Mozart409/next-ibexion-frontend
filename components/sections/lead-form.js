import Button from '../elements/button'
import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import toast from 'react-hot-toast'

const LeadForm = ({ data }) => {
  const [loading, setLoading] = useState(false)

  const LeadSchema = yup.object().shape({
    name: yup.string().optional(),
    email: yup.string().email().required(),
    tel: yup.number().optional(),
    subject: yup.string().optional(),
    message: yup.string().required(),
  })

  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl mb-10 font-bold">{data.title}</h2>
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-xl mx-auto">
          <Formik
            initialValues={{
              name: '',
              email: '',
              tel: '',
              subject: '',
              message: '',
            }}
            validationSchema={LeadSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true)

              try {
                setErrors({ api: null })
                await fetchAPI('/lead-form-submissions', {
                  method: 'POST',
                  body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    tel: values.tel,
                    subject: values.subject,
                    message: values.message,
                    checkbox: values.checkbox,
                    location: data.location,
                  }),
                })
              } catch (err) {
                setErrors({ api: err.message })
                toast.error(err.message)
              }

              setLoading(false)
              setSubmitting(false)
              toast.success('Nachricht gesendet')
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <div className="max-w-prose">
                <Form className="flex flex-col gap-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 text-left mt-2"
                  >
                    Name
                  </label>

                  <Field
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    type="text"
                    name="name"
                    placeholder={data.namePlaceholder}
                  />
                  <ErrorMessage
                    render={(msg) => <p className="error-style">{msg}</p>}
                    name="name"
                  />
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 text-left mt-2"
                  >
                    E-Mail (notwendig)
                  </label>
                  <Field
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    type="email"
                    name="email"
                    placeholder={data.emailPlaceholder}
                  />
                  <ErrorMessage
                    render={(msg) => <p className="error-style">{msg}</p>}
                    name="email"
                  />
                  <label
                    htmlFor="tel"
                    className="block text-sm font-medium text-gray-700 text-left mt-2"
                  >
                    Telefon
                  </label>
                  <Field
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    type="tel"
                    name="tel"
                    placeholder={data.telPlaceholder}
                  />
                  <ErrorMessage
                    render={(msg) => <p className="error-style">{msg}</p>}
                    name="tel"
                  />
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 text-left mt-2"
                  >
                    Betreff
                  </label>
                  <Field
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    type="text"
                    name="subject"
                    placeholder={data.subjectPlaceholder}
                  />
                  <ErrorMessage
                    render={(msg) => <p className="error-style">{msg}</p>}
                    name="subject"
                  />

                  {/* <div>
                    <label
                      htmlFor="checkbox"
                      className="block text-sm font-medium text-gray-700 text-left mt-2"
                    >
                      Auswahl
                    </label>
                    <Field
                      name="checkbox"
                      as="select"
                      className="mt-1 py-3 px-4 block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    >
                      {data.CheckboxRow.map((item) => (
                        <option key={item.id} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      render={(msg) => <p className="error-style">{msg}</p>}
                      name="checkbox"
                    />
                  </div> */}

                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 text-left mt-2"
                  >
                    Nachricht (notwendig)
                  </label>
                  <Field
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    type="text"
                    name="message"
                    as="textarea"
                    placeholder={data.textPlaceholder}
                  />
                  <ErrorMessage
                    render={(msg) => <p className="error-style">{msg}</p>}
                    name="message"
                  />
                  <Button
                    type="submit"
                    button={data.submitButton}
                    disabled={isSubmitting}
                    loading={loading}
                    appearance={'dark'}
                  />
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default LeadForm
