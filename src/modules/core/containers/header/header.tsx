import React, { FC } from 'react';
// hooks
import { useObservable } from 'modules/core/hooks/useObservable';
// repositories
import userRepository from 'modules/user/repository/user.repository';

import { Root } from './header.styled';

const Header: FC = () => {
  const fullName = useObservable(
    userRepository.data,
    (data) => `${data.firstName}${data.lastName}`
  );

  return <Root>{fullName}</Root>;
};

export default Header;
