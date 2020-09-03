import styled from 'styled-components';

// User Card
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 8.0rem 0;
`;

export const Content = styled.div`
  max-width:1216px;
  margin: 0 auto;
`;

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
  };

  a {
    margin-left:2.4rem;
  }
`;


// Repo Card
export const Repositories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.6rem;
`;

export const RepositoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 560px;
  height: 200px;
  background: #13111D;
  border-radius: 8px;
  border: 1px solid #717894;
  transition: 0.3s;

  &:hover {
    transform: translate(4px, -4px);
  }

  h4 {
    font-size: 2.4rem;
  }
`

export const BottomCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;

      p {
        & + p {
          margin-left: 2.4rem;
        }
      }
    }
`;
