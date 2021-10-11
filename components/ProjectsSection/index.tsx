import React, { useState, useEffect } from 'react'
import {
  GridContent,
  Section,
  SectionContent,
  Text,
} from './styles'
import Image from 'next/image'

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
                  <p className="features">
                    Características
                  </p>
                  <h3>GoBarber</h3>
                  <div>
                    <p className="cardText">
                      Est libero platea curae duis hendrerit
                      per ut dapibus per, class auctor
                      cursus tempus gravida lectus habitasse
                      neque massa, vestibulum proin velit
                      tempor volutpat amet sagittis mauris.
                      iaculis torquent etiam quis primis
                      mattis curabitur, fermentum ut auctor
                      fusce aptent, mollis elementum luctus
                      cubilia iaculis.
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
                </Text>
              </GridContent>
            </li>

            <li>
              <GridContent>
                <Text>
                  <p>
                    Est libero platea curae duis hendrerit
                    per ut dapibus per, class auctor cursus
                    tempus gravida lectus habitasse neque
                    massa, vestibulum proin velit tempor
                    volutpat amet sagittis mauris. iaculis
                    torquent etiam quis primis mattis
                    curabitur, fermentum ut auctor fusce
                    aptent, mollis elementum luctus cubilia
                    iaculis. ultricies vestibulum nisi
                    sagittis iaculis morbi suscipit praesent
                    ut, nullam quisque morbi aenean maecenas
                    vulputate pharetra, iaculis ad aliquam
                    habitasse ornare netus placerat.
                  </p>
                </Text>
                <Image
                  alt=""
                  src="/GoBarber.jpg"
                  width={500}
                  height={250}
                ></Image>
              </GridContent>
            </li>

            <li>
              <GridContent>
                <Image
                  alt=""
                  src="/GoBarber.jpg"
                  width={500}
                  height={250}
                ></Image>
                <Text>
                  <p className="features">
                    Características
                  </p>
                  <h3>GoBarber</h3>
                  <p>
                    Est libero platea curae duis hendrerit
                    per ut dapibus per, class auctor cursus
                    tempus gravida lectus habitasse neque
                    massa, vestibulum proin velit tempor
                    volutpat amet sagittis mauris. iaculis
                    torquent etiam quis primis mattis
                    curabitur, fermentum ut auctor fusce
                    aptent, mollis elementum luctus cubilia
                    iaculis. ultricies vestibulum nisi
                    sagittis iaculis morbi suscipit praesent
                    ut, nullam quisque morbi aenean maecenas
                    vulputate pharetra, iaculis ad aliquam
                    habitasse ornare netus placerat.
                  </p>
                </Text>
              </GridContent>
            </li>

            <li>
              <GridContent>
                <Text>
                  <p>
                    Est libero platea curae duis hendrerit
                    per ut dapibus per, class auctor cursus
                    tempus gravida lectus habitasse neque
                    massa, vestibulum proin velit tempor
                    volutpat amet sagittis mauris. iaculis
                    torquent etiam quis primis mattis
                    curabitur, fermentum ut auctor fusce
                    aptent, mollis elementum luctus cubilia
                    iaculis. ultricies vestibulum nisi
                    sagittis iaculis morbi suscipit praesent
                    ut, nullam quisque morbi aenean maecenas
                    vulputate pharetra, iaculis ad aliquam
                    habitasse ornare netus placerat.
                  </p>
                </Text>
                <Image
                  alt=""
                  src="/GoBarber.jpg"
                  width={500}
                  height={250}
                ></Image>
              </GridContent>
            </li>
          </ul>
        </SectionContent>
      </Section>
    </>
  )
}

export default ProjectsSection
