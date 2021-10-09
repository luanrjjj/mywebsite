import styled from 'styled-components'
import colors from '../../styles/colors'

export const Main = styled.div`
  max-width: 1050px;
  background-color: #f8f8fb;
  margin: auto;
  height: 800px;

  .TextMain {
    margin-top: 100px;
    position: absolute;
    margin-left: 40px;

    .MyName {
      color: #22543d;
      font-weight: 800;
    }

    h1 {
      color: ${colors.gray500};
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
