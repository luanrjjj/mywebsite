import React from 'react'

import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { Section, SectionContent } from './styles'

export const JobsSection = () => {
  return (
    <Section>
      <h2>Experiência Profissional</h2>
      <SectionContent>
        <button>RioGaleão</button>
        <button>Lemobs</button>
      </SectionContent>
    </Section>
  )
}
