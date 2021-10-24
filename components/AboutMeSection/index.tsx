/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import {
  AboutMeContent,
  BoardOfHabilities,
  Section,
  Text,
} from './styles'
import Image from 'next/image'
import LazyShow from '../Animation'

const AboutMeSection = () => {
  return (
    <>
      <LazyShow>
        <Section>
          <div className="SectionContent">
            <h2 className="numberedSection">Sobre mim</h2>

            <AboutMeContent>
              <Text>
                <p>
                  Com um forte interesse por literatura e
                  por disciplinas matemáticas, encontrei na
                  programação uma mescla entre as duas, e
                  com a possibilidade de criar algo com
                  investimento financeiro quase zero somente
                  escrevendo código, me fez tomar a
                  iniciativa de sair da área financeira e
                  focar totalmente em programação. Meu
                  primeiro contato com Python foi na
                  Universidade, e por conta disso e das
                  disciplinas estatísticas do meu curso,
                  iniciei na área de Análise de Dados, e
                  trabalhei com isso por quase 2 anos e
                  meio, utilizando vaŕias ferramentas de
                  visualização com{' '}
                  <p className="details">
                    Python, SQL e VBA
                  </p>
                  .
                  <p>
                    Porém, aos poucos fui estudando
                    programação Web, depois de trabalhar em
                    uma startup e ter tido o primeiro
                    contato com Javascript, e acabei me
                    apaixonando pelo oportunidade de criação
                    e de entrega de valor para milhares de
                    pessoas, que a Internet proporciona.
                  </p>
                </p>
              </Text>
              <BoardOfHabilities>
                <h1>Quadro de Habilidades</h1>
                <div>
                  <ul>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>
                      Python e bibliotecas de análise de
                      dados
                    </li>
                    <li>Laravel</li>
                    <li>PowerBI</li>
                    <li>Tableau</li>
                    <li>Excel, VBA e SQL</li>
                    <li>Jest</li>
                    <li>Next</li>
                    <li>Typescript</li>
                  </ul>
                </div>
              </BoardOfHabilities>
            </AboutMeContent>
          </div>
        </Section>
      </LazyShow>
    </>
  )
}

export default AboutMeSection
