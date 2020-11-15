import { Observable } from 'utils/observable';
// services
import userService from 'modules/user/service';
// types
import type { User } from 'modules/user/types';
import type { StorageAction } from 'types';

class ListUsers {
  readonly data = new Observable<User[]>([]);

  readonly isLoading = new Observable<boolean>(false);

  loadUsersList: StorageAction = async () => {
    this.isLoading.set(true);

    const list = await userService.loadUsers();

    if (list !== undefined) {
      this.data.set(list);
    }

    this.isLoading.set(false);
  };

  addUser: StorageAction = async (user: User) => {
    this.data.set([...this.data.get(), user]);
  };

  removeUser: StorageAction = async (userId: string) => {
    // api request...

    this.data.set(this.data.get().filter((user) => user.id !== userId));
  };
}

export default new ListUsers();
