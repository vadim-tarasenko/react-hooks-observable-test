// services
import ApiService from 'modules/core/services/Api.service';
// types
import type { User } from 'modules/user/types';

class UserService {
  constructor(private api: ApiService) {
    this.api = api;
  }

  loadUsers = async () => {
    const users = await this.api.get<User[]>('users');

    return users;
  };
}

const userService = new UserService(new ApiService());

export default userService;
