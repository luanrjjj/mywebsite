import React from 'react'
import { StyledSocialList } from './styles'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'

export const EmailItem = () => {
  return (
    <StyledSocialList>
      <a
        href="luanfreitas12@poli.ufrj.br"
        aria-label="Github"
        target="_blank"
        rel="noreferrer"
        className="GithubIcon"
      >
        luanfreitas12@poli.ufrj.br
      </a>
    </StyledSocialList>
  )
}
