import React, { useState } from 'react'

import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {
  JobsList,
  Section,
  SectionContent,
  SelectedJob,
  Text,
} from './styles'
import LazyShow from '../Animation'

export const JobsSection = () => {
  const [filter, setFilter] = useState('RioGaleão')

  const filterJobs = ['RioGaleão', 'Lemobs']
  return (
    <LazyShow>
      <Section>
        <SectionContent>
          <h2>Experiência Profissional</h2>
          <div className="FiltersAndText">
            <JobsList>
              {filterJobs?.map((Job: string) => {
                return (
                  <SelectedJob
                    onClick={() => setFilter(Job)}
                    selected={Job === filter}
                    key={Job}
                  >
                    <a>{Job}</a>
                  </SelectedJob>
                )
              })}
            </JobsList>

            <Text>
              {filter === 'RioGaleão' ? (
                <>
                  <span className="Function">
                    Estágio
                    <a
                      href="https://www.riogaleao.com"
                      className="Company"
                    >
                      {' '}
                      @ Aeroporto RioGaleão
                    </a>
                  </span>
                  <ul>
                    <li>
                      Controle de Opex,na ordem de R$ 200 MM
                      anual (correspondendo a mais de 60% do
                      Opex total do Aeroporto), dos Setores
                      de Operações e Engenharia;
                    </li>
                    <li>
                      Construção de Relatórios Financeiros
                      para Diretoria, utilizando Ferramentas
                      como{' '}
                      <p className="details">
                        Powerbi, Sharepoint, Sap, Python e
                        VBA
                      </p>
                      ;
                    </li>
                    <li>
                      Instaurar uma cultura de
                      acompanhamento dos custos para uma
                      elaboração cada vez mais precisa do
                      Orçamento.
                    </li>
                    <li>
                      União da Perfomance Operacional com a
                      Análise de Custos do Aeroporto Rio
                      Galeão;
                    </li>
                    <li>
                      Acompanhamento contínuo dos Custos com
                      todos os Gestores de Engenharia e
                      Operações do Aeroporto.
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <span className="Function">
                    Estágio
                    <a
                      href="https://lemobs.com.br"
                      className="Company"
                    >
                      {' '}
                      @ Lemobs
                    </a>
                  </span>
                  <ul>
                    <li>
                      Construção de Dashboards para Clientes
                      Externos e Internos;
                    </li>
                    <li>
                      Crição de fluxos de tratamento e
                      análise de dados em{' '}
                      <p className="details">Python</p>;
                    </li>
                    <li>
                      Ferramentas Utilizadas:{' '}
                      <p className="details">
                        Tableau, Python e SQL.
                      </p>
                    </li>
                  </ul>
                </>
              )}
            </Text>
          </div>
        </SectionContent>
      </Section>
    </LazyShow>
  )
}
