import styled from 'styled-components';

export const CategoryListPageWrapper = styled.div``;

export const CategoryListHead = styled.div`
  text-align: center;

  .add-button {
    margin-bottom: 25px;
  }
`;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 100px;
`;

export const CategoryTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

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
    margin-right: 10px;
  }
`;

export const SearchWrapper = styled.div`
  margin-bottom: 20px;
`;

export const PaginationWrapper = styled.div`
  margin: 30px 0 30px auto;
`;

export const PageNumberFilter = styled.div`
  margin-bottom: 20px;

  & > select {
    width: 84px;
    height: 32px;
    margin-left: 20px;
  }
`;