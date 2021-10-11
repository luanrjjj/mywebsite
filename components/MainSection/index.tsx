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
            <p className="MyName">Meu nome é</p>
            <h1>Luan Alfredo.</h1>
            <h2>Construo coisas para a Web. </h2>
            <p>
              Meu objetivo é trazer valor para a vida das
              pessoas através de produtos digitais.
            </p>
            <button>Resumo</button>
          </div>
        </Main>
      </Maxwidth>
    </>
  )
}

export default MainSection
