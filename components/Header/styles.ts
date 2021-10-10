import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2em;
`

export const ContainerContent = styled.div`
  /*
margin-left: auto;
margin-right: auto;
min-width:600px;
max-width:1050px;
*/
`
export const HeaderContainer = styled.header`
  max-width: 100%;
  background-color: ${colors.body};
  border-bottom: 1px solid ${colors.lightbody};
  z-index: 11;
`

export const HeaderComponent = styled.header`
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 600px;
`

export const HeaderLogo = styled.div`
  align-items: center;
  width: 50px;
  position: absolute;
  margin-top: 5px;
  margin-right: 10px;
`

export const HeaderTitle = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 15px;
  color: #22543d;
  font-weight: 700;
  font-size: 25px;
`

export const HeaderContent = styled.div``

export const StyledNav = styled.nav``

export const StyledLinks = styled.div`
  ol {
    display: flex;

    li {
      margin: 7px 5px;
      position: relative;
      font-size: 13px;
      margin-left: 10px;
      counter-increment: item 1;
      list-style: none;

      a {
        padding: 10px;
        color: ${colors.white};

        &:hover {
          color: #22543d;
        }

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: #22543d;
          text-align: right;
        }
      }
    }
  }
`
