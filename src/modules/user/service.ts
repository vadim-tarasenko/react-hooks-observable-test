import { Observable } from 'utils/Observable';
// types
import { User } from 'modules/user/types';

class UserService {
  readonly list = new Observable<User[]>([]);
  readonly isLoading = new Observable<boolean>(false);

  loadUsers = async () => {
    this.isLoading.set(true);

    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
    const response = await fetch('http://localhost:8000/users');
    const data = await response.json();

    this.list.set(data);
    this.isLoading.set(false);
  };
}

const userService = new UserService();

export default userService;
