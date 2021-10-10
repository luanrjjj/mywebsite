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
    margin-left: 15px;
  }
  .Company {
    color: ${colors.green300};
    display: inline-block;
    position: relative;
    margin-left: 5px;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${colors.green200};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  ul {
    list-style: none;
    margin: 0.75em 0;
    padding: 0 1em;
  }
  li::before {
    content: '>';
    display: block;
    height: 0;
    width: 0;
    left: -1em;
    top: 0em;
    position: relative;
    color: ${colors.green200};
  }
`
