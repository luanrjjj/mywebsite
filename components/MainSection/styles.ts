import styled, { keyframes } from 'styled-components'
import colors from '../../styles/colors'

const animation = keyframes`
  from {opacity:0;}
  to { opacity:1;}
`
const animationTExt = keyframes`
 from {
        opacity: 0;
        transform: translateY(-10px);
        filter: blur(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
`
export const Maxwidth = styled.div`
  background-color: ${colors.body};
  max-width: 100%;
  border-bottom: 3px solid ${colors.lightbody};
  margin-top: 100px;
`

export const Main = styled.div`
  max-width: 1050px;
  background-color: ${colors.body};
  margin: auto;
  height: 550px;

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
      color: ${colors.green200};
      font-size: 48px;
    }

    p {
      font-size: 16px;
      width: 500px;
      color: ${colors.gray500};

      @media (max-width: 530px) {
        width: 300px;
      }

      @media (max-width: 360px) {
        width: 210px;
      }
    }

    h1,
    h2,
    p {
      animation:${animation} 1.5s;
      }
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

    &:hover {
      background: linear-gradient(
        134deg,
        ${colors.body} 0%,
        #22543d 99%
      );
    }
    &:active {
      transition: 0.3s all;
      transform: translateY(3px);
      opacity: 0.8;
      background: linear-gradient(
        134deg,
        ${colors.body} 0%,
        #22543d 99%
      );
    }

    &:focus {
      outline: none;
    }
  

`
