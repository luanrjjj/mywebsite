import React from 'react'
import { StyledSocialList } from './styles'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'

export const SocialItems = () => {
  return (
    <StyledSocialList>
      <li key="github">
        <a
          href="https://github.com/luanrjjj"
          aria-label="Github"
          target="_blank"
          rel="noreferrer"
          className="GithubIcon"
        >
          <FiGithub />
        </a>
      </li>
      <li key="linkedin">
        <a
          href="https://www.linkedin.com/in/luan-alfredo-freitas-dias-924133180/"
          aria-label="Github"
          target="_blank"
          rel="noreferrer"
          className="GithubIcon"
        >
          <AiOutlineLinkedin />
        </a>
      </li>
    </StyledSocialList>
  )
}
