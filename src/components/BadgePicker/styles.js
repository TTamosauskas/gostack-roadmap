import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  h3 {
    color: #fff;
  }

  #picker {
    height: 750px;
    overflow: hidden;
    box-shadow: 0px 10px 8px -10px rgba(255, 255, 255, 1);
  }
`;
