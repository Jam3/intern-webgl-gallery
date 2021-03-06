import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import dynamic from 'next/dynamic';

import Nav from '../Nav/Nav';

const RotateScreen = dynamic(() => import('../RotateScreen/RotateScreen'), { ssr: false });

function Layout({ children }) {
  return (
    <>
      <Nav />

      {children}

      <RotateScreen />
    </>
  );
}

Layout.propTypes = checkProps({
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
});

Layout.defaultProps = {};

export default Layout;
