import React from 'react';

import * as S from './styles';

import User from '../../components/User';
import Repos from '../../components/Repos';

const Home: React.FC = () => {
  return (
      <S.Container>
        <S.Content>
          <User/>
          <Repos/>
        </S.Content>
      </S.Container>
  );
}

export default Home;
