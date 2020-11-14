import React, { useEffect } from 'react';
// hooks
import { useObservable } from 'modules/core/hooks/useObservable';
// services
import userService from 'modules/user/service';
// types
import { User } from 'modules/user/types';

function App() {
  const isLoading = useObservable<boolean>(userService.isLoading);
  const users = useObservable<User[]>(userService.list);

  useEffect(() => {
    userService.loadUsers();
  }, []);

  return (
    <div className='App'>
      {isLoading ? 'loading...' : JSON.stringify(users)}
    </div>
  );
}

export default App;
