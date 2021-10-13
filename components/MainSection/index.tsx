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
            <h2>Oi, </h2>
            <h1>Meu nome é Luan Alfredo. </h1>
            <p>
              Eu sou um Software Engineer do Brasil. Eu
              gosto de construir coisas na web que tragam
              valor para a vida das pessoas. Este é o meu
              site onde divulgo os meus projetos.
            </p>
            <button>Resumo</button>
          </div>
        </Main>
      </Maxwidth>
    </>
  )
}

export default MainSection
