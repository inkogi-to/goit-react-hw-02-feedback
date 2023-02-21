import styled from 'styled-components'


export const Btn = styled.button`
  padding-top: 5px;
  margin-top: 40px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  :not(:last-child) {
    margin-right: 10px;
  }

  :nth-child(2n+1) {
    background-color: rgba(184, 255, 136, 0.57);
  }

  svg {
    width: 30px;
    height: 30px;


  }

`
