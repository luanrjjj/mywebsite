import styled from 'styled-components'
import colors from '../styles/colors'

const Container = styled.div`
  height: 100%;
  background-color: ${colors.body};
`
const Body = styled.div`
  background-color: ${colors.body};
  width: 100%;
  min-height: 100vh;

  font-size: 14px;
  scroll-behavior: smooth;
  .SectionContent {
    width: 100%;
  }

  p {
    line-height: 130%;
  }
`
export const AnimationSection = styled.div`
  width: 100%;
  left: 30%;

  .animation {
    max-width: 700px;
    margin: auto;

    @media (max-width: 750px) {
      width: 500px;
    }

    @media (max-width: 500px) {
      width: 350px;
      height: 500px;
    }

    @media (max-width: 350px) {
      width: 230px;
      height: 500px;
    }
  }
`
export default Body
