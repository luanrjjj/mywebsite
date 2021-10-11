import styled from 'styled-components'
import colors from '../../styles/colors'

export const Section = styled.div`
  max-width: 100%;
  max-height: 1100px;
  border-bottom: 3px solid ${colors.lightbody};
`
export const SectionContent = styled.div`
  max-width: 1100px;
  margin: auto;

  h2 {
    counter-increment: item 1;
    overflow: hidden;
    position: relative;
    color: ${colors.white};

    &:before {
      content: '03.';
      margin-right: 5px;
      color: #22543d;
      text-align: right;
    }
    &:after {
      content: '';
      display: block;
      position: relative;
      top: -12px;
      width: 300px;
      height: 1px;
      margin-left: 180px;
    }
  }
`
export const GridContent = styled.div`
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;
`

export const Text = styled.div``
