import React, { FC } from 'react';
// components
import ListUsers from 'modules/user/containers/list-users';
// containers
import Header from 'modules/core/containers/header';
// style
import GlobalStyles from 'style/global';

const App: FC = () => (
  <div className='App'>
    <GlobalStyles />
    <Header />
    <ListUsers />
  </div>
);

export default App;
