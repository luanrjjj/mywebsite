/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'

import {
  Container,
  ContainerContent,
  HeaderComponent,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  StyledLinks,
  StyledNav,
} from './styles'

import Image from 'next/image'

import Link from 'next/link'

const Header = () => {
  const navLinks = [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ]

  return (
    <>
      <Container>
        <ContainerContent>
          <HeaderContainer>
            <HeaderComponent>
              <HeaderTitle>
                <span>LA</span>
              </HeaderTitle>

              <HeaderContent>
                <StyledNav>
                  <StyledLinks>
                    <ol>
                      {navLinks &&
                        navLinks.map(({ url, name }, i) => (
                          <li key={i}>
                            <Link href={url}>{name}</Link>
                          </li>
                        ))}
                    </ol>
                  </StyledLinks>
                </StyledNav>
              </HeaderContent>
            </HeaderComponent>
          </HeaderContainer>
        </ContainerContent>
      </Container>
    </>
  )
}

export default Header
