import React from 'react';

import * as S from './styles'

const Home: React.FC = () => {
  return (
      <S.Container>
        <S.Content>
          <S.User>
            <S.Avatar src="https://i1.sndcdn.com/avatars-000004666181-gt90h3-t500x500.jpg" alt="avatar"/>
            <S.UserInfo>
              <S.UserName>
                <h1>Jucelino Junior</h1>
                <h4>Jucelinux</h4>
              </S.UserName>

              <S.GitInfo>
                <p>Repositórios</p>
                <p>Seguidores</p>
                <p>Seguindo</p>
                <a href="https://github.com/jucelinux">Ver GitHub</a>
              </S.GitInfo>
            </S.UserInfo>
          </S.User>

          <S.Repositories>
            <S.RepositoryCard>
              <h4>JuceRepo</h4>
              <p> JuceRepo Description</p>

              <S.BottomCard>
                <div>
                  <p>Repositórios</p>
                  <p>Seguidores</p>
                  <p>Seguindo</p>
                </div>
                <a href="https://github.com/jucelinux">Ver GitHub</a>
              </S.BottomCard>
            </S.RepositoryCard>
          </S.Repositories>
        </S.Content>
      </S.Container>
  );
}

export default Home;
