import styled from 'styled-components'

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  li {
    color: #fff;
    padding: 2px;
    background-color: grey;
    border-radius: 5px;

    :not(:last-child) {
      margin-right: 5px;
      margin-bottom: 30px;
    }
  }

=
`
