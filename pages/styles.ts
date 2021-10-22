import styled from 'styled-components'
import colors from '../styles/colors'

const Body = styled.div`
  background-color: ${colors.body};
  width: 100%;

  font-size: 14px;
  scroll-behavior: smooth;
  .SectionContent {
    width: 100%;
  }
`
export const AnimationSection = styled.div`
  width: 100%;
  height: 110vh;
  left: 30%;

  .animation {
    max-width: 700px;
    margin: auto;

    @media (max-width: 750px) {
      width: 500px;
    }

    @media (max-width: 50px) {
      width: 350px;
    }
  }
`
export default Body
