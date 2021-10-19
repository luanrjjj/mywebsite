import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import { ContactSection, Form } from './styles'
import { init, sendForm } from 'emailjs-com'

init('user_QSVCFHPu30nw3pbesQfah')
const sleep = (ms: any) =>
  new Promise(resolve => setTimeout(resolve, ms))

interface RegistrationFormData {
  email: string
  name: string
  message: string
  contact_number: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = (data: RegistrationFormData) => {
    generateContactNumber()
    sendForm(
      'contact_form',
      'template_sr606he',
      '#contact-form',
    ).then(
      function (response) {
        console.log(
          'SUCCESS!',
          response.status,
          response.text,
        )
      },
      function (error) {
        console.log('FAILED...', error)
      },
    )
    reset({ [data.email]: data.email })
  }

  console.log(errors)
  const [contactNumber, setContactNumber] =
    useState('000000')

  const generateContactNumber = () => {
    const numStr =
      '000000' + ((Math.random() * 1000000) | 0)
    setContactNumber(numStr.substring(numStr.length - 6))
  }
  return (
    <ContactSection>
      <div className="SectionContent">
        <h2>Contato</h2>
        <Form>
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1> Mande um Email </h1>
            <label htmlFor="Name">Nome</label>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <label htmlFor="Email">Email</label>
            <input
              placeholder="Coloque seu Email"
              {...register('user_email')}
            />

            <label htmlFor="body">Mensagem</label>
            <input
              placeholder="Digite sua Mensagem"
              type="text"
              {...register('message')}
              className="bodyEmail"
            />
            <input
              type="hidden"
              name="contact_number"
              value={contactNumber}
            />

            <div style={{ color: 'red' }}>
              {Object.keys(errors).length > 0 &&
                'There are errors, check your console.'}
            </div>
            <input type="submit" id="enviar" />
          </form>
        </Form>
      </div>
    </ContactSection>
  )
}

export default Contact
