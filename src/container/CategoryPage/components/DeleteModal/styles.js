import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  background-color: #058405;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  margin-left: auto;

  .delete-btn {
    background-color: red;
    margin-left: 10px;
  }
`;

export const DeleteModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;