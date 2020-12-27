import styled from 'styled-components';

export const Root = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  box-shadow: 10px 10px 40px rgba(229, 233, 246, 0.4);
`;

export const UserName = styled.span`
  font-size: 18px;
  color: #1c74ef;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f04037;
  color: #f04037;
  background-color: #fff;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  height: 44px;
  padding: 0 22px;
  font-size: 16px;
`;
