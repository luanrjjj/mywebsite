import React, { useState, useEffect } from 'react'
import {
  GridContent,
  Section,
  SectionContent,
  Text,
} from './styles'
import Image from 'next/image'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { FiGithub } from 'react-icons/fi'

const ProjectsSection = () => {
  return (
    <>
      <Section>
        <SectionContent>
          <div className="DisplayContent">
            <h2>Projetos</h2>

            <ul>
              <li>
                <GridContent>
                  <div className="imageGrid">
                    <div className="imageBox">
                      <a href="https://www.mecz.com.br">
                        <Image
                          alt=""
                          src="/MeczBarber.png"
                          width={500}
                          height={250}
                          layout="fill"
                          className="imageProject"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <Text>
                    <div className="content">
                      <p className="features">
                        Características
                      </p>
                      <h3>GoBarber</h3>
                      <div>
                        <p className="cardText">
                          Este projeto é um sistema de
                          agendamento de uma barbearia. O
                          front-end e o back-end foram
                          separados, sendo que no front-end
                          foi utilizado os conceitos mais
                          avançados do{' '}
                          <p className="details">React</p>.
                          O Back-end que foi o foco
                          principal desse projeto foi feito
                          com cobertura total de testes
                          unitários, respeitando os
                          príncipios{' '}
                          <p className="details">SOLID</p>{' '}
                          na Arquitetura do projeto. Além
                          dis so, o projeto utiliza 3 bancos
                          de dados e também utiliza os
                          serviços da{' '}
                          <p className="details">
                            Digital Ocean
                          </p>
                          , para hospedagem do back-end, e{' '}
                          <p className="details">
                            {' '}
                            Amazon S3 e SES
                          </p>
                          .
                        </p>
                      </div>

                      <div className="detailsProject">
                        <div>ReactJS</div>
                        <div>NodeJS</div>
                        <div>Jest</div>
                        <div>MongoDB</div>
                        <div>Postgres</div>
                        <div className="lineBreak">
                          Redis
                        </div>
                        <div>Styled-Components</div>
                        <div>Amazon SES e S3</div>
                      </div>
                      <div className="Icons">
                        <a
                          href="https://www.mecz.com.br"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MdOutlineOpenInNew />
                        </a>
                        <a href="https://github.com/luanrjjj/backendnodegobarber">
                          <FiGithub />
                        </a>
                      </div>
                    </div>
                  </Text>
                </GridContent>
              </li>

              <li>
                <GridContent>
                  <Text>
                    <div className="content">
                      <p className="features1">
                        Características
                      </p>
                      <h3>GoBarber</h3>
                      <div>
                        <p className="cardText1">
                          Como trabalhei bastante com a
                          confecção de Dashboards em Powerbi
                          e Tableau, decidi fazer um
                          Dashboard com{' '}
                          <p className="details">React</p>.{' '}
                          Este projeto consulta a{' '}
                          <p className="details">
                            API do Github
                          </p>{' '}
                          e fornece as informações do
                          repositório de um Usuário em um
                          Dashboard.
                        </p>
                      </div>

                      <div className="detailsProject">
                        <div>ReactJS</div>
                        <div>Github API</div>
                        <div>Styled-Components</div>

                        <div className="lineBreak">
                          ChartJS
                        </div>
                      </div>
                      <div className="Icons">
                        <a href="https://projectgitdash.netlify.app/">
                          <MdOutlineOpenInNew />
                        </a>
                        <FiGithub />
                      </div>
                    </div>
                  </Text>
                  <div className="imageGrid">
                    <div className="imageBox">
                      <a href="https://projectgitdash.netlify.app/">
                        <Image
                          alt=""
                          src="/GitDash.png"
                          width={500}
                          height={250}
                          layout="fill"
                          className="imageProject"
                        ></Image>
                      </a>
                    </div>
                  </div>
                </GridContent>
              </li>

              <li>
                <GridContent>
                  <div className="imageGrid">
                    <div className="imageBox">
                      <a href="https://ignews-two.vercel.app/">
                        <Image
                          alt=""
                          src="/Ignews.png"
                          width={500}
                          height={250}
                          layout="fill"
                          className="imageProject"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <Text>
                    <div className="content">
                      <p className="features">
                        Características
                      </p>
                      <h3>GoBarber</h3>
                      <div>
                        <p className="cardText">
                          Este projeto é um blog pago por
                          assinatura. Na sua construção foi
                          utilizado alguns dos conceitos da
                          arquitetura{' '}
                          <p className="details">
                            JAMStack.
                          </p>{' '}
                          Além disso, o NextJS foi bastante
                          explorado nesse projeto para
                          renderização, visando um melhor
                          SEO e perfomance da aplicação.
                          Cartão de Crédito teste : 4242
                          4242 4242 4242.
                        </p>
                      </div>

                      <div className="detailsProject">
                        <div>ReactJS</div>
                        <div>MongoDB</div>
                        <div>Prismic CMS</div>
                        <div>Stripe</div>
                        <div>NextJS</div>
                        <div className="lineBreak">
                          OAuth
                        </div>
                      </div>
                      <div className="Icons">
                        <a href="https://ignews-two.vercel.app/">
                          <MdOutlineOpenInNew />
                        </a>
                        <a href="https://github.com/luanrjjj/ignews">
                          <FiGithub />
                        </a>
                      </div>
                    </div>
                  </Text>
                </GridContent>
              </li>
            </ul>
          </div>
        </SectionContent>
      </Section>
    </>
  )
}

export default ProjectsSection
