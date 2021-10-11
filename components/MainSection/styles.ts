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
      font-size: 64px;
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
`
