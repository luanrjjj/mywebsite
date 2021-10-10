import styled from 'styled-components'
import colors from '../../styles/colors'

interface JobsProps {
  selected: boolean
  onClick: any
}
export const Section = styled.div`
  max-width: 100%;
`
export const SectionContent = styled.div`
  max-width: 700px;
  margin: auto;

  h2 {
    counter-increment: item 1;
    overflow: hidden;
    position: relative;
    color: ${colors.white};

    &:before {
      content: '02.';
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

  .FiltersAndText {
    display: flex;
  }
`

export const JobsList = styled.ul`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
  }
`

export const SelectedJob = styled.li<JobsProps>`
  padding: 20px;
  background-color: ${props =>
    props.selected ? `${colors.heavybody}` : ''};
  color: ${props =>
    props.selected ? `${colors.green300}` : '#fff'};
  border-left: 3px solid
    ${props =>
      props.selected ? `${colors.green300}` : '#fff'};
`
export const Text = styled.div`
  margin-left: 30px;

  .Function {
    color: ${colors.white};
    margin-left:15px;
  }
  .Company {
    color: ${colors.green300};

    &:hover {
    }
  }

  ul {
    li:before {
      content: '';
      position: absolute;
      border-right: 2px solid black;
      border-bottom: 2px solid black;
      width: 10px;
      height: 10px;
      top: calc(50% - 4px);
      left: -20px;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
`
