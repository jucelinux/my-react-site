import styled from 'styled-components';

// User Card
export const User = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 4.0rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

export const UserName = styled.div`
  h1 {
    font-size: 8.1rem;
  }

  h4 {
    font-size: 2.4rem;
    color: #f5f5fc;
  }
`;

export const GitInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    & + p {
      margin-left:2.4rem;
    }

    svg {
      height: 1.6rem;
      color: #FFCC73;
      margin-right: 8px;
    }
  };

  a {
    display: flex;
    align-items: center;
    margin-left:2.4rem;
    color: #f5f5fc;
    transition: 0.3s;

    &:hover {
      transform: translate(4px, -4px);
    }

    p {
      margin: 0 8px;
    }
    svg {
      height: 1.6rem;
      color: #FFCC73;
    }
  }
`;
