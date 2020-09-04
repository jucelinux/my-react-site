import React, {useState, useEffect} from 'react';

import * as S from './styles';
import {
  Folder,
  Users,
  UserFriends,
  ChevronRight,
} from '@styled-icons/fa-solid';
import { Github } from '@styled-icons/fa-brands';

import api from '../../services/api';

interface UserGitHub {
  avatar_url: string;
  name: string;
  html_url: string;
  login: string;
  public_repos: string;
  followers: string;
  following: string;
 };

const User: React.FC = () => {

  const [user, setUser] = useState<UserGitHub>();
  useEffect(() => {
    async function getUser(): Promise<void> {
      await api.get('users/jucelinux').then((response) => {
        setUser(response.data);
      })
  }
  getUser();
  }, [user]);

  return (
    <>
      {user && (
        <S.User key={user.login}>
        <S.Avatar src={user.avatar_url} alt={user.name}/>
        <S.UserInfo>
          <S.UserName>
            <h1>{user.name}</h1>
            <h4>{user.login}</h4>
          </S.UserName>

          <S.GitInfo>
            <p><Folder/> {user.public_repos} Repositórios</p>
            <p><UserFriends/> {user.following} Seguidores</p>
            <p><Users/> {user.followers} Seguindo</p>
            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
              <Github/> <p>Ver GitHub</p> <ChevronRight/>
            </a>
          </S.GitInfo>
        </S.UserInfo>
      </S.User>
      )}
  </>
  )
}

export default User;
