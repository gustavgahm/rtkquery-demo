import React from 'react';
import { NavLink as Root, NavLinkProps } from 'react-router-dom';

export const Link: React.FC<NavLinkProps> = React.memo((props) => (
  <Root
    {...props}
    className={({ isActive, isPending }) =>
      isPending ? 'pending' : isActive ? 'active' : ''
    }
    style={{ textDecoration: 'none', color: 'inherit'}}
  ></Root>
));
