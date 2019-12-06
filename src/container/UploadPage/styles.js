import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin: 50px auto 0;
  width: 650px;
  border: 1px solid rgb(240, 240, 240);
  background-color: rgb(248, 251, 252);
  padding: 20px 40px;
`;

export const FormItem = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > label {
    display: inline-block;
    width: 20%;
  }

  & > button {
    margin-left: auto;
  }
`;

export const InputText = styled.input`
  width: 100%;
  font-size: 13px;
  padding: 4px 12px;
  line-height: 21px;

  :focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
`;

export const Button = styled.button`
  width: 120px;
  padding: 8px;
  background-color: #058405;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
`;

export const Error = styled.p`
  color: red;
  margin: 8px 0;
`;