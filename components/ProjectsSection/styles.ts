import styled from 'styled-components'
import colors from '../../styles/colors'

export const Section = styled.div`
  max-width: 100%;
  max-height: 1300px;
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
  ul {
    list-style: none;
    margin: 0.75em 0;
    padding: 0 1em;

    li {
      margin-top: 30px;
      display: flex;

      p {
        color: ${colors.gray300};
        width: 400px;
      }
      .features {
        color: ${colors.green300};
      }

      h3 {
        color: ${colors.gray300};
      }
    }
    .detailsProject {
      display: flex;
      width: 500px;
      flex-direction: row;
      flex-wrap: wrap;

      div {
        margin-left: 10px;
        color: ${colors.gray500};
        list-style: none;
      }
    }
  }
`
export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 50px;
  height:300px; 

  .imageGrid {
    height:100%;
  }

  .imageBox {
    display: block;
    position: relative;
    border-radius: 20px;
    background-color: ${colors.gray500};
    height:250px; 
    
   

    &:hover,
    &:focus {
      background-color: ${colors.gray100};
      outline: 0;
    }
  }
  .imageProject {
    position: relative;
    border-radius: 20px;

    mix-blend-mode: multiply;
  }
`

export const Text = styled.div`
  margin: auto;
  width: 300px;

  .cardText {
    background-color: ${colors.heavybody};
    width: 600px;
    transform: translate(-30%, 0);
    padding: 20px;
    z-index: 20;
  }
`
