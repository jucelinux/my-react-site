import React, {useState, useEffect} from 'react';

import * as S from './styles';
import {
  Star,
  Eye,
  CodeBranch,
  ChevronRight,
} from '@styled-icons/fa-solid';
import { Github } from '@styled-icons/fa-brands';

import api from '../../services/api';

 interface ReposGithub {
  name: string;
  description: string;
  stargazers_count: string;
  watchers_count: string;
  forks_count: string;
  html_url: string;
}

const Repos: React.FC = () => {

  const [repos, setRepos] = useState<ReposGithub[]>([]);

  useEffect(() => {
    async function getRepos(): Promise<void> {
      await api.get('users/jucelinux/repos?sort=updated:_asc').then((response) => {
        setRepos(response.data);
      })
    }
    getRepos();
  }, [repos]);

  return (
    <S.Repositories>
      {repos.map((repo) => (
          <S.RepositoryCard>
          <h4>{repo.name}</h4>
          <p> {repo.description}</p>

          <S.BottomCard>
            <div>
              <p><Star/> {repo.stargazers_count}</p>
              <p><Eye/> {repo.watchers_count}</p>
              <p><CodeBranch/> {repo.forks_count}</p>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github/> <p>Ver GitHub</p> <ChevronRight/>
            </a>
          </S.BottomCard>
        </S.RepositoryCard>
      ))}
    </S.Repositories>
  );
}

export default Repos;
