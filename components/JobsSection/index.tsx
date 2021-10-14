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

export const JobsSection = () => {
  const [filter, setFilter] = useState('RioGaleão')

  const filterJobs = ['RioGaleão', 'Lemobs']
  return (
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
                  <a className="Company">
                    {' '}
                    @ Aeroporto RioGaleão
                  </a>
                </span>
                <ul>
                  <li>
                    Controle de Opex,na ordem de R$ 200 MM
                    anual (correspondendo a mais de 60% do
                    Opex total do Aeroporto), dos Setores de
                    Operações e Engenharia;
                  </li>
                  <li>
                    Construção de Relatórios Financeiros
                    para Diretoria, inserindo Ferramentas de
                    Business Inteligence e Análise de Dados;
                  </li>
                  <li>
                    Instaurar uma cultura de acompanhamento
                    dos custos para uma elaboração cada vez
                    mais precisa do Orçamento.
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
                  <a className="Company"> @ Lemobs</a>
                </span>
                <ul>
                  <li>
                    Construção de Dashboards para Clientes
                    Externos e Internos;
                  </li>
                  <li>
                    Crição de fluxos de tratamento e análise
                    de dados em Python;
                  </li>
                  <li>
                    Ferramentas Utilizadas: Tableau, Python
                    e SQL.
                  </li>
                </ul>
              </>
            )}
          </Text>
        </div>
      </SectionContent>
    </Section>
  )
}
