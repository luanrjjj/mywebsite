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
  justify-content:center;
  text-align:center;
`
export default Body
