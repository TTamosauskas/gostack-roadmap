import styled from 'styled-components';

export const Container = styled.div`
  .badge-container {
    border-radius: 8px;
    border: ${props => (props.active ? '1px solid #ddd' : '1px dashed #ddd')};
    width: 120px;
    height: 120px;
    background: ${props => (props.active ? '#ffc107' : 'transparent')};
    padding: 8px;
    margin: 16px;
    transition: all 0.2s;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    label {
      color: ${props => (props.active ? '#3F51B5' : '#ff9800f0')};
      font-weight: bold;
      font-size: 28px;
    }

    p {
      color: ${props => (props.active ? '#000' : '#aaa')};
      font-size: 11px;
      margin-top: 8px;
    }
  }

  .highlighted .badge-container {
    background: #18671f38;
    border: 1px solid #ddd;

    label {
      color: #18671f;
    }
  }
  .droptarget .badge-container.bdg-1,
  .droptarget .badge-container.bdg-2,
  .droptarget .badge-container.bdg-3 {
    background: '#fff';
  }
`;
