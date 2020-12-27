import React, { FC, useCallback, useEffect } from 'react';
// components
import Spinner from 'modules/core/components/spinner';
import UserCard from 'modules/user/components/user-card';
// hooks
import { useObservable } from 'modules/core/hooks/useObservable';
// repository
import usersListRepository from 'modules/user/repository/list-users.repository';

import { Root } from './list-users.styled';

const ListUsers: FC = () => {
  const users = useObservable(usersListRepository.data);
  const isLoading = useObservable(usersListRepository.isLoading);

  useEffect(() => {
    usersListRepository.loadUsersList();
  }, []);

  const handleUserRemove = useCallback((userId: string) => {
    usersListRepository.removeUser(userId);
  }, []);

  return (
    <Root>
      <Spinner isLoading={isLoading}>
        {users.map((user) => (
          <UserCard key={user.id} onRemoveClick={handleUserRemove} {...user} />
        ))}
      </Spinner>
    </Root>
  );
};

export default ListUsers;
