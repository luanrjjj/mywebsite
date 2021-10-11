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
                    Lorem ipsum fermentum taciti aliquam
                    elementum hac malesuada nullam quis in
                    porttitor, lorem facilisis commodo
                    suspendisse felis aliquam venenatis hac
                    imperdiet tristique sem, sit vitae
                    curabitur elit cras massa sem lectus
                    quis curabitur.
                  </li>
                  <li>
                    Lorem ipsum fermentum taciti aliquam
                    elementum hac malesuada nullam quis in
                    porttitor.
                  </li>
                  <li>
                    Lorem ipsum fermentum taciti aliquam
                    elementum hac malesuada nullam quis in
                    porttitor.
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
                    Lorem ipsum fermentum taciti aliquam
                    elementum hac malesuada nullam quis in
                  </li>
                  <li>
                    Lorem ipsum fermentum taciti aliquam
                    elementum hac malesuada nullam quis in
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
