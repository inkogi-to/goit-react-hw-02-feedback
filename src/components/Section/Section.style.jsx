import styled from 'styled-components';

export const SectinConteiner = styled.div`
  width: 350px;
  height: 150px;
  border: 1px solid black;
  margin: auto;
  text-align: center;
  background-color: rgba(149, 131, 122, 0.8);

  :not(:last-child) {
    margin-top: 50px;
    padding: 10px;
    border-bottom: none;
  }

  :not(:first-child) {
    border-top: none;

  }
`

export const Title = styled.h2`
  color: white;
`
