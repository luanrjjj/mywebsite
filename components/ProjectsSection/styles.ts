import styled from 'styled-components'
import colors from '../../styles/colors'

export const Section = styled.div`
  max-width: 100%;
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
    margin-left: 20px;

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
      .features1 {
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
  height: 350px;

  @media (max-width: 1050px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .imageGrid {
    height: 100%;
    margin-top: 30px;
    min-height: 250px;
  }

  .imageBox {
    display: block;
    position: relative;
    border-radius: 20px;
    background-color: ${colors.gray500};
    height: 250px;

    width: 500px;
    min-height: 250px !important;

    @media (max-width: 500px) {
      width: 450px !important;
    }
    @media (max-width: 450px) {
      width: 400px !important;
    }
    @media (max-width: 400px) {
      width: 350px !important;
    }
    @media (max-width: 350px) {
      width: 315px !important;
    }

    @media (max-width: 315px) {
      width: 270px !important;
    }

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
    min-height: 250px;
  }
`

export const Text = styled.div`
  width: 300px;
  margin-left: 50px;
  z-index: 20;

  .content {
    top: -20%;
    height: 100%;
  }

  .Icons {
    width: 100%;
    svg {
      color: ${colors.gray300};
      margin-top: 10px;
      margin-left: 10px;

      &:hover {
        color: ${colors.gray500};
      }
    }
  }

  .cardText {
    background-color: ${colors.heavybody};
    width: 600px;
    transform: translate(-30%, 0);
    padding: 20px;
    z-index: 20;
    font-size: 12px;
  }

  .cardText1 {
    background-color: ${colors.heavybody};
    width: 600px;
    padding: 20px;
    transform: translate(-5%, 0);
    font-size: 12px;
  }

  @media (max-width: 1050px) {
    display: none;
  }

  .details {
    display: inline;
    color: ${colors.green100};
  }
`
