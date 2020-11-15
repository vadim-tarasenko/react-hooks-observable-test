import React, { FC, useCallback, useEffect } from 'react';
// components
import Spinner from 'modules/core/components/Spinner';
import UserCard from 'modules/user/components/UserCard';
// hooks
import { useObservable } from 'modules/core/hooks/useObservable';
// storage
import usersListStorage from 'modules/user/storage/listUsers';
// types
import type { User } from 'modules/user/types';

import { Root } from './ListUsers.styled';

const ListUsers: FC = () => {
  const users = useObservable<User[]>(usersListStorage.data);
  const isLoading = useObservable<boolean>(usersListStorage.isLoading);

  useEffect(() => {
    usersListStorage.loadUsersList();
  }, []);

  const handleUserRemove = useCallback((userId: string) => {
    usersListStorage.removeUser(userId);
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
