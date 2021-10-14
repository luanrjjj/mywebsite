import styled from 'styled-components'
import colors from '../../styles/colors'

export const Section = styled.section`
  max-width: 100%;
  border-bottom: 3px solid ${colors.lightbody};
  .SectionContent {
    max-width: 850px;
    margin: auto;
    h2 {
      counter-increment: item 1;
      overflow: hidden;
      position: relative;
      color: ${colors.white};
      margin-left: 10px;

      &:before {
        content: '0' counter(item) '.';
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
  }
`

export const AboutMeContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;
  max-width: 850px;
  margin: auto;
  margin-bottom: 30px;

  .Picture {
    position: relative;
    @media (max-width: 815px) {
      display: none;
    }
  }
  .ImageBox {
    display: none;
    position: relative;
    width: 300px;
    border-radius: 20px;
    background-color: ${colors.gray500};

    &:hover,
    &:focus {
      background-color: ${colors.gray300};
      outline: 0;
      top: -5px;
    }
  }
  .ImageFace {
    width: 300px;
    height: 400px;

    .imgFace {
      position: relative;
      border-radius: 20px;
      mix-blend-mode: multiply;
    }
  }
`
export const Text = styled.div`
  font-family: 'Times New Roman', Times, serif;
  color: ${colors.gray500};
  margin-left: 30px;
  min-width: 400px;

  @media (max-width: 340px) {
    min-width: 300px;
  }
`
