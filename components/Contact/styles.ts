import styled from 'styled-components'
import colors from '../../styles/colors'

export const ContactSection = styled.div`
  max-width: 100%;
  .SectionContent {
    max-width: 850px;
    margin: auto;
    h2 {
      counter-increment: item 1;
      overflow: hidden;
      position: relative;
      color: ${colors.white};

      &:before {
        content: '04' '.';
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

export const Form = styled.div`
  body {
    background: #0e101c;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  form {
    max-width: 500px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
  }

  .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }

  p {
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: '⚠ ';
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .bodyEmail {
    height: 80px;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }

  button[type='submit'],
  input[type='submit'] {
    background: linear-gradient(
      134deg,
      ${colors.green300} 0%,
      #22543d 99%
    );
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }

  button[type='submit']:hover,
  input[type='button']:hover,
  input[type='submit']:hover {
    transition: 0.3s all;
    transform: translateZ(42px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  button[type='submit']:active,
  input[type='button']:active,
  input[type='submit']:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type='button']:hover {
    transition: 0.3s all;
  }

  button[type='submit'],
  input[type='button'],
  input[type='submit'] {
    -webkit-appearance: none;
  }

  .App {
    max-width: 600px;
    margin: 0 auto;
  }

  button[type='button'] {
    display: block;
    appearance: none;
    background: #333;
    color: white;
    border: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }

  pre {
    color: white;
  }

  hr {
    margin-top: 30px;
  }

  button {
    display: block;
    appearance: none;
    margin-top: 40px;
    border: 1px solid #333;
    margin-bottom: 20px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }
`
