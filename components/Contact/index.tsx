import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import { Form } from './styles'

const sleep = (ms: any) =>
  new Promise(resolve => setTimeout(resolve, ms))

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data: any) => {
    await sleep(2000)
  
      console.log(JSON.stringify(data))
    
    }
  

  console.log(errors)

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Mande um Email </h1>
        <label htmlFor="Email">Email</label>
        <input
          placeholder="Coloque seu Email"
          {...register('email')}
        />

        <label htmlFor="body">Mensagem</label>
        <input
          placeholder="Digite sua Mensagem"
          type="text"
          {...register('body')}
          className="bodyEmail"
        />

        <div style={{ color: 'red' }}>
          {Object.keys(errors).length > 0 &&
            'There are errors, check your console.'}
        </div>
        <input type="submit" />
      </form>
    </Form>
  )
}

export default Contact
