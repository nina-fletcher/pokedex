import React from 'react';
import Link from 'next/link';
import { HeartFilled } from '@ant-design/icons';

import { Header } from './styles';

export const NavBar: React.FC = () => {
  return (
    <Header>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="All About Me" height="32" />
        </a>
      </Link>
      <Link href="/favourites">
        <a>
          <HeartFilled style={{ fontSize: 24, color: '#ff1c1c' }} />
        </a>
      </Link>
    </Header>
  );
};
