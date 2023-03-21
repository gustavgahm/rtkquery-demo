import React from 'react';
import { Link as Root, LinkProps } from 'react-router-dom';

export const Link: React.FC<LinkProps> = React.memo((props) => (
  <Root {...props} style={{ textDecoration: 'none', color: 'inherit' }}></Root>
));
