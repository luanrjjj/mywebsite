import styled from 'styled-components'
import colors from '../../styles/colors'

export const Maxwidth = styled.div`
  background-color: ${colors.body};
  max-width: 100%;
  border-bottom: 3px solid ${colors.lightbody};
  margin-top: 30px;
`

export const Main = styled.div`
  max-width: 1050px;
  background-color: ${colors.body};
  margin: auto;
  height: 500px;

  .TextMain {
    position: absolute;
    margin-left: 40px;

    .MyName {
      color: ${colors.gray500};
      font-weight: 800;
    }

    h1 {
      color: #22543d;
      font-size: 36px;
    }

    h2 {
      color: ${colors.gray700};
      font-size: 48px;
    }

    p {
      font-size: 16px;
      width: 500px;
      color: ${colors.gray500};
    }
  }

  button {
    padding: 10px;
    background: transparent;
    border-color: ${colors.green300};
    color: ${colors.green300};
    transition: 1s;
    border: 1px solid;
    overflow: hidden;
    position: relative;
    margin-top: 30px;

    &:after {
      background: #fff;
      content: '';
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }

    &:hover {
      background-color: ${colors.lightbody};
      mix-blend-mode: hue;
    }
  }
`
