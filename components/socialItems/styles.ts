import styled from 'styled-components'
import colors from '../../styles/colors'

export const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 70px;
  max-height: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
 

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.white};
  }
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
        color: ${colors.white};
      }
    }
  }
`