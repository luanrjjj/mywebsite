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
          <h2>Projetos</h2>

          <ul>
            <li>
              <GridContent>
                <div className="imageGrid">
                  <div className="imageBox">
                    <Image
                      alt=""
                      src="/GoBarber.jpg"
                      width={500}
                      height={250}
                      className="imageProject"
                    ></Image>
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
                        Est libero platea curae duis
                        hendrerit per ut dapibus per, class
                        auctor cursus tempus gravida lectus
                        habitasse neque massa, vestibulum
                        proin velit tempor volutpat amet
                        sagittis mauris. iaculis torquent
                        etiam quis primis mattis curabitur,
                        fermentum ut auctor fusce aptent,
                        mollis elementum luctus cubilia
                        iaculis.
                      </p>
                    </div>

                    <div className="detailsProject">
                      <div>ReactJS</div>
                      <div>NodeJS</div>
                      <div>Jest</div>
                      <div>MongoDB</div>
                      <div>Postgres</div>
                      <div className="lineBreak">Redis</div>
                      <div>Styled-Components</div>
                      <div>Amazon SES e S3</div>
                    </div>
                    <div className="Icons">
                      <MdOutlineOpenInNew />
                      <FiGithub />
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
                        Est libero platea curae duis
                        hendrerit per ut dapibus per, class
                        auctor cursus tempus gravida lectus
                        habitasse neque massa, vestibulum
                        proin velit tempor volutpat amet
                        sagittis mauris. iaculis torquent
                        etiam quis primis mattis curabitur,
                        fermentum ut auctor fusce aptent,
                        mollis elementum luctus cubilia
                        iaculis.
                      </p>
                    </div>

                    <div className="detailsProject">
                      <div>ReactJS</div>
                      <div>NodeJS</div>
                      <div>Jest</div>
                      <div>MongoDB</div>
                      <div>Postgres</div>
                      <div className="lineBreak">Redis</div>
                      <div>Styled-Components</div>
                      <div>Amazon SES</div>
                    </div>
                    <div className="Icons">
                      <MdOutlineOpenInNew />
                      <FiGithub />
                    </div>
                  </div>
                </Text>
                <div className="imageGrid">
                  <div className="imageBox">
                    <Image
                      alt=""
                      src="/GoBarber.jpg"
                      width={500}
                      height={250}
                      className="imageProject"
                    ></Image>
                  </div>
                </div>
              </GridContent>
            </li>
          </ul>
        </SectionContent>
      </Section>
    </>
  )
}

export default ProjectsSection
