import React from 'react';
import CopyRight from './CopyRights';
import Version from './Version';

export const Footer = function Footer() {
  return (
    <footer className="main-footer">
      <Version />
      <CopyRight />
    </footer>
  );
};

export { default as CopyRight } from './CopyRights';
export { default as Version } from './Version';
