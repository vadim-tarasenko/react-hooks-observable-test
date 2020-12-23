import { BehaviorSubject } from 'rxjs';
// services
import userService from 'modules/user/user.service';
// types
import type { User } from 'modules/user/types';
import type { StorageAction } from 'types';
// test
import PersistRepository from 'services/repository/persist-repository';

class ListUsersRepository extends PersistRepository {
  readonly data = new BehaviorSubject<User[]>([]);
  readonly isLoading = new BehaviorSubject<boolean>(false);

  constructor() {
    super();

    this.persist(this, {
      blackList: ['isLoading'],
    });
  }

  loadUsersList: StorageAction = async () => {
    this.isLoading.next(true);

    const list = await userService.loadUsers();

    if (list !== undefined) {
      this.data.next(list);
    }

    this.isLoading.next(false);
  };

  addUser: StorageAction = async (user: User) => {
    this.data.next([...this.data.value, user]);
  };

  removeUser: StorageAction = async (userId: string) => {
    // api request...

    this.data.next(this.data.value.filter((user) => user.id !== userId));
  };
}

export default new ListUsersRepository();
