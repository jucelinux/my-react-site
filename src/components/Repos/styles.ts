import styled from 'styled-components';

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

      svg {
        height: 1.6rem;
        color: #FFCC73;
        margin-right: 8px;
      }
    }

  a {
    display: flex;
    align-items: center;
    color: #717894;

    p {
      margin: 0 8px;
    }

    svg {
      height: 1.6rem;
    }

    &:hover {
      color: #f5f5fc;

      svg {
        color: #FFCC73;
      }
    }
  }
`;
