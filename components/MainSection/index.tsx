/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import { Main, Maxwidth } from './styles'

const MainSection = () => {
  return (
    <>
      <Maxwidth>
        <Main>
          <div className="TextMain">
            <h2>Olá, Seja bem-vindo </h2>
            <h1>Meu nome é Luan Alfredo </h1>
            <p>
              Eu sou Software Engineer e gosto de construir
              coisas na web que tragam valor para a vida das
              pessoas. Este é o meu site onde divulgo os
              meus projetos.
            </p>
            <a href="/CVLuanAlfredo.pdf">
              <button>Resumo</button>
            </a>
          </div>
        </Main>
      </Maxwidth>
    </>
  )
}

export default MainSection
