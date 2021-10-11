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
            <GridContent>
              <li>
                <Image
                  src="/GoBarber.jpg"
                  width={500}
                  height={250}
                ></Image>
                <Text></Text>
              </li>
            </GridContent>
            <GridContent>
              <li>
                <Image
                  src="/GoBarber.jpg"
                  width={500}
                  height={250}
                ></Image>
                <Text></Text>
              </li>
            </GridContent>
            <GridContent>
              <li>
                <Image
                  src="/GoBarber.jpg"
                  width={500}
                  height={250}
                ></Image>
                <Text></Text>
              </li>
            </GridContent>
            <GridContent>
              <li>
                <Image
                  src="/GoBarber.jpg"
                  width={500}
                  height={250}
                ></Image>
                <Text></Text>
              </li>
            </GridContent>
          </ul>
        </SectionContent>
      </Section>
    </>
  )
}

export default ProjectsSection
