import styled from 'styled-components';

export const Dropzone = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fff;
  border: 2px dashed rgb(187, 186, 186);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  cursor: pointer;
  background-color: ${props => props.highlight ? "rgb(188, 185, 236)" : "none"};

  & > img {
    opacity: 0.3;
    height: 64px;
    width: 64px;
  }

  & > .file-input {
    display: none;
  }

  .file-name {
    display: inline-block;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Error = styled.p`
  color: red;
  margin: 8px 0;
`;